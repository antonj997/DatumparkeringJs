function showHide() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("read-more-btn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.innerHTML = "Dölj";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Läs mer om datumparkering";
  }
}
