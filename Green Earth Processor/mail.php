<?php
header("Access-Control-Allow-Origin: *");

//Check Post Object
if(isset($_POST) && $_POST){
    //Get Post Data
    // Get the form fields and remove whitespace.
    $name = trim($_POST["name"]);    
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    // Set the recipient email address.
    $recipient = "Test <test@gmail.com>";
 
    // Set the email subject.
    $subject = "Inquiry - $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Mobile: $phone\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    $returnEmailStatus = false;
    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        $returnEmailStatus = true;
    } 

    echo json_encode($returnEmailStatus);
}    
    
        