const menu = document.getElementById("menu");
fetch("/components/menuEsp.html")
  .then((response) => response.text())
  .then((content) => {
    menu.innerHTML = content;
  });
