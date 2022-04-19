var topButton = document.getElementById('top-button');

window.addEventListener('scroll', () =>{
  if (window.pageYOffset > 500) {
    topButton.style.display = 'block';
    topButton?.addEventListener('click', function () {
      window.scrollTo(0,0);
    }) ;
  } else {
    topButton.style.display = 'none';

  }

})


$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
      $('#fixednav').css('background-color','rgba(0, 0, 0,.450)');
  } else {
      $('#fixednav').css('background-color','rgba(0, 0, 0, 0)');

  }
});