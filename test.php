
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Sample Form Page</title>
</head>
<body>
    <h1>Sample Form Page</h1>
    <p>This page has a sample form below which can be used for demonstrating the injectme.js script. The injectme script is loaded on this page automatically.</p>
    <p>Also, an XSS here, using parameter "a": <?php echo $_GET['a']; ?></p>
    
    <form id="form1">
        Enter First Name: <input type="text" id="fname"/><br/>
        Enter Last Name: <input type="text" id="lname"/><br/>
        Enter Password: <input type="password" id="password"/><br/>
        <input type="submit">
    </form>
</body>
</html>