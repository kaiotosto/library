myLibrary = [];
const library = document.querySelector(".library");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;
    const dynamicBook = new Book (title, author, pages, read);
    myLibrary.push(dynamicBook);
}

function displayBookToLibrary() {
    for (Book in myLibrary) {
        row = document.createElement('tr');

        title = document.createElement('td');
        title.class('title');
        title.innerHtml = `${myLibrary(Book).title}`
        row.append(title)

        author = document.createElement('td');
        author.class('author');
        author.innerHtml = `${myLibrary(Book).author}`
        row.append(author)

        pages = document.createElement('td');
        pages.class('pages');
        pages.innerHtml = `${myLibrary(Book).pages}`
        row.append(pages)

        read = document.createElement('rd');
        read.class('read');
        read.innerHtml = `${myLibrary(Book).read}`
        row.append(read)

        library.appendChild(row);
    }
}

const form = document.getElementById("#input")
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    addBookToLibrary(); 
    clear(); 
    displayBookToLibrary()
});

function clear() {
    titleInput.value = ""
    authorInputInput.value = ""
    pagesInput.value = ""
    readInput.checked = false
}