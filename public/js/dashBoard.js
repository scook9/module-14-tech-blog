const viewPostEl = document.getElementById("view-post");



const viewPost = async (event) => {
  event.preventDefault();

  const response = await fetch("/viewPost", {
    method: "GET",
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/viewPost");
  } else {
    alert("Failed to load Update page");
  }
};

viewPostEl.addEventListener("click", viewPost);
