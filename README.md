# Instagram Clone (IG-CLONE)

**Authors:** rovgart(frontend), c0rly(backend)

**App Link:** [IG-CLONE GitHub Repository](https://github.com/IG-CLONE)

## Overview

Welcome to our Instagram clone project! This project aims to replicate some features of the popular social media platform Instagram. Feel free to explore and leverage this codebase for learning purposes. Please note that this project is non-commercial and intended solely for educational use.




### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/IG-CLONE.git
    ```

2. Navigate to the project directory:
    ```bash
    cd IG-CLONE
    ```

3. Install dependencies using npm:
    ```bash
    npm install
    ```

### Database Setup

1. Set up a MySQL database.

2. Create a Sequelize instance in the `/src/config` folder using the following code in `app.js`:
    ```javascript
    const Sequelize = require('sequelize');
    const db = new Sequelize('your_schema_name', 'user_name', 'password', {
        host: 'your_hosting_adress',
        dialect: 'choose_your_sql',
    });
    ```

    Replace `your_schema_name`, `user_name`, and `password` with your actual database configuration.

### Start the App

Navigate to the `/src` folder and start the app:
```bash
cd src
node app.js
