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