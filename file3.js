// Export a function to be used in file1.js
module.exports = function(app) {
    // Import filesystem promises
    const fs = require('fs').promises;

    // Create - POST: Adds new data to the JSON file
    app.post('/data', async (req, res) => {
        try {
            const newData = req.body; // Get the new data from the request body
            const data = await fs.readFile('./data/data.json', 'utf8'); // Read the current data from the JSON file
            const jsonData = JSON.parse(data); // Parse the data as JSON
            jsonData.push(newData); // Add the new data to the existing array
            await fs.writeFile('./data/data.json', JSON.stringify(jsonData, null, 2)); // Write the updated data back to the file
            res.status(201).send('Data added successfully'); // Send a success response
        } catch (error) {
            console.error('Failed to add data:', error); // Log the error
            res.status(500).send('Error adding data'); // Send an error response
        }
    });

    // Read - GET: Retrieves data from the JSON file
    app.get('/data', async (req, res) => {
        try {
            const data = await fs.readFile('./data/data.json', 'utf8'); // Read the data from the JSON file
            res.json(JSON.parse(data)); // Send the data as a JSON response
        } catch (error) {
            console.error('Failed to load data:', error); // Log the error
            res.status(500).send('Error loading data'); // Send an error response
        }
    });

    // Update - PUT: Updates existing data in the JSON file
    app.put('/data/:id', async (req, res) => {
        try {
            const id = parseInt(req.params.id); // Get the ID from the request parameters
            const newData = req.body; // Get the new data from the request body
            const data = await fs.readFile('./data/data.json', 'utf8'); // Read the current data from the JSON file
            const jsonData = JSON.parse(data); // Parse the data as JSON
            const index = jsonData.findIndex(item => item.id === id); // Find the index of the item to be updated
            if (index !== -1) {
                jsonData[index] = newData; // Update the item with the new data
                await fs.writeFile('./data/data.json', JSON.stringify(jsonData, null, 2)); // Write the updated data back to the file
                res.send('Data updated successfully'); // Send a success response
            } else {
                res.status(404).send('Data not found'); // Send a not found response if the item does not exist
            }
        } catch (error) {
            console.error('Failed to update data:', error); // Log the error
            res.status(500).send('Error updating data'); // Send an error response
        }
    });

    // Delete - DELETE: Deletes data from the JSON file
    app.delete('/data/:id', async (req, res) => {
        try {
            const id = parseInt(req.params.id); // Get the ID from the request parameters
            const data = await fs.readFile('./data/data.json', 'utf8'); // Read the current data from the JSON file
            const jsonData = JSON.parse(data); // Parse the data as JSON
            const newData = jsonData.filter(item => item.id !== id); // Filter out the item to be deleted
            await fs.writeFile('./data/data.json', JSON.stringify(newData, null, 2)); // Write the updated data back to the file
            res.send('Data deleted successfully'); // Send a success response
        } catch (error) {
            console.error('Failed to delete data:', error); // Log the error
            res.status(500).send('Error deleting data'); // Send an error response
        }
    });
};
