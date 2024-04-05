<?php

namespace CatalogEnquiry;
defined( 'ABSPATH' ) || exit;

class Install{
    public function __construct() {
        register_activation_hook( CE()->plugin_path, [ $this, 'migration_from_previous' ] );
	}

    /**
     * Migration of data from free to pro
     */
    public static function migration_from_previous() {
        if (!get_option('_is_dismiss_mvxcatalog40_notice', false)) {
            $email_tpl = is_array(get_option('woocommerce_catalog_enquiry_from_settings')) ? get_option('woocommerce_catalog_enquiry_from_settings') : [];
            $general = is_array(get_option('woocommerce_catalog_enquiry_general_settings')) ? get_option('woocommerce_catalog_enquiry_general_settings') : [];
            $exclusion = is_array(get_option('woocommerce_catalog_enquiry_exclusion_settings')) ? get_option('woocommerce_catalog_enquiry_exclusion_settings') : [];
            $button = is_array(get_option('woocommerce_catalog_enquiry_button_appearence_settings')) ? get_option('woocommerce_catalog_enquiry_button_appearence_settings') : [];
            $database_value = array_merge($general, $exclusion, $button, $email_tpl);
            $current_catalog_settings = mvx_catalog_admin_tabs();
    
            if (!empty($current_catalog_settings['catalog-settings'])) {
                foreach ($current_catalog_settings['catalog-settings'] as $settings_key => $settings_value) {
                    if (isset($settings_value['modulename']) && !empty($settings_value['modulename'])) {
                        foreach ($settings_value['modulename'] as $inter_key => $inter_value) {
                            $change_settings_key    =   str_replace("-", "_", $settings_key);
                            $option_name = 'mvx_catalog_'.$change_settings_key.'_tab_settings';
                            if (!empty($database_value)) {
                                if (isset($inter_value['key']) && array_key_exists($inter_value['key'], $database_value)) {
                                    if (empty($inter_value['database_value'])) {
                                        if ($database_value[$inter_value['key']] && $database_value[$inter_value['key']] == 'Enable') {
                                            $optionname_value = get_option($option_name) ? get_option($option_name) : [];
                                            $optionname_value[$inter_value['key']] = array($inter_value['key']);
                                            update_option($option_name, $optionname_value);
                                        }
                                        $custom_text_datas = array('text', 'textarea');
                                        if ($database_value[$inter_value['key']] && in_array($inter_value['type'], $custom_text_datas) ) {
                                            $optionname_value = get_option($option_name) ? get_option($option_name) : [];
                                            $optionname_value[$inter_value['key']] = $database_value[$inter_value['key']];
                                            if ($optionname_value) {
                                                update_option($option_name, $optionname_value);
                                            }
                                        }
    
                                        if ($database_value[$inter_value['key']] && in_array($inter_value['type'], array('select', 'multi-select')) ) {
    
                                            $pages_array = $all_users = $all_products = $all_product_cat = [];
    
                                            $args_cat = array( 'orderby' => 'name', 'order' => 'ASC' );
                                            $terms = get_terms( 'product_cat', $args_cat );
                                            if ($terms && empty($terms->errors)) {
                                                foreach ( $terms as $term) {
                                                    if ($term) {
                                                        if (is_array($database_value['woocommerce_category_list']) && in_array($term->term_id, $database_value['woocommerce_category_list'])) {
                                                            $all_product_cat[] = array(
                                                                'value'=> $term->term_id,
                                                                'label'=> $term->name,
                                                                'key'=> $term->term_id,
                                                            ); 
                                                        }
                                                    }
                                                }
                                            }
    
                                            $args = apply_filters('woocommerce_catalog_limit_backend_product', array( 'posts_per_page' => -1, 'post_type' => 'product', 'post_status' => 'publish', 'orderby' => 'title', 'order' => 'ASC' ));
                                            $woocommerce_product = get_posts( $args );
                                            foreach ( $woocommerce_product as $post => $value ) {
                                                if (is_array($database_value['woocommerce_product_list']) && in_array($value->ID, $database_value['woocommerce_product_list'])) {
                                                    $all_products[] = array(
                                                        'value'=> $value->ID,
                                                        'label'=> $value->post_title,
                                                        'key'=> $value->ID,
                                                    );
                                                } 
                                            }
    
                                            $users = get_users();
                                            foreach($users as $user) {
                                                if (is_array($database_value['woocommerce_user_list']) && in_array($user->data->ID, $database_value['woocommerce_user_list'])) {
                                                    $all_users[] = array(
                                                        'value'=> $user->data->ID,
                                                        'label'=> $user->data->display_name,
                                                        'key'=> $user->data->ID,
                                                    );
                                                }
                                            }
                                            
                                            $pages_array['woocommerce_user_list'] = $all_users;
                                            $pages_array['woocommerce_product_list'] = $all_products;
                                            $pages_array['woocommerce_category_list'] = $all_product_cat;
                                            update_option('mvx_catalog_exclusion_tab_settings', $pages_array);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        update_option('_is_dismiss_mvxcatalog40_notice', true);
    }
}