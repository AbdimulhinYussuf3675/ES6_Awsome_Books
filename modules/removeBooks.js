const empty = document.getElementById('empty-id');

function displayEmpty() {
  empty.classList.toggle('hide');
}

let store = [];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  removeBook = () => {
    store = store.filter((book) => book.id !== this.id);
  };
}

const addRemoveListener = (book) => {
  document.getElementById(`remove-${book.id}`).addEventListener('click', (e) => {
    e.preventDefault();
    book.removeBook();
    localStorage.setItem('store', JSON.stringify(store));
    if (!store.length) {
      displayEmpty();
    }
    const bookID = document.getElementById(`book-${book.id}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    }
  });
};

if (localStorage.getItem('store')) {
  const storeData = JSON.parse(localStorage.getItem('store'));
  storeData.forEach((book) => {
    const newBook = new Book(book.id, book.title, book.author);
    store.push(newBook);
    addRemoveListener(newBook);
  });
}

export default addRemoveListener;