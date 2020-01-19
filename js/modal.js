var modal = document.getElementById("myModal");

function popoutModal(str) {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }
};
