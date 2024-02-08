const footer = document.getElementById("footer");
fetch("/components/footerEng.html")
  .then((response) => response.text())
  .then((content) => {
    footer.innerHTML = content;
  });
