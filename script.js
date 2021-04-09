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
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      buildPosts(data);
    });
};

const buildPosts = (posts) => {
  let content = "";
  for (post of posts) {
    const postDate = new Date(parseInt(post.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${post.post_image}`;
    const postLink = `/post.html?id=${post.id}`;
    content += `
    <a href="${postLink}">
    <div class="posts">
    <div class="post-image" style="background-image: url(${postImage})"></div>
    <div class="post-content">
      <div class="post-date">${postDate}</div>
      <div class="post-title">
        <h2>${post.title}</h2>
      </div>
      <div class="post-text">
        ${post.content}
      </div>
    </div>
  </div>
  </a>
  `;
  }

  document.querySelector(".blog-post").innerHTML = content;
};
