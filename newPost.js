const API_URL = "http://localhost:5000/newPost/";

const uploadNewPost = () => {
  const title = document.getElementById("form-post-title").value;
  const content = document.getElementById("form-post-content").value;
  const file = document.getElementById("form-post-image");

  let data = new FormData();
  data.append("post_image", file.files[0]);
  data.append("title", title);
  data.append("content", content);

  fetch(API_URL, {
    method: "POST",
    body: data,
  }).then(() => {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
};
