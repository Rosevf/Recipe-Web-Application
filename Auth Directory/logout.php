<?php
session_start(); // Starts the session

// Check if the user is logged in
if(isset($_SESSION['user_id']) || isset($_SESSION['logged_in'])){
    // Unset all of the session variables
    $_SESSION = array();

    // Destroy the session.
    session_destroy();

    // Redirect to login page or home page
    header("Location: login.php"); // Adjust the path as needed
    exit;
}

// Redirect to home page if the user is not logged in
header("Location: index.html"); // Adjust the path as needed
exit;
?>
