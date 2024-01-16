// Dependencies & Imports
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const routes = require("./controllers");

const path = require("path");
const sequelize = require("./config/connections");
//initialize the Products table

const app = express();
const PORT = process.env.PORT || 3001;

// Default to Handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

//connect to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} http://localhost:3001`);
  });
});

