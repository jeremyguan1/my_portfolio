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
        imgUrl: "https://king.yougolax.com/",
        image: "../images/haimen/king/main.png",
        paragraph: `A main CMS platform that is helping to create dynamic administrators site. It includes
      online payment with many options, source control, and data analysis. It is helping owner to build more administrators sites and able to sell those administrator
       sites to company that offering services that include peer-to-peer ridesharing and ride service hailing.`
      });
    case "Lord":
      return markup({
        title: title,
        imgUrl: "https://lord.yougolax.com/",
        image: "../images/haimen/lord/main.png",
        paragraph: `An administrators platform where user is able to do actions with customers. It help administrators to control their drivers, vehicles, and customers.
        It book a trip and estimate price with real time by using Google Map API. It allow administrators to chat with customer in real time. It send push
        notification to user with OneSignal API. It send emails to customer and drivers by using SendGrid. It send SMS message to user by using Twilio APi. It
       allow customer to pay with credit card with Square API. It track driver's real time location and provides coupon and add-on service on the system. It
        Also to analysis to help administrators on their finance. `
      });
    case "Customer":
      return markup({
        title: title,
        imgUrl: "https://yougolax.com/",
        image: "../images/haimen/customer/main.png",
        paragraph: `A customer site that helps customer to book trip online. It provides real time chat with administrators. It get real time estimate price between locations.
        It provides service for customer to purchase online, using coupon, and see booking history. It provide multi languages. It has login and register systems.`
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
      <a href="${platform.imgUrl}" target="_blank" class="modal-visit-button">VISIT SITE</a>
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
