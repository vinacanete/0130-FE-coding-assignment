import {displayBooks} from "./displayBooks";
import type { Book } from "./main";


export let bookData: Book[] = [];

export async function fetchBooks() {
    const response = await fetch('http://localhost:3000/book')
    const data = await response.json(); 
    bookData = data; 
    displayBooks();
};