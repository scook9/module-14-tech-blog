const { Post, User, Comment } = require("../../models");

const updatePostHandler = async (event) => {
    event.preventDefault();
    const postTitle = document.querySelector('input[name="postTitle"]');
    const postContent = document.querySelector('input[name="postContent"]');
    const postId = window.location.toString().split('/').pop();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            postTitle,
            postContent
        })
    });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    };
