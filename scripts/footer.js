const footer = document.getElementById("footer");
fetch("/components/footerEsp.html")
  .then((response) => response.text())
  .then((content) => {
    footer.innerHTML = content;
  });
