<?php
    require_once ("include/authenticity.php");
?>
<!DOCTYPE html>
<html lang="en" ng-app="filemanager">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="description" content="Materialize is a Material Design Admin Template,It's modern, responsive and based on Material Design by Google. ">
    <meta name="keywords" content="materialize, admin template, dashboard template, flat admin template, responsive admin template,">
    <title>Car Wash</title>

    <!-- Favicons-->
    <link rel="icon" href="images/favicon/favicon-32x32.png" sizes="32x32">
    <!-- Favicons-->
    <link rel="apple-touch-icon-precomposed" href="images/favicon/apple-touch-icon-152x152.png">
    <!-- For iPhone -->
    <meta name="msapplication-TileColor" content="#00bcd4">
    <meta name="msapplication-TileImage" content="images/favicon/mstile-144x144.png">
    <!-- For Windows Phone -->


    <!-- CORE CSS-->
    <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection">
    <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection">
    <!-- Custome CSS-->
    <link href="css/custom/custom-style.css" type="text/css" rel="stylesheet" media="screen,projection">


    <!-- INCLUDED PLUGIN CSS ON THIS PAGE -->
    <!-- <link rel="stylesheet" href="bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css" type="text/css"> -->
    <link href="js/plugins/perfect-scrollbar/perfect-scrollbar.css" type="text/css" rel="stylesheet" media="screen,projection">
    <link href="js/plugins/jvectormap/jquery-jvectormap.css" type="text/css" rel="stylesheet" media="screen,projection">
    <link href="js/plugins/chartist-js/chartist.min.css" type="text/css" rel="stylesheet" media="screen,projection">
    <!--dropify-->
    <link href="js/plugins/dropify/css/dropify.min.css" type="text/css" rel="stylesheet" media="screen,projection">
  <!--jsgrid css-->
  <link href="js/plugins/jsgrid/css/jsgrid.min.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link href="js/plugins/jsgrid/css/jsgrid-theme.min.css" type="text/css" rel="stylesheet" media="screen,projection">

</head>

<body ng-controller="MainController">
    <!-- Start Page Loading -->
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>
    <!-- End Page Loading -->

    <!-- //////////////////////////////////////////////////////////////////////////// -->

    <!-- START HEADER -->
    <header id="header" class="page-topbar">
        <!-- start header nav-->
        <div class="navbar-fixed">
            <nav class="navbar-color">
                <div class="nav-wrapper">
                    <ul class="left">
                        <li>
                            <h1 class="logo-wrapper">
                                <a href="index.html" class="brand-logo darken-1">
                                    <img src="images/materialize-logo.png" alt="materialize logo">
                                </a>
                                <span class="logo-text">Materialize</span>
                            </h1>
                        </li>
                    </ul>
                    <div class="header-search-wrapper hide-on-med-and-down">
                        <i class="mdi-action-search"></i>
                        <input type="text" name="Search" class="header-search-input z-depth-2" placeholder="Search documents" />
                    </div>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <a href="javascript:void(0);" class="waves-effect waves-block waves-light translation-button" data-activates="translation-dropdown">
                                <img src="images/flag-icons/United-States.png" alt="USA" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect waves-block waves-light toggle-fullscreen">
                                <i class="mdi-action-settings-overscan"></i>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="waves-effect waves-block waves-light notification-button" data-activates="notifications-dropdown">
                                <i class="mdi-social-notifications">
                                    <small class="notification-badge">5</small>
                                </i>

                            </a>
                        </li>
                        <li>
                            <a href="#" data-activates="chat-out" class="waves-effect waves-block waves-light chat-collapse">
                                <i class="mdi-communication-chat"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- translation-button -->
                    <ul id="translation-dropdown" class="dropdown-content">
                        <li>
                            <a href="#!">
                                <img src="images/flag-icons/United-States.png" alt="English" />
                                <span class="language-select">English</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <img src="images/flag-icons/Sri-Lanka.png" alt="Sinhala" />
                                <span class="language-select">Sinhala</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <img src="images/flag-icons/China.png" alt="Chinese" />
                                <span class="language-select">Chinese</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <img src="images/flag-icons/Germany.png" alt="German" />
                                <span class="language-select">German</span>
                            </a>
                        </li>

                    </ul>
                    <!-- notifications-dropdown -->
                    <ul id="notifications-dropdown" class="dropdown-content">
                        <li>
                            <h5>NOTIFICATIONS
                                <span class="new badge">5</span>
                            </h5>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#!">
                                <i class="mdi-action-add-shopping-cart"></i> A new order has been placed!</a>
                            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                        </li>
                        <li>
                            <a href="#!">
                                <i class="mdi-action-stars"></i> Completed the task</a>
                            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
                        </li>
                        <li>
                            <a href="#!">
                                <i class="mdi-action-settings"></i> Settings updated</a>
                            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
                        </li>
                        <li>
                            <a href="#!">
                                <i class="mdi-editor-insert-invitation"></i> Director meeting started</a>
                            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
                        </li>
                        <li>
                            <a href="#!">
                                <i class="mdi-action-trending-up"></i> Generate monthly report</a>
                            <time class="media-meta" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- end header nav-->
    </header>
    <!-- END HEADER -->

    <!-- //////////////////////////////////////////////////////////////////////////// -->

    <!-- START MAIN -->
    <div id="main">
        <!-- START WRAPPER -->
        <div class="wrapper">

            <!-- START LEFT SIDEBAR NAV-->
            <aside id="left-sidebar-nav">
                <ul id="slide-out" class="side-nav fixed leftside-navigation">
                    <li class="user-details cyan darken-2">
                        <div class="row">
                            <div class="col col s4 m4 l4">
                                <img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image">
                            </div>
                            <div class="col col s8 m8 l8">
                                <ul id="profile-dropdown" class="dropdown-content">
                                    <li>
                                        <a href="#">
                                            <i class="mdi-action-face-unlock"></i> Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="mdi-action-settings"></i> Settings</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="mdi-communication-live-help"></i> Help</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#">
                                            <i class="mdi-action-lock-outline"></i> Lock</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="mdi-hardware-keyboard-tab"></i> Logout</a>
                                    </li>
                                </ul>
                                <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">John Doe
                                    <i class="mdi-navigation-arrow-drop-down right"></i>
                                </a>
                                <p class="user-roal">Administrator</p>
                            </div>
                        </div>
                    </li>
                    <li class="bold">
                        <a ui-sref="dashboard" class="waves-effect waves-cyan">
                            <i class="mdi-action-dashboard"></i>Dashboard
                            <span ng-if="menuOptions.dashboard.notifications > 0" class="new badge">{{menuOptions.dashboard.notifications}}</span>
                        </a>
                    </li>
                    <li class="bold">
                        <a ui-sref="documents" class="waves-effect waves-cyan">
                            <i class="mdi-content-add-box"></i>New Task
                        </a>
                    </li>
                    <li class="bold">
                        <a ui-sref="documents" class="waves-effect waves-cyan">
                            <i class="mdi-action-history"></i>Ongoing Tasks
                        </a>
                    </li>
                    <li class="li-hover">
                        <p class="ultra-small margin more-text">General</p>
                    </li>
                    <li class="no-padding">
                        <ul class="collapsible collapsible-accordion">
                            <li class="bold">
                                <a class="collapsible-header waves-effect waves-cyan">
                                    <i class="mdi-social-person"></i>Customers</a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li>
                                            <a href="layout-fullscreen.html">New Customer</a>
                                        </li>
                                        <li>
                                            <a href="layout-horizontal-menu.html">All Customers</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="no-padding">
                        <ul class="collapsible collapsible-accordion">
                            <li class="bold">
                                <a class="collapsible-header waves-effect waves-cyan">
                                    <i class="mdi-maps-directions-car"></i>Vehicles</a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li>
                                            <a href="layout-horizontal-menu.html">New Vehicle</a>
                                        </li>
                                        <li>
                                            <a href="layout-horizontal-menu.html">All Vehicles</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="no-padding">
                        <ul class="collapsible collapsible-accordion">
                            <li class="bold">
                                <a class="collapsible-header waves-effect waves-cyan">
                                    <i class="mdi-action-assignment"></i>Tasks</a>
                                <div class="collapsible-body">
                                    <ul>
                                        <li>
                                            <a href="layout-fullscreen.html">All Tasks</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="li-hover">
                        <p class="ultra-small margin more-text">My Inventory</p>
                    </li>
                    <li class="bold">
                        <a ui-sref="documents" class="waves-effect waves-cyan">
                            <i class="mdi-social-poll"></i>Inventory Overview
                        </a>
                    </li>
                    <li class="bold">
                        <a ui-sref="documents" class="waves-effect waves-cyan">
                            <i class="mdi-content-add-box"></i>Add New Item
                        </a>
                    </li>
                    <li class="bold">
                        <a ui-sref="documents" class="waves-effect waves-cyan">
                            <i class="mdi-social-plus-one"></i>Topup Stock
                        </a>
                    </li>
                   
                </ul>


                <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan">
                    <i class="mdi-navigation-menu"></i>
                </a>
            </aside>
            <!-- END LEFT SIDEBAR NAV-->

            <!-- //////////////////////////////////////////////////////////////////////////// -->

            <!-- START CONTENT -->
            <section id="content">

                <!--start container-->
                <div class="container">

                    <div ui-view></div>


                </div>

            </section>
            <!-- END CONTENT -->

            <!-- //////////////////////////////////////////////////////////////////////////// -->
            <!-- START RIGHT SIDEBAR NAV-->
            <aside id="right-sidebar-nav">
                <ul id="chat-out" class="side-nav rightside-navigation">
                    <li class="li-hover">
                        <a href="#" data-activates="chat-out" class="chat-close-collapse right">
                            <i class="mdi-navigation-close"></i>
                        </a>
                        <div id="right-search" class="row">
                            <form class="col s12">
                                <div class="input-field">
                                    <i class="mdi-action-search prefix"></i>
                                    <input id="icon_prefix" type="text" class="validate">
                                    <label for="icon_prefix">Search</label>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li class="li-hover">
                        <ul class="chat-collapsible" data-collapsible="expandable">
                            <li>
                                <div class="collapsible-header teal white-text active">
                                    <i class="mdi-social-whatshot"></i>Recent Activity</div>
                                <div class="collapsible-body recent-activity">
                                    <div class="recent-activity-list chat-out-list row">
                                        <div class="col s3 recent-activity-list-icon">
                                            <i class="mdi-action-add-shopping-cart"></i>
                                        </div>
                                        <div class="col s9 recent-activity-list-text">
                                            <a href="#">just now</a>
                                            <p>Jim Doe Purchased new equipments for zonal office.</p>
                                        </div>
                                    </div>
                                    <div class="recent-activity-list chat-out-list row">
                                        <div class="col s3 recent-activity-list-icon">
                                            <i class="mdi-device-airplanemode-on"></i>
                                        </div>
                                        <div class="col s9 recent-activity-list-text">
                                            <a href="#">Yesterday</a>
                                            <p>Your Next flight for USA will be on 15th August 2015.</p>
                                        </div>
                                    </div>
                                    <div class="recent-activity-list chat-out-list row">
                                        <div class="col s3 recent-activity-list-icon">
                                            <i class="mdi-action-settings-voice"></i>
                                        </div>
                                        <div class="col s9 recent-activity-list-text">
                                            <a href="#">5 Days Ago</a>
                                            <p>Natalya Parker Send you a voice mail for next conference.</p>
                                        </div>
                                    </div>
                                    <div class="recent-activity-list chat-out-list row">
                                        <div class="col s3 recent-activity-list-icon">
                                            <i class="mdi-action-store"></i>
                                        </div>
                                        <div class="col s9 recent-activity-list-text">
                                            <a href="#">Last Week</a>
                                            <p>Jessy Jay open a new store at S.G Road.</p>
                                        </div>
                                    </div>
                                    <div class="recent-activity-list chat-out-list row">
                                        <div class="col s3 recent-activity-list-icon">
                                            <i class="mdi-action-settings-voice"></i>
                                        </div>
                                        <div class="col s9 recent-activity-list-text">
                                            <a href="#">5 Days Ago</a>
                                            <p>Natalya Parker Send you a voice mail for next conference.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header light-blue white-text active">
                                    <i class="mdi-editor-attach-money"></i>Sales Repoart</div>
                                <div class="collapsible-body sales-repoart">
                                    <div class="sales-repoart-list  chat-out-list row">
                                        <div class="col s8">Target Salse</div>
                                        <div class="col s4">
                                            <span id="sales-line-1"></span>
                                        </div>
                                    </div>
                                    <div class="sales-repoart-list chat-out-list row">
                                        <div class="col s8">Payment Due</div>
                                        <div class="col s4">
                                            <span id="sales-bar-1"></span>
                                        </div>
                                    </div>
                                    <div class="sales-repoart-list chat-out-list row">
                                        <div class="col s8">Total Delivery</div>
                                        <div class="col s4">
                                            <span id="sales-line-2"></span>
                                        </div>
                                    </div>
                                    <div class="sales-repoart-list chat-out-list row">
                                        <div class="col s8">Total Progress</div>
                                        <div class="col s4">
                                            <span id="sales-bar-2"></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header red white-text">
                                    <i class="mdi-action-stars"></i>Favorite Associates</div>
                                <div class="collapsible-body favorite-associates">
                                    <div class="favorite-associate-list chat-out-list row">
                                        <div class="col s4">
                                            <img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                                        </div>
                                        <div class="col s8">
                                            <p>Eileen Sideways</p>
                                            <p class="place">Los Angeles, CA</p>
                                        </div>
                                    </div>
                                    <div class="favorite-associate-list chat-out-list row">
                                        <div class="col s4">
                                            <img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                                        </div>
                                        <div class="col s8">
                                            <p>Zaham Sindil</p>
                                            <p class="place">San Francisco, CA</p>
                                        </div>
                                    </div>
                                    <div class="favorite-associate-list chat-out-list row">
                                        <div class="col s4">
                                            <img src="images/avatar.jpg" alt="" class="circle responsive-img offline-user valign profile-image">
                                        </div>
                                        <div class="col s8">
                                            <p>Renov Leongal</p>
                                            <p class="place">Cebu City, Philippines</p>
                                        </div>
                                    </div>
                                    <div class="favorite-associate-list chat-out-list row">
                                        <div class="col s4">
                                            <img src="images/avatar.jpg" alt="" class="circle responsive-img online-user valign profile-image">
                                        </div>
                                        <div class="col s8">
                                            <p>Weno Carasbong</p>
                                            <p>Tokyo, Japan</p>
                                        </div>
                                    </div>
                                    <div class="favorite-associate-list chat-out-list row">
                                        <div class="col s4">
                                            <img src="images/avatar.jpg" alt="" class="circle responsive-img offline-user valign profile-image">
                                        </div>
                                        <div class="col s8">
                                            <p>Nusja Nawancali</p>
                                            <p class="place">Bangkok, Thailand</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <!-- LEFT RIGHT SIDEBAR NAV-->

        </div>
        <!-- END WRAPPER -->

    </div>
    <!-- END MAIN -->



    <!-- //////////////////////////////////////////////////////////////////////////// -->

    <div ng-include="'partials/inc.footer.php'"></div>


    <!-- ================================================
    Scripts
    ================================================ -->

    <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="bower_components/angular-filter/dist/angular-filter.min.js"></script>
    <script type="text/javascript" src="common/uiKernal.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="js/controllers/dashboard.js"></script>
    <script type="text/javascript" src="js/controllers/documents.js"></script>

    <!-- jQuery Library -->
    <script type="text/javascript" src="js/plugins/jquery-1.11.2.min.js"></script>
    <!--materialize js-->
    <script type="text/javascript" src="js/materialize.js"></script>
    <!--scrollbar-->
    <script type="text/javascript" src="js/plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <!-- <script src="bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="bower_components/ng-scrollbars/dist/scrollbars.min.js"></script> -->

    <!-- chartist -->
    <script type="text/javascript" src="js/plugins/chartist-js/chartist.min.js"></script>

    <!-- chartjs -->
    <script type="text/javascript" src="js/plugins/chartjs/chart.min.js"></script>
    <script type="text/javascript" src="js/plugins/chartjs/chart-script.js"></script>

    <!-- sparkline -->
    <script type="text/javascript" src="js/plugins/sparkline/jquery.sparkline.min.js"></script>
    <script type="text/javascript" src="js/plugins/sparkline/sparkline-script.js"></script>

    <!-- google map api -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAZnaZBXLqNBRXjd-82km_NO7GUItyKek"></script>

    <!--jvectormap-->
    <script type="text/javascript" src="js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
    <script type="text/javascript" src="js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
    <script type="text/javascript" src="js/plugins/jvectormap/vectormap-script.js"></script>

    <!--google map-->
    <script type="text/javascript" src="js/plugins/google-map/google-map-script.js"></script>


    <!--plugins.js - Some Specific JS codes for Plugin Settings-->
    <script type="text/javascript" src="js/plugins.js"></script>
    <!--custom-script.js - Add your own theme custom JS-->
    <script type="text/javascript" src="js/custom-script.js"></script>
    <!-- dropify -->
    <script type="text/javascript" src="js/plugins/dropify/js/dropify.min.js"></script>
    <!--jsgrid-->
    <script type="text/javascript" src="js/plugins/jsgrid/js/db.js"></script> <!--data-->
    <script type="text/javascript" src="js/plugins/jsgrid/js/jsgrid.min.js"></script>
    <script type="text/javascript" src="js/plugins/jsgrid/js/jsgrid-script.js"></script>
    <!-- Toast Notification -->
    <script type="text/javascript">
        // Toast Notification
        $(window).load(function () {
            setTimeout(function () {
                Materialize.toast('<span>Hiya! I am a toast.</span>', 1500);
            }, 1500);
            setTimeout(function () {
                Materialize.toast('<span>You can swipe me too!</span>', 3000);
            }, 5000);
            setTimeout(function () {
                Materialize.toast('<span>You have new order.</span><a class="btn-flat yellow-text" href="#">Read<a>', 3000);
            }, 15000);
        });
    </script>
</body>

</html>