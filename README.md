# Bind Mount Applications

This is a repo for new users getting started with Docker.

You can try it out using the following command.

```docker compose up -d```

And open http://localhost:3001 in your browser.

## Connecting to MongoDB

The MongoDB database runs on port **27018** and is configured without authentication by default. Below are instructions for connecting using popular desktop clients on Windows 10.

### a) MongoDB Compass (Desktop Client)

**MongoDB Compass** is the official MongoDB GUI client.

#### Installation
1. Download from [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Install the application on Windows 10

#### Connection Steps
1. Open **MongoDB Compass**
2. Click on **New Connection** or the connection string input field
3. Enter the following connection string:
   ```
   mongodb://127.0.0.1:27018/?directConnection=true
   ```
4. Click **Connect**
5. You should now see the `todoapp` database with its collections

**Alternative - Fill in connection details manually:**
- **Host**: `localhost`
- **Port**: `27018`
- **Authentication**: Leave blank (no authentication configured)
- **Database Name**: `todoapp` (optional, to connect directly to the database)

### b) DBGate Community Edition (Desktop Client)

**DBGate** is a free, open-source database management tool that supports MongoDB.

#### Installation
1. Download from [DBGate GitHub Releases](https://github.com/dbgate/dbgate/releases) or [DBGate.io](https://dbgate.io/)
2. Install the application on Windows 10

#### Connection Steps
1. Open **DBGate**
2. Click the **+** button or **Add Connection** to create a new database connection
3. Select **MongoDB** as the database type
4. Select "Use database URL"
5. Database URL: `mongodb://127.0.0.1:27018/?directConnection=true`
5. Click **Test Connection** to verify the connection works
6. Click **Save** to store the connection
7. The connection will appear in the left panel - click it to connect and browse your database

#### Useful Features in DBGate
- Browse collections and documents
- View and edit document data
- Run MongoDB queries and aggregations
- Export/import data
- View database statistics