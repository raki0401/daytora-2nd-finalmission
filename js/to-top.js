// // #のときはTopに、それ以外は指定の場所にスクロール
// $(function(){ 
//   $('a[href^="#"]').click(function(){ 
//     let speed = 800; 
//     let id = $(this).attr("href"); 
//     let target = $("#" == id ? "html" : id); 
//     let position = $(target).offset().top; 
//     $("html, body").animate({scrollTop: position},speed); 
//     return false; 
//   }); 
// }); 

// // スクロールしたら表示・非表示
// $(function(){ 

//   let pagetop = $('#page-top');  
//   pagetop.hide();
//   $(window).on("scroll", function(){ 
//     if($(this).scrollTop() > 500){ 
//       $('#page-top').fadeIn(); 
//     }else{ 
//       $('#page-top').fadeOut(); 
//     } 
//   }); 
// }); 


// #のときはTopに、それ以外は指定の場所にスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 800;
    // let comment_place = -100;
    let header = $("#header").innerHeight();
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - header;
    // let comment = $(target).offset().top + comment_place; 
    if ($(this).hasClass("a-litle")) {
      position += 100;
    }
    if ($(this).hasClass("litle")) {
      position -= 50;
    }
    $("html, body").animate({ scrollTop: position }, speed);
    // $("html, body").animate({scrollTop: comment},speed); 
    return false;
  });
});


// $(function(){
//   let comment = 120;
//   let position = $('#comments').offset().top - comment;
//   $('a[href="#comments"]').click(function(){
//     $("html, body").animate({scrollTop: position},speed);
//     return false;
//   });
// });



// スクロールしたら表示・非表示
$(function () {
  let pagetop = $('#page-top');
  pagetop.hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
}); 
