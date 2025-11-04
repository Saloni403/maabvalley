function openMenu(){
    document.querySelector(".menu").classList.toggle("open")
}

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 180) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});