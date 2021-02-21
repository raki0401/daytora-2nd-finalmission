
// $(function(){

//   $("#js-submit").prop("disabled",true);
//   $("#js-form input:required").change(function(){
//     let flag = true;
//     $("#js-form input:required").each(function(e){
//       if($("#js-form input:required").eq(e).val() === ""){
//         flag = false;
//       }
//     });
//     if(flag){
//       $("#js-submit").prop("disabled",false);
//     }else{
//       $("#js-submit").prop("disabled",true);
//     }
//   });
// });

// formの入力
$(function () {
  // $("#js-submit").prop("disabled", true);
  let $submit = $('#js-submit');
  
  $('#js-form input, #js-form select, #js-form textarea').on('change', function () {
    if (
      $('#js-form select[name="entry.829069922"]').val() !== "選択してください" &&
      $('#js-form input[name="entry.219301110"]').val() !== "" &&
      $('#js-form input[name="entry.1763225746"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      // $('#js-form input[name="entry.1017764133"]').prop('checked') === true &&
      $('#js-form textarea[name="entry.1186676634"]').val() !== "" &&
      $('#js-form input[name="entry.1028795190"]').prop('checked') === true
    ) {
      // 全て入力されたとき
      $submit.prop('disabled', false)
      $submit.addClass('-active')
    } else {
      // 入力されていないとき
      $submit.removeClass('-active')
      $submit.prop('disabled', true)

    }
  });
});


$(function () { 
let $form = $('#js-form'); 
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理  
        $form.slideUp()
        $('#js-success').slideDown()
      },
      200: function () {
        //送信に失敗したときの処理  
        $form.slideUp()
        $('#js-error').slideDown()
      }
    }
  });
  e.preventDefault();   // 送信後に画面遷移しないようにする処理
  return false;
});
});