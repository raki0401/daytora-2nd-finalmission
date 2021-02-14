$(".hamburger-btn").click(function(){
  $(".hamburger").toggleClass("is-checker");
  $(".hamburger-back").toggleClass("is-checker");
  $(".hamburger-btn").toggleClass("is-checker");
  return false;
});