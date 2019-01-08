<?php 

/**
 * Proper way to enqueue scripts and styles
 */
// add_action( 'init', function() {
//     header( 'Access-Control-Allow-Headers: Content-Disposition, Authorization, Content-Type' );
//     header( 'Access-Control-Allow-Origin: *' );
//     header( 'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH');
//  });

//  add_action( 'rest_pre_serve_request', function() {
//     header( 
//     'Access-Control-Allow-Headers: Content-Disposition, Authorization, Content-Type',
//     'Access-Control-Allow-Origin: http://localhost:4200', 
//     'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH' );
// });

// add_action( 'rest_pre_serve_request', function() {
//     header( 'Access-Control-Allow-Headers: Authorization, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods' );
// });

/**** Post Types and Taxonomies ****/

/**** Recipes ****/

/* Post Type */
function create_recipes_posttype() {

  $labels = array(
      'name' => __('Recipes'),
      'array' => __('Recipes'),
      'singular_name' => __('Recipes'),
      'add_new' => __('Add New Recipes'),
      'all_items' => __('All Recipes'),
      'add_new_item' => __('Add New Recipes'),
      'edit_item' => __('Edit Recipes'),
  );

  $args = array(
      'description' => 'All the recipes!',
      'labels' => $labels,
      'public' => true,
      'has_archive' => true,
      'publicly_queryable' => true,
      'query_var' => true,
      'capability_type' => 'post', // Take over everything that is already in post
      'hierarchical' => false,
      'supports' => array(
          'title',
          'editor',
          'except',
          'thumbnail',
          'revisions',
          'custom-fields'
      ),
      
      'menu_position' => 5,
      'exclude_from_search' => false
  );

  register_post_type('recipes', $args);
}

add_action('init', 'create_recipes_posttype');

/* Taxonomies Recipes */
function create_recipes_taxonomies() {

  // Categories
  $labels = array(
      'name'              => _x('Categories', 'taxonomy general name', 'textdomain'),
      'singular_name'     => _x('Category', 'taxonomy singular name', 'textdomain'),
      'search_items'      => __('Search Recipe Categories', 'textdomain'),
      'all_items'         => __('All Recipe Categories', 'textdomain'),
      'parent_item'       => __('Parent Recipe Category', 'textdomain'),
      'parent_item_colon' => __('Parent Recipe Category:', 'textdomain'),
      'edit_item'         => __('Edit Recipe Category', 'textdomain'), 
      'update_item'       => __('Update Recipe Category', 'textdomain'),
      'add_new_item'      => __('Add New Recipe Category', 'textdomain'),
      'new_item_name'     => __('New Recipe Category', 'textdomain'),
      'menu_name'         => __('Categories', 'textdomain'),
  );

  $args = array(
      'hierarchical' => true,
      'labels' => $labels,
      'show_in_rest'      => true,
      'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
  );

  register_taxonomy('category', 'recipes', $args);

  // Allergens
  $labels = array(
      'name'              => _x('Allergens', 'taxonomy general name', 'textdomain'),
      'singular_name'     => _x('Allergens', 'taxonomy singular name', 'textdomain'),
      'search_items'      => __('Search Recipe Allergens', 'textdomain'),
      'all_items'         => __('All Recipe Allergens', 'textdomain'),
      'parent_item'       => __('Parent Recipe Allergy', 'textdomain'),
      'parent_item_colon' => __('Parent Recipe Allergy:', 'textdomain'),
      'edit_item'         => __('Edit Recipe Allergy', 'textdomain'), 
      'update_item'       => __('Update Recipe Allergy', 'textdomain'),
      'add_new_item'      => __('Add New Recipe Allergy', 'textdomain'),
      'new_item_name'     => __('New Recipe Allergy', 'textdomain'),
      'menu_name'         => __('Allergy', 'textdomain'),
  );

  $args = array(
      'hierarchical' => true,
      'labels' => $labels,
      'show_ui'           => true,
  'show_admin_column' => true,
  'query_var'         => true,
  );

  register_taxonomy('allergens', 'recipes', $args);

  // Difficulties
  $labels = array(
      'name'              => _x('Difficulties', 'taxonomy general name', 'textdomain'),
      'singular_name'     => _x('Difficulties', 'taxonomy singular name', 'textdomain'),
      'search_items'      => __('Search Recipe Difficulties', 'textdomain'),
      'all_items'         => __('All Recipe Difficulties', 'textdomain'),
      'parent_item'       => __('Parent Recipe Difficulty', 'textdomain'),
      'parent_item_colon' => __('Parent Recipe Difficulty:', 'textdomain'),
      'edit_item'         => __('Edit Recipe Difficulty', 'textdomain'), 
      'update_item'       => __('Update Recipe Difficulty', 'textdomain'),
      'add_new_item'      => __('Add New Recipe Difficulty', 'textdomain'),
      'new_item_name'     => __('New Recipe Difficulty', 'textdomain'),
      'menu_name'         => __('Difficulty', 'textdomain'),
  );

  $args = array(
      'hierarchical' => true,
      'labels' => $labels,
      'show_ui'           => true,
      'show_admin_column' => true,
      'query_var'         => true,
  );

  register_taxonomy('difficulties', 'recipes', $args);
}

add_action('init', 'create_recipes_taxonomies', 0);

/* Friends Posttype */
function create_friends_posttype() { 
    $labels = array(
      'name' => __('Friends'),
      'array' => __('Friends'),
      'singular_name' => __('Friends'),
      'add_new' => __('Add New Friends'),
      'all_items' => __('All Friends'),
      'add_new_item' => __('Add New Friends'),
      'edit_item' => __('Edit Friends'),
  );

  $args = array(
      'description' => 'All',
      'labels' => $labels,
      'public' => true,
      'has_archive' => true,
      'publicly_queryable' => true,
      'show_in_rest' => true,
      'query_var' => true,
      'capability_type' => 'post', // Take over everything that is already in post
      'hierarchical' => false,
      'supports' => array(
          'title',
          'editor',
          'except',
          'thumbnail',
          'revisions',
          'custom-fields'
      ),
      
      'menu_position' => 5,
      'exclude_from_search' => false
  );

  register_post_type('friends', $args);
}
add_action('init', 'create_friends_posttype', 0);

/* Taxonomies friends */
function create_friends_taxonomies() { 
  // Likes
//   $labels = array(
//     'name'              => _x('Likes', 'taxonomy general name', 'textdomain'),
//     'singular_name'     => _x('Likes', 'taxonomy singular name', 'textdomain'),
//     'search_items'      => __('Search Friends Likes', 'textdomain'),
//     'all_items'         => __('All Friends Likes', 'textdomain'),
//     'parent_item'       => __('Parent Friends Like', 'textdomain'),
//     'parent_item_colon' => __('Parent Friends Like:', 'textdomain'),
//     'edit_item'         => __('Edit Friends Like', 'textdomain'), 
//     'update_item'       => __('Update Friends Like', 'textdomain'),
//     'add_new_item'      => __('Add New Friends Like', 'textdomain'),
//     'new_item_name'     => __('New Friends Like', 'textdomain'),
//     'menu_name'         => __('Likes', 'textdomain'),
// );

//   $args = array(
//       'hierarchical' => true,
//       'labels' => $labels,
//       'show_ui'           => true,
//       'show_admin_column' => true,
//       'query_var'         => true,
//   );

//   register_taxonomy('likes', 'friends', $args);

  // other....
}

add_action('init', 'create_friends_taxonomies');


/**** Tips and Tools ****/

/* Post Type */
function create_tips_tools_posttype() {

    $labels = array(
        'name' => __('Tips-tools'),
        'array' => __('Tips-tools'),
        'singular_name' => __('Tip-tools'),
        'add_new' => __('Add New tip-tools'),
        'all_items' => __('All tips-tools'),
        'add_new_item' => __('Add New tips-tools'),
        'edit_item' => __('Edit tips-tools'),
    );
  
    $args = array(
        'description' => 'All the tips-tools!',
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'publicly_queryable' => true,
        'query_var' => true,
        'capability_type' => 'post', // Take over everything that is already in post
        'hierarchical' => false,
        'supports' => array(
            'title',
            'editor',
            'author',
            'except',
            'thumbnail',
            'revisions',
            'custom-fields'
        ),
        
        'menu_position' => 5,
        'exclude_from_search' => false
    );
  
    register_post_type('tips-tools', $args);
  }
  
  add_action('init', 'create_tips_tools_posttype');
  
  /* Taxonomies Tips and Tools */
  function create_tips_tools_taxonomies() {
  
    // Categories
    $labels = array(
        'name'              => _x('Categories', 'taxonomy general name', 'textdomain'),
        'singular_name'     => _x('Category', 'taxonomy singular name', 'textdomain'),
        'search_items'      => __('Search tips-tools Categories', 'textdomain'),
        'all_items'         => __('All tips-tools Categories', 'textdomain'),
        'parent_item'       => __('Parent tips-tools Category', 'textdomain'),
        'parent_item_colon' => __('Parent tips-tools Category:', 'textdomain'),
        'edit_item'         => __('Edit tips-tools Category', 'textdomain'), 
        'update_item'       => __('Update tips-tools Category', 'textdomain'),
        'add_new_item'      => __('Add New tips-tools Category', 'textdomain'),
        'new_item_name'     => __('New tips-tools Category', 'textdomain'),
        'menu_name'         => __('Categories', 'textdomain'),
    );
  
    $args = array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
    );
  
    register_taxonomy('category', 'tips-tools', $args);
  
  }
  
  add_action('init', 'create_tips_tools_taxonomies', 0);

  function create_sleep_goals_posttype() { 
    $labels = array(
        'name' => __('Sleep-goals'),
        'array' => __('Sleep-goals'),
        'singular_name' => __('Sleep-goals'),
        'add_new' => __('Add New sleep-goal'),
        'all_items' => __('All sleep-goals'),
        'add_new_item' => __('Add New sleep-goal'),
        'edit_item' => __('Edit Sleep-goals'),
    );
  
    $args = array(
        'description' => 'All the sleep-goals!',
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'publicly_queryable' => true,
        'query_var' => true,
        'capability_type' => 'post', // Take over everything that is already in post
        'hierarchical' => false,
        'supports' => array(
            'title',
            'editor',
            'author',
            'except',
            'thumbnail',
            'revisions',
            'custom-fields'
        ),
        
        'menu_position' => 5,
        'exclude_from_search' => false
    );
  
    register_post_type('sleep-goals', $args);
  }

  add_action('init', 'create_sleep_goals_posttype');

  function create_sleep_results_posttype() { 
    $labels = array(
        'name' => __('Sleep-results'),
        'array' => __('Sleep-results'),
        'singular_name' => __('Sleep-results'),
        'add_new' => __('Add New sleep-results'),
        'all_items' => __('All sleep-results'),
        'add_new_item' => __('Add New sleep-results'),
        'edit_item' => __('Edit Sleep-results'),
    );
  
    $args = array(
        'description' => 'All the sleep-results!',
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'publicly_queryable' => true,
        'query_var' => true,
        'capability_type' => 'post', // Take over everything that is already in post
        'hierarchical' => false,
        'supports' => array(
            'title',
            'editor',
            'author',
            'except',
            'thumbnail',
            'revisions',
            'custom-fields'
        ),
        
        'menu_position' => 5,
        'exclude_from_search' => false
    );
  
    register_post_type('sleep-results', $args);
  }

  add_action('init', 'create_sleep_results_posttype');

//   function add_cors_http_header(){
//     header("Access-Control-Allow-Origin: *");
//     }
//   add_action('init','add_cors_http_header');

/**** Tips and Tools ****/

/* Post Type */
function create_photos_competition_posttype() {

    $labels = array(
        'name' => __('Photos-competition'),
        'array' => __('Photos-competition'),
        'singular_name' => __('Photos-competition'),
        'add_new' => __('Add New Photos-competition'),
        'all_items' => __('All Photos-competition'),
        'add_new_item' => __('Add New Photos-competition'),
        'edit_item' => __('Edit Photos-competition'),
    );
  
    $args = array(
        'description' => 'All the photos-competition!',
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'publicly_queryable' => true,
        'query_var' => true,
        'capability_type' => 'post', // Take over everything that is already in post
        'hierarchical' => false,
        'supports' => array(
            'title',
            'editor',
            'author',
            'except',
            'thumbnail',
            'revisions',
            'custom-fields'
        ),
        
        'menu_position' => 5,
        'exclude_from_search' => false
    );
  
    register_post_type('photos-competition', $args);
  }
  
  add_action('init', 'create_photos_competition_posttype');
  
  /* Taxonomies Tips and Tools */
  function create_photos_competition_taxonomies() {
  
    // Categories
    $labels = array(
        'name'              => _x('Categories', 'taxonomy general name', 'textdomain'),
        'singular_name'     => _x('Category', 'taxonomy singular name', 'textdomain'),
        'search_items'      => __('Search photos-competition Categories', 'textdomain'),
        'all_items'         => __('All photos-competition Categories', 'textdomain'),
        'parent_item'       => __('Parent photos-competition Category', 'textdomain'),
        'parent_item_colon' => __('Parent photos-competition Category:', 'textdomain'),
        'edit_item'         => __('Edit photos-competition Category', 'textdomain'), 
        'update_item'       => __('Update photos-competition Category', 'textdomain'),
        'add_new_item'      => __('Add New photos-competition Category', 'textdomain'),
        'new_item_name'     => __('New photos-competition Category', 'textdomain'),
        'menu_name'         => __('Categories', 'textdomain'),
    );
  
    $args = array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
    );
  
    register_taxonomy('category', 'photos-competition', $args);
  
  }
  
  add_action('init', 'create_photos_competition_taxonomies', 0);