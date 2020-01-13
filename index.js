(function PreloadImage() {
  let image = new Image();
  image.src = "images/home.jpg";
  image.onload = () => {
    let bg = document.getElementById("home").style;
    bg.background = "linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(images/home.jpg)";
    bg.backgroundRepeat = "no-repeat";
    bg.backgroundSize = "cover";
    bg.backgroundPosition = "center";
    bg.height = "100vh";
  };
})();
