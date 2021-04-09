const API_URL = "http://localhost:5000/post/";
const API_BASE_URL = "http://localhost:5000/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  const postId = getPostId();
  const url = `${API_URL}${postId}`;
  fetch(url, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      buildPost(data);
    });
};

const getPostId = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
};

const buildPost = (data) => {
  const postDate = new Date(parseInt(data.added_date)).toDateString();
  const postImage = `${API_BASE_URL}${data.post_image}`;

  document.querySelector("header").style.backgroundImage = `url(${postImage})`;
  document.getElementById(
    "indiv-post-date"
  ).innerHTML = `Published on ${postDate}`;
  document.getElementById("indiv-post-title").innerHTML = data.title;
  document.getElementById("indiv-post-content").innerHTML = data.content;
};
