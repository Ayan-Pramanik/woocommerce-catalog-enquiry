<?php
/**
 * Plugin Name: Product Catalog Enquiry
 * Plugin URI: https://multivendorx.com/
 * Description: Convert your WooCommerce store into a catalog website in a click
 * Author: MultiVendorX
 * Version: 5.0.7
 * Author URI: https://multivendorx.com/
 * WC requires at least: 4.2
 * WC tested up to: 8.5.2
 * Text Domain: woocommerce-catalog-enquiry
 * Domain Path: /languages/
*/

if ( !defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
require_once __DIR__ . '/vendor/autoload.php';
function CE() {
    return \CatalogEnquiry\CatalogEnquiry::init( __FILE__ );
}
CE();

// if ( ! class_exists( 'Woocommerce_Catalog_Enquiry_Dependencies' ) )
// 	require_once trailingslashit(dirname(__FILE__)).'includes/class-woocommerce-catalog-enquiry-dependencies.php';
// require_once trailingslashit(dirname(__FILE__)).'includes/woocommerce-catalog-enquiry-core-functions.php';
// require_once trailingslashit(dirname(__FILE__)).'config.php';
// if(!defined('ABSPATH')) exit; // Exit if accessed directly
// if(!defined('WOOCOMMERCE_CATALOG_ENQUIRY_PLUGIN_TOKEN')) exit;
// if(!defined('WOOCOMMERCE_CATALOG_ENQUIRY_TEXT_DOMAIN')) exit;
// /* Plugin activation hook */
// register_activation_hook(__FILE__, 'migration_from_previous');
// /**
// * Plugin page links
// */

// 

// add_filter( 'plugin_row_meta', 'plugin_row_meta', 10, 2 );

// function plugin_row_meta( $links, $file ) {
//     if($file == 'woocommerce-catalog-enquiry/product_catalog_enquiry.php' && apply_filters( 'woocommerce_catalog_enquiry_free_active', true )){
//         $row_meta = array(
//             'pro'    => '<a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" title="' . esc_attr( __( 'Upgrade to Pro', WOOCOMMERCE_CATALOG_ENQUIRY_TEXT_DOMAIN ) ) . '">' . __( 'Upgrade to Pro', WOOCOMMERCE_CATALOG_ENQUIRY_TEXT_DOMAIN ) . '</a>'
//         );
//         return array_merge( $links, $row_meta );
//     }else{
//         return $links;
//     }
// }

// 	if(!class_exists('Woocommerce_Catalog_Enquiry')) {
// 		require_once( trailingslashit(dirname(__FILE__)).'classes/CatalogEnquiry.php' );
// 		global $Woocommerce_Catalog_Enquiry;
// 		$Woocommerce_Catalog_Enquiry = new Woocommerce_Catalog_Enquiry( __FILE__ );
// 		$GLOBALS['Woocommerce_Catalog_Enquiry'] = $Woocommerce_Catalog_Enquiry;
// 	}
