  const title = document.querySelector("h2");
  
  function onMouseEnter() {
    title.innerText = "The mouse is here!";
    title.style.color = "#1abc9c";
  }
  
  function onMouseLeave() {
    title.innerText = "The mouse is gone!";
    title.style.color = "#3498db";
  }
  
  function onResize() {
    title.innerText = "You just resized!";
    title.style.color = "#9b59b6";
  }
  
  function onContextMenu() {
    title.innerText = "That was a right click!";
    title.style.color = "#e74c3c";
  }
  
  title.addEventListener("mouseenter", onMouseEnter);
  title.addEventListener("mouseleave", onMouseLeave);
  title.addEventListener("contextmenu", onContextMenu);
  window.addEventListener("resize", onResize); 