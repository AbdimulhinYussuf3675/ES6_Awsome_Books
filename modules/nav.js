const bookLink = document.getElementById('library');
const bookStore = document.getElementById('bookStore');
const addBook = document.getElementById('addBook');
const addLink = document.getElementById('addLink');
const contactLink = document.getElementById('contactLink');
const contact = document.getElementById('contact');
const addbtn1 = document.getElementById('addbtn1');

addbtn1.addEventListener('click', () => {
  addBook.style.display = 'block';
  contact.style.display = 'none';
  bookStore.style.display = 'none';
});
bookLink.addEventListener('click', () => {
  bookStore.style.display = 'block';
  addBook.style.display = 'none';
  contact.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  contact.style.display = 'block';
  bookStore.style.display = 'none';
  addBook.style.display = 'none';
});

addLink.addEventListener('click', () => {
  addBook.style.display = 'block';
  contact.style.display = 'none';
  bookStore.style.display = 'none';
});

export default bookLink;