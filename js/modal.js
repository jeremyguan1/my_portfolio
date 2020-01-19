var modal = document.getElementById("myModal");
let modalDetail = document.querySelector(".modal-content");

function markup(title) {
  return `
  <div class='modal-container'>
    <div class='modal-title-wrapper'>
      <br />
      <h4 class="modal-title">${title}</h4>
      <span class="close">&times;</span>
    </div>
    <div>
      asdfasf
    </div>
  </div>
`;
}

function popoutModal(str) {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modalDetail.innerHTML = markup(str);
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  };
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }
};
