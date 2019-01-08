<?php
/*
Plugin Name:  Register route for REST API
description:  Plugin to register a user
Version:      1.0
Author:       Jens Rottiers
License:      MIT
License URI:  https://opensource.org/licenses/MIT
*/

// function wp_rest_allow_all_cors() {
// 	// Remove the default filter.
// 	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
// 	// Add a Custom filter.
// 	add_filter( 'rest_pre_serve_request', function( $value ) {
// 		header( 'Access-Control-Allow-Origin: *' );
// 		header( 'Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE' );
// 		header( 'Access-Control-Allow-Credentials: true' );
// 		return $value;
// 	});
// } // End fucntion wp_rest_allow_all_cors().

// // Hook.
// add_action( 'rest_api_init', 'wp_rest_allow_all_cors', 15 );



// Callback functions
function register_user(WP_REST_Request $request) {
  $params = $request->get_body_params();
  $userdata = array(
    'ID' => '',
    'user_login' => $params["username"], // Todo change this to email maybe because is now tricky
    'first_name' => $params["firstname"],
    'last_name' => $params["lastname"],
    'user_email' => $params["email"], 
    'user_pass' => $params["password"],
    'user_url' => '',
    //'nickname' => $params["username"],
    'user_registered' => date('Y-m-d H:i:s'),
    'role' => 'author'
  );
  $user = wp_insert_user($userdata);
  return $user;
}

// Route:
// POST: http://localhost/wp-json/wp/v2/users/register
function add_register_route(){
  register_rest_route('wp/v2', 'users/register', array(
    'methods' => 'POST',
    'callback' => 'register_user'
  ));
}

add_action('rest_api_init', 'add_register_route');