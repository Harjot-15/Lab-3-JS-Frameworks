// Event listener for the form submission to create new data
document.getElementById('create-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const id = document.getElementById('create-id').value; // Get the ID value from the form
    const name = document.getElementById('create-name').value; // Get the name value from the form
    const response = await fetch('/data', {
        method: 'POST', // Use the POST method to create new data
        headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify({ id: parseInt(id), name: name }) // Convert the data to JSON format and include in the request body
    });
    const result = await response.text(); // Get the response text
    alert(result); // Display the response in an alert
    refreshData(); // Refresh the displayed data
});

// Event listener for the form submission to update existing data
document.getElementById('update-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const id = document.getElementById('update-id').value; // Get the ID value from the form
    const name = document.getElementById('update-name').value; // Get the name value from the form
    const response = await fetch(`/data/${id}`, {
        method: 'PUT', // Use the PUT method to update existing data
        headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify({ id: parseInt(id), name: name }) // Convert the updated data to JSON format and include in the request body
    });
    const result = await response.text(); // Get the response text
    alert(result); // Display the response in an alert
    refreshData(); // Refresh the displayed data
});

// Event listener for the form submission to delete data
document.getElementById('delete-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const id = document.getElementById('delete-id').value; // Get the ID value from the form
    const response = await fetch(`/data/${id}`, {
        method: 'DELETE' // Use the DELETE method to remove data
    });
    const result = await response.text(); // Get the response text
    alert(result); // Display the response in an alert
    refreshData(); // Refresh the displayed data
});

// Event listener for the button click to refresh the data display
document.getElementById('refresh-data').addEventListener('click', refreshData);

// Function to fetch and display the current data
async function refreshData() {
    const response = await fetch('/data'); // Fetch the current data from the server
    const data = await response.json(); // Parse the response as JSON
    document.getElementById('data-display').textContent = JSON.stringify(data, null, 2); // Display the data in a formatted JSON string
}
