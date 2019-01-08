<?php
/*
Plugin Name:  Plugin to allow resolve cors issues
description:  Plugin to allow cors
Version:      1.0
Author:       Jens Rottiers
License:      MIT
License URI:  https://opensource.org/licenses/MIT
*/

add_action( 'rest_pre_serve_request', function() {
  header( 'Access-Control-Allow-Headers: Origin, X-Requested-With, Accept, Content-Disposition, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Authorization' );
});


// function my_customize_rest_cors() {
// 	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
// 	add_filter( 'rest_pre_serve_request', function( $value ) {
// 		header( 'Access-Control-Allow-Origin: *' );
// 		header( 'Access-Control-Allow-Methods: GET' );
// 		header( 'Access-Control-Allow-Credentials: true' );
//         header( 'Access-Control-Expose-Headers: Link', false );
//         header( 'Access-Control-Allow-Headers: X-Requested-With' );
// 		return $value;
// 	} );
// }
// add_action( 'rest_api_init', 'my_customize_rest_cors', 15 );

// add_action( 'rest_pre_serve_request', function() {
//   header( 'Access-Control-Allow-Headers: Content-Disposition, Authorization, Content-Type' );
//   header( 'Access-Control-Allow-Origin: *' );
//   header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH');
// });

// add_action( 'rest_pre_serve_request', function() {
//   header( 'Access-Control-Allow-Headers: Content-Disposition, Authorization, Content-Type' );
//   header( 'Access-Control-Allow-Origin: *' );
// });

// // Hook.
// add_action( 'rest_api_init', 'wp_rest_allow_all_cors', 15 );
// // /**
// //  * Allow all CORS.
// //  *
// //  * @since 1.0.0
// //  */
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

// function add_cors_http_header(){
//     header("Access-Control-Allow-Origin: *");
// }
// add_action('init','add_cors_http_header');

// This should fix cors issue
// add_action( 'rest_pre_serve_request', function() {
//     header( 'Access-Control-Allow-Headers: Content-Disposition, Authorization, Content-Type' );
//     header( 'Access-Control-Allow-Origin: *' );
// });

// function my_customize_rest_cors() {
// 	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
// 	add_filter( 'rest_pre_serve_request', function( $value ) {
// 		header( 'Access-Control-Allow-Origin: *' );
// 		header( 'Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE' );
// 		header( 'Access-Control-Allow-Credentials: true' );
// 		header( 'Access-Control-Expose-Headers: Link', false );
// 		return $value;
// 	} );
// }
// add_action( 'rest_api_init', 'my_customize_rest_cors', 15 );
// header( 'Access-Control-Allow-Headers: X-Requested-With' );