//need event listeners to navigate pages
//event listener for home, login, dashboard
//event listener to view a specific post and comments
const homeButtonEl = document.querySelector("#home");
const loginButtonEl = document.querySelector("#login");
const dashboardButtonEl = document.querySelector("#dashboard");

console.log("js linked");

//currently testing on homepage, see if we can navigate to a different page first
const displayHomepage = async (event) => {
  event.preventDefault();

  console.log("home button clicked");
};

const displayLogin = async (event) => {
  event.preventDefault();

  console.log("login button clicked");
};

const displayDashboard = async (event) => {
  event.preventDefault();

  console.log("dashboard button clicked");
};

homeButtonEl.addEventListener("click", displayHomepage);
loginButtonEl.addEventListener("click", displayLogin);
dashboardEl.addEventListener("click", displayDashboard);
