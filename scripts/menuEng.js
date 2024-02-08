const menu = document.getElementById("menu");
fetch("/components/menuEng.html")
  .then((response) => response.text())
  .then((content) => {
    menu.innerHTML = content;
  });
