// Add event listener to the table body for delegation
document.getElementById('book-list').addEventListener('click', function (event) {
  // Check if the clicked element has the class 'delete'
  if (event.target.classList.contains('delete')) {
    // Find the closest row and delete it
    const row = event.target.closest('tr');
    if (row) {
      row.remove();
    }
  }
});

document.getElementById('submit').addEventListener('click', function () {
  // Get the values from the form
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Add a new row to the table
  const tableBody = document.getElementById('book-list');
  const newRow = tableBody.insertRow();

  // Insert cells into the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  // Set the content of the cells
  cell1.textContent = title;
  cell2.textContent = author;
  cell3.textContent = isbn;

  // Add delete button to the new row
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';

  cell4.appendChild(deleteButton);

  // Clear the form fields after adding a book
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});
