const submitBtn = document.querySelector(".submit-btn")
const 

let books = [
    new Book("Fablehaven", "Brandon Mull", 323),
    new Book("Like a Virgin", "Richard Branson", 248)
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
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

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    addBook();
})