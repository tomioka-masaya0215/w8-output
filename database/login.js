//初期表示時の処理
//ローカルストレージからログイン情報を取得する
let getItemEmail = localStorage.getItem('email');
let getItemPass = localStorage.getItem('password');
if(getItemEmail != null && getItemPass != null) {
    // ログイン情報を入力欄にセットする
    document.getElementById('email').value = getItemEmail;
    document.getElementById('password').value = getItemPass;
} else {
    //なにもしない
}

//Signin押下時の処理
function setLocalStorage(){
    //ローカルストレージからログイン情報を取得する
    let getItemEmail = localStorage.getItem('email');
    let getItemPass = localStorage.getItem('password');
    if(getItemEmail == null && getItemPass == null) {
        //フォームから入力されたログイン情報を取得する
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        //ログイン情報をLocalStorageに保存する
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    } else {
        //なにもしない
    }
}