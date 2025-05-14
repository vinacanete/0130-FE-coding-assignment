import { bookData } from "./api";
import { fetchBooks } from "./api";

export function displayBooks() {

    const tableBody = document.getElementById("tbody") as HTMLTableSectionElement;
    // Clear the table body before adding new rows
    tableBody.innerHTML = ""; 
    // Loop through the books and create a new table row for each book
    bookData.map(book => {

        // Create a new table row
        const newTableRow = document.createElement("tr");

        // Create a new table cell for the book counter
        const bookNumCell = document.createElement("td");
        bookNumCell.innerHTML = book.id.toString();
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