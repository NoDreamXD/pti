const ids = ["city", "tour", "inet", "real", "edu", "bus"];

ids.forEach((id) => {
  const el = document.getElementById(id);

  el.onmouseover = () => {
    el.src = `panel/${id}1.gif`;
  };
  el.onmouseout = () => {
    el.src = `panel/${id}.gif`;
  };
});

puppies.selectedIndex = 0;
puppies.onchange = () => {
  const puppy = puppies.options[puppies.selectedIndex].value;
  puppyImage.src = `assets/images/img${puppy}.jpg`;
};

let currentPuppyImageIndex = 1;
function nextSliderImage() {
  currentPuppyImageIndex = (currentPuppyImageIndex % 6) + 1;
  puppyImageNew.src = `assets/images/img${currentPuppyImageIndex}.jpg`;
}
setInterval(nextSliderImage, 2000);
