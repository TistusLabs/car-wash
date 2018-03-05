<?php

// if logged in an navigated to login page redirect him to the main page
$actual_link = "$_SERVER[REQUEST_URI]";
if(isset($_COOKIE['Authorization'])){

    if($actual_link == "/ostrio/car-wash/auth/"){
        header("Location: ../");
    }
    var_dump($actual_link);
}else{
    if($actual_link == "/ostrio/car-wash/"){
        header("Location: auth/");
    }
}   

?>