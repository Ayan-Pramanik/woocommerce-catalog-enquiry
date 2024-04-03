<?php

namespace CatalogEnquiry;
defined( 'ABSPATH' ) || exit;

class RestAPI{
    function __construct() {
        if ( current_user_can( 'manage_options' ) ) {
            add_action( 'rest_api_init', [ $this, 'register_restAPI' ] );
        }
    }

    /**
     * Rest api register function call on rest_api_init action hook.
     * @return void
     */
    public function register_restAPI() {
        register_rest_route( 'mvx_catalog/v1', '/fetch_admin_tabs', [
            'methods' => \WP_REST_Server::READABLE,
            'callback' => array( $this, 'mvx_catalog_fetch_admin_tabs' ),
            'permission_callback' => array( $this, 'catalog_permission' )
        ] );

        register_rest_route( 'mvx_catalog/v1', '/save_enquiry', [
            'methods' => \WP_REST_Server::EDITABLE,
            'callback' => array( $this, 'mvx_catalog_save_enquiry' ),
            'permission_callback' => array( $this, 'catalog_permission' )
        ] );
    }

    /**
     * Catelog api permission function.
     * @return bool
     */
    public function catalog_permission() {
		return current_user_can('manage_options');
	}

    public function mvx_catalog_fetch_admin_tabs() {
        $mvx_catalog_tabs_data = Utill::mvx_catalog_admin_tabs() ? : [];
        return rest_ensure_response( $mvx_catalog_tabs_data );
	}

	public function mvx_catalog_save_enquiry($request) {
        $all_details = [];
        $modulename = $request->get_param('modulename');
        $modulename = str_replace("-", "_", $modulename);
        $get_managements_data = $request->get_param( 'model' );
        $optionname = 'mvx_catalog_'.$modulename.'_tab_settings';
        update_option($optionname, $get_managements_data);
        $all_details['error'] = __('Settings Saved', 'woocommerce-catalog-enquiry');
        return $all_details;
        die;
	}
}