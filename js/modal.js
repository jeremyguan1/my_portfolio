var modal = document.getElementById("myModal");
let modalDetail = document.querySelector(".modal-content");

function checkData(title) {
  switch (title) {
    case "Haimens-King":
      return getData("King");
    case "Haimens-Lord":
      return getData("Lord");
    case "Haimens-Customer":
      return getData("Customer");
    default:
      return null;
  }
}

function getData(title) {
  switch (title) {
    case "King":
      return markup({
        title: title,
        image: "../images/haimen/king/main.png",
        paragraph: `A main CMS platform that is helping to create dynamic administrators site. It includes
      online payment with many options, source control, and data analysis. It is helping owner to build more administrators sites and able to sell those administrator
       sites to company that offering services that include peer-to-peer ridesharing and ride service hailing, .`
      });
    default:
      return null;
  }
}

function markup(platform) {
  return `
  <div class='modal-container'>
    <div class='modal-title-wrapper'>
      <br />
      <h4 class="modal-title">${platform.title}</h4>
      <span class="close">&times;</span>
    </div>
    <div class="modal-image-wrapper">
      <img src="${platform.image}" alt="king-main" class="modal-image"/>
    </div>
    <div class="modal-content-wrapper">
      <p>
        ${platform.paragraph}
      </p>
    </div>
      <a href="https://king.yougolax.com/" target="_blank" class="modal-visit-button">VISIT SITE</a>
    <div class='modal-close-wrapper'>
      <button class="modal-close">Close</button>
    </div>
  </div>
`;
}

function popoutModal(str) {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modalDetail.innerHTML = checkData(str);
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  };
  var span = document.querySelector(".modal-close");
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
