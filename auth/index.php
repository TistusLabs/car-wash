<?php
    //require_once ("include/authenticity.php");
?>
<!DOCTYPE html>
<html lang="en" ng-app="loginapp">

<!--================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 3.0
	Author: GeeksLabs
	Author URL: http://www.themeforest.net/user/geekslabs
================================================================================ -->

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="description" content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google. ">
  <meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template,">
  <title>Sign-in Page | Car wash</title>

  <!-- Favicons-->
  <link rel="icon" href="../images/favicon/favicon-32x32.png" sizes="32x32">
  <!-- Favicons-->
  <link rel="apple-touch-icon-precomposed" href="../images/favicon/apple-touch-icon-152x152.png">
  <!-- For iPhone -->
  <meta name="msapplication-TileColor" content="#00bcd4">
  <meta name="msapplication-TileImage" content="../images/favicon/mstile-144x144.png">
  <!-- For Windows Phone -->


  <!-- CORE CSS-->

  <link href="../css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="../css/style.css" type="text/css" rel="stylesheet" media="screen,projection">
  <!-- Custome CSS-->
  <link href="../css/custom/custom-style.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="../css/layouts/page-center.css" type="text/css" rel="stylesheet" media="screen,projection">

  <!-- INCLUDED PLUGIN CSS ON THIS PAGE -->
  <link href="../js/plugins/prism/prism.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="../js/plugins/perfect-scrollbar/perfect-scrollbar.css" type="text/css" rel="stylesheet" media="screen,projection">

</head>

<body class="cyan" ng-controller="MainController">
  <!-- Start Page Loading -->
  <div id="loader-wrapper">
    <div id="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
  <!-- End Page Loading -->

  <div ui-view></div>

  <!-- ================================================
    Scripts
    ================================================ -->

  <script type="text/javascript" src="../bower_components/angular/angular.min.js"></script>
  <script type="text/javascript" src="../bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
  <script type="text/javascript" src="../common/uiKernal.js"></script>
  <script type="text/javascript" src="app.js"></script>
  <script type="text/javascript" src="controllers/signin.js"></script>

  <!-- jQuery Library -->
  <script type="text/javascript" src="../js/plugins/jquery-1.11.2.min.js"></script>
  <!--materialize js-->
  <script type="text/javascript" src="../js/materialize.js"></script>
  <!--prism-->
  <script type="text/javascript" src="../js/plugins/prism/prism.js"></script>
  <!--scrollbar-->
  <script type="text/javascript" src="../js/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>

  <!--plugins.js - Some Specific JS codes for Plugin Settings-->
  <script type="text/javascript" src="../js/plugins.js"></script>
  <!--custom-script.js - Add your own theme custom JS-->
  <script type="text/javascript" src="../js/custom-script.js"></script>

</body>

</html>