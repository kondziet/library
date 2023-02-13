window.onload = displayBooks;

const bookForm = document.querySelector(".book-form");
const bookContainer = document.querySelector(".book-container");

let books = [
    new Book("Fablehaven", "Brandon Mull", 323),
    new Book("Like a Virgin", "Richard Branson", 248)
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function displayBooks() {
    while(bookContainer.firstChild) {
        bookContainer.firstChild.remove();
    }
    
    for(let book of books) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const author = document.createElement("p");
        author.textContent = book.author;

        const title = document.createElement("p");
        title.textContent = book.title;

        const pages = document.createElement("p");
        pages.textContent = book.pages;

        bookCard.appendChild(author);
        bookCard.appendChild(title);
        bookCard.appendChild(pages);

        bookContainer.appendChild(bookCard);
    }
}

function addBook() {
    const author = document.querySelector("#author");
    const title = document.querySelector("#title");
    const pages = document.querySelector("#pages");
    
    books.push(
        new Book(author.value, title.value, pages.value)
    );

    author.value = "";
    title.value = "";
    pages.value = "";
}

bookForm.addEventListener("submit", e => {
    e.preventDefault();
    addBook();
    displayBooks();
})