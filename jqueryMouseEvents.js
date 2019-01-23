

$(document).ready(() => {
  
  // Show login form on click
  $('.login-button').on('click', () => {
    $('.login-form').show();
  })
  // on mouse enter show nav menu
  $('.menu-button').on('mouseenter',  () => {
    $('.nav-menu').show();
  });
 // after the menu is displayed and the mouse leaves the menu
 $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide()
  })
  
}); 
