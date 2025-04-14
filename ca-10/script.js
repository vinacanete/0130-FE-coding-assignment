// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

const formButton = document.getElementById("formSubmit");

formButton.addEventListener("click", (event) => {
    event.preventDefault();
    const book = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const rating = document.getElementById("bookRating").value;

    const tableBody = document.getElementById("tbody");

    // Create a new table row
    const newTableRow = document.createElement("tr");

    // Create a new table cell for the book counter
    const bookNumCell = document.createElement("td");
    bookNumCell.innerHTML = tableBody.children.length + 1;
    newTableRow.append(bookNumCell);

    // Create a new table cell for each input
    const bookTitleCell = document.createElement("td");
    bookTitleCell.innerHTML = book;
    newTableRow.append(bookTitleCell);

    const bookAuthorCell = document.createElement("td");
    bookAuthorCell.innerHTML = author;
    newTableRow.append(bookAuthorCell);

    const bookRatingCell = document.createElement("td");
    bookRatingCell.innerHTML = rating;
    newTableRow.append(bookRatingCell);

    // append the new table row to the table body
    tableBody.append(newTableRow);

    // Clear the form fields
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookRating").value = "";
});