var state = document.querySelector("h5");
var btn = document.querySelector("#add");
var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    state.innerHTML = "Friends"
    state.style.color = "green"
    flag = 1;
    btn.innerHTML = "Remove Friend"
  }
  else {
    state.innerHTML = "Stranger";
    state.style.color = "rgb(254, 6, 109)"
    btn.innerHTML = "Add Friend"

    flag = 0;
  }
})
