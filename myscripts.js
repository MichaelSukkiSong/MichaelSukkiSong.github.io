/******************************
back to top button
****************************** */
document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.getElementById('back-to-top');
  const body = document.body;

  // Function to toggle the visibility of the back-to-top button
  function toggleBackToTopButton() {
    if (window.scrollY > 300) {
      backToTopButton.style.opacity = '1';
    } else {
      backToTopButton.style.opacity = '0';
    }
  }

  // Function to scroll to the top of the page
  function scrollToTop() {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Add an event listener to scroll and toggle the button visibility
  window.addEventListener('scroll', toggleBackToTopButton);

  // Add a click event listener to scroll to the top when the button is clicked
  backToTopButton.addEventListener('click', scrollToTop);
});

/******************************
 typewritter effect in header
****************************** */
var header__typewriter = document.getElementById('header__typewriter');

var typewriter = new Typewriter(header__typewriter, {
  loop: true,
  delay: 15,
  deleteSpeed: 15,
});

typewriter
  .pauseFor(50)
  .typeString(
    `<span style="color: #868e96;">Hi, I'm <strong><span style="color: #000;">Michael Song</span></strong></span> </br>`
  )
  .typeString(
    `<span style="color: #868e96;">I am a <span style="color: #000;">Software Developer</span></span> </br>`
  )
  .typeString(
    '<span style="color: #868e96;">with an <span style="color: #000;">Electrical Engineering</span> background</span>'
  )
  .pauseFor(10000)
  .start();
