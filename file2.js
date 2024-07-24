// Export a function to be used in file1.js
module.exports = function(app) {
    // Import filesystem promises
    const fs = require('fs').promises;

    // Get() method to display JSON contents
    app.get('/fruits', async (req, res) => {
        try {
            const data = await fs.readFile('./data/data.json', 'utf8');
            res.json(JSON.parse(data));
        } catch (error) {
            console.error('Failed to load data:', error);
            res.status(500).send('Error loading data');
        }
    });
};
