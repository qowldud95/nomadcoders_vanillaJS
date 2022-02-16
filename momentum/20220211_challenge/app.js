const body = document.querySelector("body");

function onResizeTest() {
  const innerWidth = window.innerWidth;

  if (innerWidth <= 500) {
    //body.style.backgroundColor = "blue";
    body.className = "blue";
  } else if (innerWidth > 500 && innerWidth <= 1000) {
    body.className = "purple";
    //body.style.backgroundColor = "purple";
  } else {
    body.className = "yellow";
    //body.style.backgroundColor = "yellow";
  }
}
window.addEventListener("resize", onResizeTest);