//アコーディオン


$(".qa-head").click(function(){
  
  //クリックされた.qa-head以外の次の兄弟要素を閉じる
  $(".qa-head").not(this).next().slideUp(300);
  //クリックされた.qa-head以外の親要素のis-open-lightを削除
  $(".qa-head").not(this).parent().removeClass("is-open-light");
  //クリックされた.qa-head以外の孫要素の.is-openの.is-openを削除する
  $(".qa-head").not(this).find(".is-open").removeClass("is-open");

  //クリックされた.qa-head次の兄弟要素を表示する
  $(this).next().slideToggle(300);
  //クリックされた.qa-headの.accordion-iconに.is-openを付ける
  $(this).find(".accordion-icon").toggleClass("is-open");
  //クリックされた.qa-headの親要素に.is-open-lightを付ける
  $(this).parent().toggleClass("is-open-light");

});
