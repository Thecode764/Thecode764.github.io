
function cantClick() {
    alert('Do you want use my website image?');
}

var typed = new Typed('#about', {
    strings: ['I think about programming'],
    typeSpeed: 50,
    showCursor: false,
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});

var typed = new Typed('#aboutme', {
    strings: ['Hello, I`m Artin :)', 'Python and web developer and linux user', '<br>', 'Welcome to My Website.'],
    typeSpeed: 50,
});
