<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cmsdev_db_sleep_app');
//define('DB_NAME', 'cmsdev_db');
/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'secret');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%zV_Y2+3:+>($) Mi:%tSv7hdq5Fro.,13jjoygbVkm$*j:Z;oek7Qlk{R-C,N0}');
define('SECURE_AUTH_KEY',  '~g<~Jx}WZfi:HOq!mN^tPT$~E)spxkB>,;C8Rdr8let[0k:4UDXEOl{,R[E:[^!O');
define('LOGGED_IN_KEY',    '^zV5uuBIXeBtJe?c] |izm8:17k[=wzNY+8JV?fTrtH~XU8L=(i+?$0^`K,xuR/m');
define('NONCE_KEY',        '1[``~:N^@hKM[~qYK(1k1!@/]/$M3hEje3{d*&D&Lwi%.EpvX)0xBQ$p6s3R?u`B');
define('AUTH_SALT',        'aD N@Ar2r<oJdneTZ54PI,$BCT6qpftgc=,Aj!2utsQmE^:k;Mj?,*DY^N93Me/P');
define('SECURE_AUTH_SALT', 'p-{w3(DZo;VA=pfLf.Hw+>} j`F]x;@JR7GN;^:_+<|C5ad%/9@+AQZwRp[`uU.W');
define('LOGGED_IN_SALT',   '=1)H{UT=|7aDLF]b,PY[IeGD>g>`K_K`0Pl^S=iX@FISk-^K1<l1XEokaD;t3nS4');
define('NONCE_SALT',       'B=(9yfTb5wu;zBOA2Jn;z1V|Kd|JWe-layXP=` Sph*JkEf>)gTgzrEA)|Eu7|)y');
define('JWT_AUTH_SECRET_KEY', '+08[N||3BE:#@%eqM-Cg[(l0OMwL]tU+[l^6$P[o?EJ%{d-#{x6F)`2!;w;;T6a}');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
