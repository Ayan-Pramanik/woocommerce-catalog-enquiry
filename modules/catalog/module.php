<?php
namespace CatalogEnquiry\Modules\Catalog;

class Module {
    private $settings_button;

    public function __construct() {
        // $this->settings_button = CE()->options_button_appearence_settings;

        // Hook the method to remove the "Add to Cart" button
        // add_action('init', array($this, 'remove_add_to_cart_button'));
        add_action( 'woocommerce_after_add_to_cart_button',[ $this,'add_custom_button'], 10, 0 );
    }

    function add_custom_button() {
        echo '<button class="btn-atc" href="#">Hello</button>';
    }

    // // Method to remove the "Add to Cart" button
    // public function remove_add_to_cart_button() {
    //     if ( isset( $this->settings_button['button_type'] ) ) {
    //         add_filter('woocommerce_loop_add_to_cart_link', array($this, 'woocommerce_loop_add_to_cart_link'), 99, 3);
    //     } else {
    //         remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10);
    //         // remove variation from product single
    //         remove_action('woocommerce_single_variation', 'woocommerce_single_variation_add_to_cart_button', 20);
    //     }
    //     remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30);
    //     add_action('woocommerce_single_product_summary', array($this, 'add_variation_product'), 29);
    // }

    // public function woocommerce_loop_add_to_cart_link($add_to_cart_button, $product, $args = array()) {
    //     $settings = CE()->options_general_settings;
    //     // button option

    //     $labels = __('Add to cart', 'woocommerce-catalog-enquiry');
    //     $link_add_to_cart = $product ? get_permalink( $product->get_id() ) : '';

    //     if (isset($this->settings['is_enable']) && CE()->utill->mvx_catalog_get_settings_value($this->settings['is_enable'], 'checkbox') == "Enable") {
    //         $pro_link = '';
    //         if (isset($this->settings_button['button_type'])) {
    //             switch ($this->settings_button['button_type']) {
    //                 case 2:
    //                     $link = isset($this->settings_button['button_link']) && !empty($this->settings_button['button_link']) ? $this->settings_button['button_link'] : '#';
    //                     $label = isset($this->settings_button['enquiry_button_text']) && !empty($this->settings_button['enquiry_button_text']) ? $this->settings_button['enquiry_button_text'] : $product->add_to_cart_text();
    //                     $classes = implode( ' ', array('button','product_type_' . $product->get_type()));
                        
    //                     if (isset($this->settings['is_enable_out_of_stock']) && CE()->utill->mvx_catalog_get_settings_value($this->settings['is_enable_out_of_stock'], 'checkbox') == "Enable") {
    //                         if (!$product->managing_stock() && !$product->is_in_stock()) {
    //                             $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                                 esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                                 esc_url( $link ),
    //                                 esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                                 esc_attr( $classes ),
    //                                 isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                                 esc_html( $label )
    //                             );
    //                         } else {
    //                             $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                                 esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                                 esc_url( $link_add_to_cart ),
    //                                 esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                                 esc_attr( $classes ),
    //                                 isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                                 esc_html( $labels )
    //                             );
    //                         }
    //                     } else {
    //                         $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                             esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                             esc_url( $link ),
    //                             esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                             esc_attr( $classes ),
    //                             isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                             esc_html( $label )
    //                         );
    //                     }
    //                     break;
                    
    //                 case 3:
    //                     $product_link = get_post_meta($product->get_id(), 'woocommerce_catalog_enquiry_product_link', true);
    //                     $link = !empty($product_link) ? $product_link : '#';
    //                     $label = isset($this->settings_button['enquiry_button_text']) && !empty($this->settings_button['enquiry_button_text']) ? $this->settings_button['enquiry_button_text'] : $product->add_to_cart_text();
    //                     $classes = implode( ' ', array('button','product_type_' . $product->get_type()));
                       
    //                     if (isset($this->settings['is_enable_out_of_stock']) && CE()->utill->mvx_catalog_get_settings_value($this->settings['is_enable_out_of_stock'], 'checkbox') == "Enable") {
    //                         if (!$product->managing_stock() && !$product->is_in_stock()) {
    //                             $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                                 esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                                 esc_url( $link ),
    //                                 esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                                 esc_attr( $classes ),
    //                                 isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                                 esc_html( $label )
    //                             );
    //                         } else {
    //                             $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                                 esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                                 esc_url( $link_add_to_cart ),
    //                                 esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                                 esc_attr( $classes ),
    //                                 isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                                 esc_html( $labels )
    //                             );
    //                         }
    //                     } else {
    //                         $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                             esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                             esc_url( $link ),
    //                             esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                             esc_attr( $classes ),
    //                             isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                             esc_html( $label )
    //                         );
    //                     }
    //                     break;
                    
    //                 case 4:
    //                     $link = '#';
    //                     $label = isset($this->settings_button['enquiry_button_text']) && !empty($this->settings_button['enquiry_button_text']) ? $this->settings_button['enquiry_button_text'] : $product->add_to_cart_text();
    //                     $classes = implode( ' ', array('button','product_type_' . $product->get_type()));
    //                     if (isset($this->settings['is_enable_out_of_stock']) && CE()->utill->mvx_catalog_get_settings_value($this->settings['is_enable_out_of_stock'], 'checkbox') == "Enable") {
    //                         if (!$product->managing_stock() && !$product->is_in_stock()) {
    //                             $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                                 esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                                 $link,
    //                                 esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                                 esc_attr( $classes ),
    //                                 isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                                 esc_html( $label )
    //                             );
    //                         } else {
    //                             $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                                 esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                                 esc_url($link_add_to_cart),
    //                                 esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                                 esc_attr( $classes ),
    //                                 isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                                 esc_html( $labels )
    //                             );
    //                         }
    //                     } else {
    //                         $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                             esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                             $link,
    //                             esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                             esc_attr( $classes ),
    //                             isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                             esc_html( $label )
    //                         );
    //                     }
    //                     break;

    //                 default:
    //                     $link = get_permalink($product->get_id());
    //                     $label = isset($this->settings_button['enquiry_button_text']) && !empty($this->settings_button['enquiry_button_text']) ? $this->settings_button['enquiry_button_text'] : __('Read More', 'woocommerce-catalog-enquiry');
    //                     $classes = implode( ' ', array('button','product_type_' . $product->get_type()));
    //                     if (isset($this->settings['is_enable_out_of_stock']) && CE()->utill->mvx_catalog_get_settings_value($this->settings['is_enable_out_of_stock'], 'checkbox') == "Enable") {
    //                         if (!$product->managing_stock() && !$product->is_in_stock()) {
    //                             $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                                 esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                                 $link,
    //                                 esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                                 esc_attr( $classes ),
    //                                 isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                                 esc_html( $label )
    //                             );
    //                         } else {
    //                             $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                                 esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                                 $link,
    //                                 esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                                 esc_attr( $classes ),
    //                                 isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                                 esc_html( $labels )
    //                             );
    //                         }
    //                     } else {
    //                         $pro_link = sprintf( '<a id="%s" href="%s" data-quantity="%s" class="%s" %s>%s</a>',
    //                             esc_attr('woocommerce-catalog-enquiry-custom-button'),
    //                             $link,
    //                             esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
    //                             esc_attr( $classes ),
    //                             isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
    //                             esc_html( $label )
    //                         );
    //                     }
    //                     break;
    //             }
    //         }
    //         return apply_filters('woocommerce_catalog_enquiry_custom_product_link', $pro_link, $product, $this->settings, $this->settings_button);
    //     } else {
    //         return $add_to_cart_button;
    //     }
        
    // }

    // public function add_variation_product() {

    //     global $product;
    //     if ($product->is_type('variable')) {
    //         $variable_product = new WC_Product_Variable($product);
    //         // Enqueue variation scripts
    //         wp_enqueue_script('wc-add-to-cart-variation');
    //         $available_variations = $variable_product->get_available_variations();
    //         //attributes
    //         CE()->template->get_template('woocommerce-catalog-enquiry-variable-product.php', array('available_variations' => $available_variations));

    //     } elseif ($product->is_type('simple')) {
    //         echo wc_get_stock_html($product);
    //     }
    // }
}
