function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if( username == "devita" && password == "halo456"){
        alert("Login sukses")
        window.location.href="berhasil.html"
    }
    else{
        alert("Username atau Password yang anda masukan salah")
    }
}
