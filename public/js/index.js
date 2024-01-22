//need event listeners to navigate pages
//event listener for home, login, dashboard
//event listener to view a specific post and comments
const homeButtonEl = document.querySelector("#home");
const loginButtonEl = document.querySelector("#login");
const dashboardButtonEl = document.querySelector("#dashboard");
const homeFooter = document.querySelector("#home-footer");
const loginFooter = document.querySelector("#login-footer");
const dashboardFooter = document.querySelector("#dashboard-footer");

console.log("js linked");

//currently testing on homepage, see if we can navigate to a different page first
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
  //console.log("home button clicked");
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

  //console.log("login button clicked");
};

//should display dashboard.handlebars with all of the user's posts
//GET/fetch from http://localhost:3001/dashboard
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
  //console.log("dashboard button clicked");
};

//need event listener for submit button on login page
homeButtonEl.addEventListener("click", displayHomepage);
homeFooter.addEventListener("click", displayHomepage);
loginButtonEl.addEventListener("click", displayLogin);
loginFooter.addEventListener("click", displayLogin);
dashboardButtonEl.addEventListener("click", displayDashboard);
dashboardFooter.addEventListener("click", displayDashboard);
