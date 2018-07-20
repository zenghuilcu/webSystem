/**
 * description: ログインチェック
 * creater: yuanmingyin
 * date: 2015/07/03
 */
function loginChk(){
  //ログイン情報取
  var usercd = $('input[name=tUser]').val().toString().trim();
  var userpwd = $('input[name=tPassword]').val().toString().trim();
  if(usercd == ""){
    toastr.warning("ユーザー名を入力してください。");
    return;
  }
  if(userpwd == ""){
    toastr.warning("パスワードを入力してください。");
    return;
  }
  $.ajax({
    url: '../CGI/SKCS_LOGIN.CGI',
    //timeout: ProductManage.timeout,
    type:'POST',
    data:{
      USERCD:usercd,
      PASSWORD:userpwd
    },
    success:function(response){
      var arrData = JSON.parse(response);
      if(arrData.error == "0"){
        sessionStorage.setItem("UserLID",usercd);
        location.href="HomePage/index.html";
      }
      else{
        toastr.warning("ユーザー名或はパスワードが正しくありません。");
      }
    }
  });
}