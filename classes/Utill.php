<?php
namespace CatalogEnquiry;
defined( 'ABSPATH' ) || exit;
class Utill {

    /**
     * Function to console and debug errors.
     */
    public static function log( $str ) {
        $file = CE()->plugin_path . 'log/catalog-enquiry.log';
        if ( file_exists( $file ) ) {
            // Open the file to get existing content
            $str = var_export( $str, true );
            $current = wp_remote_get( $file );
            if (file_exists($file)) {
                // Open the file to get existing content
                $current = file_get_contents($file);
                if ($current) {
                    // Append a new content to the file
                    $current .= "$str" . "\r\n";
                    $current .= "-------------------------------------\r\n";
                } else {
                    $current = "$str" . "\r\n";
                    $current .= "-------------------------------------\r\n";
                }
                // Write the contents back to the file
                file_put_contents($file, $current);
            }
        }
    }
    /**
     * Function to get the catalog settings value
     */
    public static function mvx_catalog_get_settings_value($key = array(), $default = '') {
        if ($default == 'select' && is_array($key) && isset($key['value'])) {
            return $key['value'];
        }
        if ($default == 'checkbox' && is_array($key) && !empty($key)) {
            return 'Enable';
        }
        if ($default == 'multiselect' && is_array($key)) {
            return wp_list_pluck($key, 'value');
        }
        return $default;
    }
}