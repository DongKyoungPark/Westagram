let input = document.querySelector("#FP-textarea");
let button = document.querySelector("#comment-submit");

function addComment(e) {
  let comment = document.querySelector(".FP-commentView");

  let div = document.createElement("div");
  div.className = "comment";
  let a = document.createElement("a");
  let span = document.createElement("span");

  a.innerHTML = "user &nbsp";
  span.innerHTML = input.value;

  comment.appendChild(div);
  div.appendChild(a);
  div.appendChild(span);

  input.value = "";
}

input.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addComment();
  }
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  addComment();
});
