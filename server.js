// Dependencies & Imports
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({});
const routes = require("./controllers");

const path = require("path");
const sequelize = require("./config/connections");
//initialize the Products table

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: "abc",
  cookie: {
    maxAge: 60 * 60 * 1000, // expires after 1 hour
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

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
