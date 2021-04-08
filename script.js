const API_URL = "http://localhost:8000/post/";
const API_BASE_URL = "http://localhost:8000/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  fetch(API_URL, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      buildPosts(data);
    });
};

const buildPosts = (posts) => {
  const timeElapsed = Date.now();
  const postDate = new Date(timeElapsed);

  let content = "";
  for (post of posts) {
    const postImage = `${API_BASE_URL}${post.post_image}`;
    content += `<div class="posts">
    <div class="post-image" style="background-image: url(${postImage})"></div>
    <div class="post-content">
      <div class="post-date">${postDate.toLocaleString("ko-KR")}</div>
      <div class="post-title">
        <h2>${post.title}</h2>
      </div>
      <div class="post-text">
        ${post.content}
      </div>
    </div>
  </div>`;
  }

  document.querySelector(".blog-post").innerHTML = content;
};
