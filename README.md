# Lab 3 - JS Frameworks

# 📽️ [@Demo Video](https://georgiancollege-my.sharepoint.com/:v:/r/personal/200545258_student_georgianc_on_ca/Documents/Assets/Lab2-JS-Fameworks%20.mp4?csf=1&web=1&e=TNwKE1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

This project is a simple Node.js application built with Express.js and related packages.

## Getting Started

### Prerequisites

Make sure you have Git, Node.js, and npm installed on your machine. You can download them from their respective websites:

- [Git](https://git-scm.com/download/win)
- [Node.js (Includes npm)](https://nodejs.org/)

If you do not have them installed, follow these steps:

1. **Install Git**:
   - Download the Git installer from [Git for Windows](https://git-scm.com/download/win).
   - Run the downloaded installer and follow the prompts to complete the installation.

2. **Install Node.js and npm**:
   - Download the Node.js installer from [Node.js](https://nodejs.org/).
   - Run the downloaded installer and follow the prompts to complete the installation. This will also install npm.

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Harjot-15/Lab-3-JS-Frameworks.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd Lab-3-JS-Frameworks
    ```

3. **Install the necessary modules:**

    ```sh
    npm install
    ```

4. **Install nodemon globally:**

    ```sh
    npm install -g nodemon
    ```

### Running the Application

1. **Start the server:**

    ```sh
    npm start
    ```

2. **Access the application in your browser:**

    Open your browser and go to `http://localhost:3000`

### Project Structure

```plaintext
Lab3-JS-Frameworks
│   file1.js
│   file2.js
│   file3.js
│   package.json
│   package-lock.json
│
├───data
│       data.json
│
└───public
    │   crud.html
    │   fruits.html
    │   index.html
    └───css
    │       style.css
    └───js
            crud.js
```

### Project Description

This project consists of three main JavaScript files and additional supporting files:

1. **file1.js**: 
    - Sets up the Express application.
    - Serves static files from the `public` directory.
    - Defines a route for the home page to display group names.
    - Includes routes from `file2.js` and `file3.js`.

2. **file2.js**:
    - Defines a route to serve JSON data from `data.json`.
    - Uses a descriptive route name relevant to the JSON data (`/fruits`).

3. **file3.js**:
    - Implements CRUD operations:
       - **Create (POST)**: Adds new data to `data.json`.
       - **Read (GET)**: Retrieves data from `data.json`.
       - **Update (PUT)**: Updates existing data in `data.json`.
       - **Delete (DELETE)**: Deletes data from `data.json`.

### Testing with Postman

Postman is a powerful tool used to test APIs by making HTTP requests. Use Postman to test the CRUD operations implemented in `file3.js`:

#### Reading Fruits Data From JSON

- **POST Request (Create)**
  - URL: `http://localhost:3000/data`
  - Method: GET
    
#### Adding a New Fruit

- **POST Request (Create)**
  - URL: `http://localhost:3000/data`
  - Method: POST
  - Body: 
    ```json
    {
      "id": 9,
      "name": "Pineapple"
    }
    ```

#### Updating a Fruit to Include an Emoji

- **PUT Request (Update)**
  - URL: `http://localhost:3000/data/9`
  - Method: PUT
  - Body: 
    ```json
    {
      "id": 9,
      "name": "Pineapple 🍍"
    }
    ```

#### Deleting a Fruit

- **DELETE Request (Delete)**
  - URL: `http://localhost:3000/data/9`
  - Method: DELETE

```markdown
Thanks 👋
```
