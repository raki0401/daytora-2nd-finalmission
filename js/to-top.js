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
$(function(){ 
  $('a[href^="#"]').click(function(){ 
    let speed = 800; 
    let id = $(this).attr("href"); 
    let target = $("#" == id ? "html" : id); 
    let position = $(target).offset().top; 
    $("html, body").animate({scrollTop: position},speed); 
    return false; 
  }); 
}); 

// スクロールしたら表示・非表示
$(function(){ 
  let pagetop = $('#page-top'); 
  pagetop.hide(); 
  $(window).on("scroll", function(){ 
    if($(this).scrollTop() > 500){ 
      $('#page-top').fadeIn(); 
    }else{ 
      $('#page-top').fadeOut(); 
    } 
  }); 
}); 
