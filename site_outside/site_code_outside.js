login = "ENTER_YOUR_LOGIN_ENCODED_WITH_BASE64" // Ex: YWRtaW4= (that's word admin)
password = "ENTER_YOUR_PASSWORD_ENCODED_WITH_BASE64" // Ex: YWRtaW4= (that's word admin)
// Enter here your login and password in Base64 encode
var ip = "ENTER_YOUR_IP_ADDRESS_WITH_PROTOCOL" // Ex: http://127.0.0.1
//Enter here your ip address
//I will recommed to make new authentication page for more protection

function auth (){
    login_input = btoa(document.getElementById("login_input").value)
    password_input  = btoa(document.getElementById("password_input").value)
    if( login_input === login && password_input  === password)
    {
        document.location.href = `${ip}/site_inside.html`; //Changing page
    }
}
