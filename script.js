const box = document.getElementById('box');
const button = document.getElementById('prankButton');
let clickCount = 0;

// Define text and color sequences
const texts = [
  "Hello Gupta ,Kaise Ho ! [click button]",
  "Bahut chutiya ho yrr ,ham bol diye tum daba diye ! [click again]",
  "Ek baat batao,tumne promise kiya tha koi kaam lakar doge,khairr choro  ![ tum button dabao]",
  "Bsdk thoda toh samjho,tumko bhi toh faida hi he na ! [rehne do button dabao ,dafa ho jao]",
  "Sach bolein tumko chaandi mil rhi aur tum faltu gand mara rahe ho! [last click] ",
  "Gand Mara lo AF520 pe !",
];
const boxColors = ['#fef6e4', '#e7f6f2', '#e9e7fd', '#fcf8e8', '#f0f7ee', '#fdf2e9'];
const buttonColors = ['#f4d03f', '#85c1e9', '#a569bd', '#f5b041', '#52be80', '#ec7063'];

button.addEventListener('click', () => {
  clickCount++;

  if (clickCount <= 6) {
    // Change text, button, and box colors
    box.style.backgroundColor = boxColors[clickCount - 1];
    button.style.backgroundColor = buttonColors[clickCount - 1];
    button.textContent = texts[clickCount - 1];
  } else {
    // Reset to original state
    box.style.backgroundColor = '#ffffff';
    button.style.backgroundColor = '#e0e0e0';
    button.textContent = texts[0];
    clickCount = 0;
  }
});
