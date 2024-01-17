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

homeButtonEl.addEventListener("click", displayHomepage);
loginButtonEl.addEventListener("click", displayLogin);
dashboardButtonEl.addEventListener("click", displayDashboard);
