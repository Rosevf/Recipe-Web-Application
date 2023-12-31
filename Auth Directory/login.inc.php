<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $pwd = $_POST["pwd"];

    try {
        require_once 'dbh.inc.php';
        require_once 'signup_inc.php';
        require_once 'signup_control.inc.php';
        
        // ERROR HANDLERS
        $errors =[];

        if (is_input_empty($username, $pwd, $email)){
            $errors["empty_input"] = "Fill in all fields!";
        }

        require_once 'config_session.inc.php';

        if($errors){
            $_SESSION["errors_signup"] = $errors;

            $signupData = [
                "username"=> $username,
                "email" => $email
            ];

            header("Location: ../index.php");
            

        }

    } catch (PDOException $e) {
        die ("Query failed:" . $e->getMessage());
    }
} else {
    header("Location: ../index.php");
    die("");
}