console.log("js linked");

const backButtonEl = document.getElementById("go-back");
const editPostEl = document.getElementById("edit-post");

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

const backToDashboard = async (event) => {
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

backButtonEl.addEventListener("click", backToDashboard);
editPostEl.addEventListener("click", displayEditPage);
