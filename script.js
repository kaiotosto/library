myLibrary = [];
const library = document.getElementByClass("library");

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
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
