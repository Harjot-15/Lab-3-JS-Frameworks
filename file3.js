// Export a function to be used in file1.js
module.exports = function(app) {
    // Import filesystem promises
    const fs = require('fs').promises;

    // Create - POST
    app.post('/data', async (req, res) => {
        try {
            const newData = req.body;
            const data = await fs.readFile('./data/data.json', 'utf8');
            const jsonData = JSON.parse(data);
            jsonData.push(newData);
            await fs.writeFile('./data/data.json', JSON.stringify(jsonData, null, 2));
            res.status(201).send('Data added successfully');
        } catch (error) {
            console.error('Failed to add data:', error);
            res.status(500).send('Error adding data');
        }
    });

    // Read - GET
    app.get('/data', async (req, res) => {
        try {
            const data = await fs.readFile('./data/data.json', 'utf8');
            res.json(JSON.parse(data));
        } catch (error) {
            console.error('Failed to load data:', error);
            res.status(500).send('Error loading data');
        }
    });

    // Update - PUT
    app.put('/data/:id', async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const newData = req.body;
            const data = await fs.readFile('./data/data.json', 'utf8');
            const jsonData = JSON.parse(data);
            const index = jsonData.findIndex(item => item.id === id);
            if (index !== -1) {
                jsonData[index] = newData;
                await fs.writeFile('./data/data.json', JSON.stringify(jsonData, null, 2));
                res.send('Data updated successfully');
            } else {
                res.status(404).send('Data not found');
            }
        } catch (error) {
            console.error('Failed to update data:', error);
            res.status(500).send('Error updating data');
        }
    });

    // Delete - DELETE
    app.delete('/data/:id', async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const data = await fs.readFile('./data/data.json', 'utf8');
            const jsonData = JSON.parse(data);
            const newData = jsonData.filter(item => item.id !== id);
            await fs.writeFile('./data/data.json', JSON.stringify(newData, null, 2));
            res.send('Data deleted successfully');
        } catch (error) {
            console.error('Failed to delete data:', error);
            res.status(500).send('Error deleting data');
        }
    });
};
