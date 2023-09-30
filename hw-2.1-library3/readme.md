# THE LIBRARY

the homework project – _trying restful api_

## READY ROUTES

- /api/books (get all book), GET
- /api/books/:id (add new book), POST
- /api/books/:id (get book by id), GET
- /api/books/:id (delete book by id), DELETE
- /api/books/:id (update book by id), PUT
- /api/books/:id/upload-cover (update book-cover by id), POST
- /api/books/:id/upload (update book-file by id), POST
- /api/books/:id/download (download book-file by id), GET

- /api/user/login (enter valid user), GET
- / (index), GET
- /? (404 | unknown page), GET

## BOOK FIELDS

{
  id: "string",
  title: "string",
  description: "string",
  authors: "string",
  favorite: bool,
  fileCover: "string",
  fileName: "string",
  fileBook: "string"
}

