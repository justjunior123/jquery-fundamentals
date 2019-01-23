// Methods ------------

// .ready() 
//The jQuery .ready() method waits until the HTML page's DOM is ready to manipulate.
//You should wrap all JavaScript behavior inside of the .ready() method. This will make sure the web page is rendered in the browser before any jQuery code executes.

$(document).ready(() => {

});
//--------------------------------------------------------------------------------------------------------
// Hiding a button on click
$(document).ready(() => {
  $('.hide-button').on('click', () => {
    $('.first-image').hide();
  })
// Show a button if it is hidden  
  $('.show-button').on('click', () => {
     $('.first-image').show();
  });
// Toggle an image with toggle method
  $('.toggle-button').on('click', () => {
    $('.first-image').toggle();
  });
// Fade images in and out
  $('.fade-out-button').on('click', () => {
      $('.fade-image').fadeOut(500);
   });
  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
// Fade toggle 
  $('.fade-toggle-button').on('click', () => {
		$('.fade-image').fadeToggle('fast');
  });
// Slide Image with Slide up, down and toggle

  $('.up-button').on('click', () => {
		$('.slide-image').slideUp(100);
  });
  
  $('.down-button').on('click', () => {
    $('.slide-image').slideDown('slow');
  });
  
  $('.slide-toggle-button').on('click', () => {
    $('.slide-image').slideToggle(400);
  });
  
});
