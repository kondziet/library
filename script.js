let books = [
    new Book("Fablehaven", "Brandon Mull", 323),
    new Book("Like a Virgin", "Richard Branson", 248)
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}