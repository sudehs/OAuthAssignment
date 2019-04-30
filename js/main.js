$(document).ready(function(){
     var clientId = "1096672864515-md2n505mel4j60c2kk22fon9n0plpvi7.apps.googleusercontent.com";
     var redirect_uri = "http://localhost/app/upload.html";
     var scope = "https://www.googleapis.com/auth/drive";
     var url = "";
	 
     $("#login").click(function(){
        signIn(clientId,redirect_uri,scope,url);
     });

     function signIn(clientId,redirect_uri,scope,url){
        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";
        window.location = url;
     }
});