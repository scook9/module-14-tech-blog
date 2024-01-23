//need event listeners to navigate pages
//event listener for home, login, dashboard
//event listener to view a specific post and comments
const homeButtonEl = document.querySelector("#home");
const loginButtonEl = document.querySelector("#login");
const dashboardButtonEl = document.querySelector("#dashboard");
const homeFooter = document.querySelector("#home-footer");
const loginFooter = document.querySelector("#login-footer");
const dashboardFooter = document.querySelector("#dashboard-footer");

const createButtonEl = document.querySelector("#create");
const editPostButtonEl = document.querySelector("#edit");

const displayHomepage = async (event) => {
  event.preventDefault();
  const response = await fetch("/", {
    method: "GET",
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to load homepage");
  }
};

const displayLogin = async (event) => {
  event.preventDefault();
  const response = await fetch("/login", {
    method: "GET",
  });
  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed to load login page");
  }
};

//should display dashboard.handlebars with all of the user's posts
//GET/fetch from http://localhost:3001/dashboard
//body of the GET request is undefined, how to get session id stored from the user route? req is undefined in this file
const displayDashboard = async (event) => {
  event.preventDefault();

  const response = await fetch("/dashboard", {
    method: "GET",
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to load dashboard");
  }
};

const displayCreatePage = async (event) => {
  event.preventDefault();

  const response = await fetch("/create", {
    method: "GET",
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/create");
  } else {
    alert("Failed to load Create page");
  }
};

const displayEditPage = async (event) => {
  event.preventDefault();

  const response = await fetch("/update", {
    method: "GET",
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/update");
  } else {
    alert("Failed to load Update page");
  }
};

//need event listener for submit button on login page
homeButtonEl.addEventListener("click", displayHomepage);
homeFooter.addEventListener("click", displayHomepage);
loginButtonEl.addEventListener("click", displayLogin);
loginFooter.addEventListener("click", displayLogin);
dashboardButtonEl.addEventListener("click", displayDashboard);
dashboardFooter.addEventListener("click", displayDashboard);

createButtonEl.addEventListener("click", displayCreatePage);
editPostButtonEl.addEventListener("click", displayEditPage);
