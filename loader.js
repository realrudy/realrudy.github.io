blog = document.getElementById("blog");
blog.style.display = "none";
loader = document.getElementById("loader");
//code before the pause
setTimeout(function () {
  blog.style.display = "block";
  loader.style.display = "none";
}, 1000);