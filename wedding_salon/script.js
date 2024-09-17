const NUBER_PRODUCT_ITEMS = 7;
const DISPLAY_IN_ROW_PRODUCTS = 3;
let curSliderIndex = 0;
function moveSlider(step) {
  curSliderIndex += step;
  if (curSliderIndex < 0) curSliderIndex = 0;
  if (curSliderIndex > NUBER_PRODUCT_ITEMS - DISPLAY_IN_ROW_PRODUCTS) {
    curSliderIndex = NUBER_PRODUCT_ITEMS - DISPLAY_IN_ROW_PRODUCTS;
  }

  const slider = document.getElementById("product_slider");
  slider.style.marginLeft = `${-curSliderIndex * 375}px`;
  console.log(slider.style);
}
