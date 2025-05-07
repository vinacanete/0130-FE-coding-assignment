// Create a CRD application (CRUD without update) using json-server or another API
// Use fetch and async/await to interact with the API
// Use a form to create/post new entities
// Build a way for users to delete entities
// Include a way to get entities from the API and display them
// You do NOT need update, but you can add it if you'd like
// Use Bootstrap and/or CSS to style your project

const bookContainer = document.getElementById("book-container");
let bookData = [];

async function fetchBooks() {
    const response = await fetch('http://localhost:3000/book')
    const data = await response.json(); 
    bookData = data; 
    displayBooks();
};

function displayBooks() {

    const tableBody = document.getElementById("tbody");
    // Clear the table body before adding new rows
    tableBody.innerHTML = ""; 
    // Loop through the books and create a new table row for each book
    bookData.map(book => {

        // Create a new table row
        const newTableRow = document.createElement("tr");

        // Create a new table cell for the book counter
        const bookNumCell = document.createElement("td");
        bookNumCell.innerHTML = book.id;
        newTableRow.append(bookNumCell);

        // Create a new table cell for each data value
        const bookTitleCell = document.createElement("td");
        bookTitleCell.innerHTML = book.title;
        newTableRow.append(bookTitleCell);

        const bookAuthorCell = document.createElement("td");
        bookAuthorCell.innerHTML = book.author;
        newTableRow.append(bookAuthorCell);

        const bookReviewCell = document.createElement("td");
        bookReviewCell.innerHTML = book.review;
        newTableRow.append(bookReviewCell);

        const bookRatingCell = document.createElement("td");
        bookRatingCell.innerHTML = book.rating;
        newTableRow.append(bookRatingCell);

        // Append the new table row to the table body
        tableBody.append(newTableRow);

        // Create a new table cell for the checkbox to delete row
        const bookDeleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.addEventListener("click", () => {
            // Call the delete function
            fetch("http://localhost:3000/book/" + book.id, {
                method: "DELETE",
            })
            .then(() => {
                // Remove the row from the table
                newTableRow.remove();
            }
            );
        });
        bookDeleteCell.append(deleteButton);
        newTableRow.append(bookDeleteCell);
    
    });
}

fetchBooks();

const formButton = document.getElementById("formSubmit");

formButton.addEventListener("click", (event) => {
    // Creating the book item with the button
    event.preventDefault();

    const book = {
        id: bookData.length + 1,
        title: document.getElementById("bookTitle").value,
        author: document.getElementById("bookAuthor").value,
        review: document.getElementById("bookReview").value,
        rating: document.getElementById("bookRating").value
    };        

    // Create function to post new book


    async function onAddBook() {
        const response = await fetch("http://localhost:3000/book", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book) 
        });
        fetchBooks();
    }
    onAddBook();


    
    // Clear the form fields
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookReview").value = "";
    document.getElementById("bookRating").value = "";
});

