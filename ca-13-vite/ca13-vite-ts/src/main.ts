// Task 1: Create a new Vite project
// Task 2: Copy the CRD app code into the new project
// Task 3: Fix any Typescript type errors
// Task 4: Separate the code into multiple files
// Task 5: Testing
// - It should run with the Vite command "npm run dev"
// - It should be written in TypeScript
// - It should have no type errors
// - There should be at least 3 Typescript .ts files that use import and export to work together


import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchBooks} from "./api";
import {displayBooks} from "./displayBooks";
import { form } from "./form";

export type Book = {
    id: number;
    title: string;  
    author: string;
    review: string;
    rating: string;
}

fetchBooks();
form();
displayBooks();

