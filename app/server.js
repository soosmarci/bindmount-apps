const mongoose = require('mongoose');
const bodyParse = require('body-parser');

// CRITICAL: The Express app instance must be defined here
const app = require('express')();

const moment = require('moment');

// Fontend route: MUST be required before use
const FrontRouter = require('./routes/front');

// Set ejs template engine (Must run before app is used)
app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded({ extended: false }));
app.locals.moment = moment;

// Database connection
const db = require('./config/keys').mongoProdURI;

// --- RESILIENT CONNECTION ---
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log(`Mongodb Connected`)

        // Start Express services (app is defined globally, so it works here)
        app.use(FrontRouter);
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error(`Initial Mongoose Connection Error:`, error.message);
        process.exit(1);
    });
// DELETE: All duplicate server start/route lines from the bottom of your file.