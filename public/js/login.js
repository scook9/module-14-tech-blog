//need event listener to login and redirect to homepage
//need to link this file to login.handlebars
const submitButtonEl = document.querySelector("#login-button");

const loginUser = async (event) => {
  event.preventDefault();
  console.log("login button clicked");

  //need to pull username and password from input elements
  const usernameInput = document.querySelector("#exampleFormControlInput1");
  const passwordInput = document.querySelector("#inputPassword5");
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  console.log(username);
  console.log(password);
  //check if username and password exist in user table
  if (username && password) {
    console.log("if statement reached");
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("failed to login");
    }
  }
};

submitButtonEl.addEventListener("click", loginUser);
