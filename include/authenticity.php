<?php

// if logged in an navigated to login page redirect him to the main page
$actual_link = "$_SERVER[REQUEST_URI]";
var_dump($actual_link);
if(isset($_COOKIE['Authorization'])){

    // development environment
    if($actual_link == "/ostrio/car-wash/auth/"){
        header("Location: ../");
    }

    // production environment
    if($actual_link == "auth/"){
        header("Location: ../");
    }
}else{

    // development environment
    if($actual_link == "/ostrio/car-wash/"){
        header("Location: auth/");
    }

    // production environment
    if($actual_link == "/"){
        header("Location: auth/");
    }
}   

?>