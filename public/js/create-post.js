const titleEl = document.querySelector("#post-title");
const contentEl = document.querySelector("#post-content");
const postButton = document.querySelector("#post-button");
console.log("js linked");

const createAPost = async (event) => {
  event.preventDefault();

  const title = titleEl.value.trim();
  const content = contentEl.value.trim();
  const response = await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to create post");
  }
};

postButton.addEventListener("submit", createAPost);
