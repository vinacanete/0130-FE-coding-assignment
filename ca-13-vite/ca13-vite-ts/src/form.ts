import { bookData, fetchBooks } from "./api";

export function form() {
    const formButton = document.getElementById("formSubmit") as HTMLButtonElement;

    formButton.addEventListener("click", (event) => {
        // Creating the book item with the button
        event.preventDefault();

        const book = {
            id: bookData.length + 1,
            title: (document.getElementById("bookTitle") as HTMLInputElement)?.value || "",
            author: (document.getElementById("bookAuthor") as HTMLInputElement)?.value || "",
            review: (document.getElementById("bookReview") as HTMLInputElement)?.value || "",
            rating: (document.getElementById("bookRating") as HTMLInputElement)?.value || ""
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
        (document.getElementById("bookTitle")as HTMLInputElement).value = "";
        (document.getElementById("bookAuthor")as HTMLInputElement).value = "";
        (document.getElementById("bookReview")as HTMLInputElement).value = "";
        (document.getElementById("bookRating")as HTMLInputElement).value = "";
    });

}