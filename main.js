const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;
// const [current, imgs] = [ document.querySelector('#current'), document.querySelectorAll('.imgs img')];
imgs.forEach(img =>img.addEventListener('click', imgClick));

function imgClick(e) {
  // reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));
  // changed current image to src of clicked image
  current.src = e.target.src;

  // change the opacity to opacity var
  e.target.style.opacity = opacity;
}