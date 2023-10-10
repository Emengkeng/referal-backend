const { globalVariables } = require("./config/config")
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const routes = require("./routes")
const hbs = require("express-handlebars")
const flash = require("connect-flash")
const session = require("express-session")
const passport = require("passport")
const app = express()
const db = require('./models')
require("dotenv/config");

/* Configure express*/
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

/*  Flash and Session*/
app.use(
    session({
        secret: "anysecret",
        saveUninitialized: true,
        resave: true,
    })
)

app.use(flash())

  /* Passport Initialize */
app.use(passport.initialize())
app.use(passport.session())

  /* Use Global Variables */
app.use(globalVariables)

//Synce with sequalize db
(async () => {
    await db.sequelize.sync();
})();

app.use(routes);



const PORT = process.env.PORT || "3000";
// let server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.listen(PORT, () => {
    console.log(`Server listening at: http://localhost:${PORT}`);
});

module.exports = app;