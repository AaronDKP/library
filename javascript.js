const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.removeCard = function() {
    let removeBtn = document.querySelector('.removeBtn');

    for (btn of removeBtn) {
        btn.addEventListener('click', () => {

        })
    }
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#readCheckbox");


function addBookToLibrary (book) {
    myLibrary.push(book)

    for(let i = 0; i < myLibrary.length; i++) {

        if(i == myLibrary.length - 1) {

        let newBookCard = document.createElement('div');
        let library = document.querySelector("#library");
        let newTitle = document.createElement('p');
        let newAuthor = document.createElement('p');
        let newPages = document.createElement('p');
        let newRead = document.createElement('div');
        let newRemove = document.createElement('button');

        library.appendChild(newBookCard).setAttribute('class', `bookCard card${i}`);

        let thisBookCard = document.querySelector(`.card${i}`);

        thisBookCard.appendChild(newTitle).setAttribute('class', `cardTitle${i}`);
        thisBookCard.appendChild(newAuthor).setAttribute('class', `cardAuthor${i}`);
        thisBookCard.appendChild(newPages).setAttribute('class', `cardPages${i}`);
        thisBookCard.appendChild(newRead).setAttribute('class', `cardRead${i} readDisplay`);
        thisBookCard.appendChild(newRemove).setAttribute('class', `cardRemove${i} removeBtn`)

        let thisTitle = document.querySelector(`.cardTitle${i}`);
        let thisAuthor = document.querySelector(`.cardAuthor${i}`);
        let thisPages = document.querySelector(`.cardPages${i}`);
        let thisRead = document.querySelector(`.cardRead${i}`);
        let thisRemove = document.querySelector(`.cardRemove${i}`);

        thisTitle.textContent = myLibrary[i].title;
        thisAuthor.textContent = myLibrary[i].author;
        thisPages.textContent = myLibrary[i].pages;

        if (book.read == true) {
            thisRead.classList.add('read');
        } 

        thisRead.addEventListener('click', () => {
            if (thisRead.classList.contains('read')) {
                thisRead.classList.remove('read');
            } else {
                thisRead.classList.add('read');
            }
        })

        thisRemove.addEventListener('click', () => {
            thisBookCard.remove();
        })
        
        }
    }
}

const dialog = document.querySelector("dialog");
const addBook = document.querySelector("#addBook");
const submit = document.querySelector("#submit");

addBook.addEventListener("click", () => {
    dialog.showModal();
})

submit.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#readCheckbox").checked;

    let newBook = new Book(title, author, pages, read);

    addBookToLibrary(newBook);

    console.table(myLibrary)

    dialog.close();
})


const readBtn = document.querySelectorAll('.readDisplay');

for (btn of readBtn) {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('read')) {
            btn.classList.remove('read');
        } else {
            btn.classList.add('read');
        }
    })
}