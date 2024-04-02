<?php
namespace CatalogEnquiry;
defined( 'ABSPATH' ) || exit;

class Admin {

    public $settings;

    public function __construct() {
        $this->settings = new Settings();
        $this->init_product_settings();
    }

    public function init_product_settings() {
        $settings = CE()->options_general_settings;
        $options_button_appearence_settings = CE()->options_button_appearence_settings;
        if (isset($settings['is_enable']) && Utill::mvx_catalog_get_settings_value($settings['is_enable'], 'checkbox') == "Enable") {
            if (isset($options_button_appearence_settings['button_type']) && Utill::mvx_catalog_get_settings_value($options_button_appearence_settings['button_type'], 'select') == 3) {
                add_filter('woocommerce_product_data_tabs', array($this, 'catalog_product_data_tabs'), 99);
                add_action('woocommerce_product_data_panels', array($this, 'catalog_product_data_panel'));
                add_action('woocommerce_process_product_meta_simple', array($this, 'save_catalog_data'));
                add_action('woocommerce_process_product_meta_grouped', array($this, 'save_catalog_data'));
                add_action('woocommerce_process_product_meta_external', array($this, 'save_catalog_data'));
                add_action('woocommerce_process_product_meta_variable', array($this, 'save_catalog_data'));
            }
        }
    }

    public function catalog_product_data_tabs($tabs) {
        $tabs['woocommerce_catalog_enquiry'] = array(
            'label' => __('Catalog Enquiry', 'woocommerce-catalog-enquiry'),
            'target' => 'woocommerce-catalog-enquiry-product-data',
            'class' => array(''),
        );
        return $tabs;
    }

    /**
     * Save meta.
     *
     * Save the product catalog enquiry meta data.
     *
     * @since 1.0.0
     *
     * @param int $post_id ID of the post being saved.
     */
    public function save_catalog_data($post_id) {
        update_post_meta($post_id, 'woocommerce_catalog_enquiry_product_link', esc_url($_POST['woocommerce_catalog_enquiry_product_link']));
    }

    /**
     * Output catalog individual product link.
     *
     * Output settings to the product link tab.
     *
     * @since 1.0.0
     */
    public function catalog_product_data_panel() {
        ?><div id="woocommerce-catalog-enquiry-product-data" class="panel woocommerce_options_panel"><?php
        woocommerce_wp_text_input(array(
            'id' => 'woocommerce_catalog_enquiry_product_link',
            'label' => __('Enter product external link', 'woocommerce-catalog-enquiry'),
            'placeholder' => __('https://www.google.com', 'woocommerce-catalog-enquiry')
        ));
        ?></div><?php
        }
    }

    

    