// import { __ } from '@wordpress/i18n';

// export default {
//         id:'general',
//         name: __('General', 'woocommerce-catalog-enquiry'),
//         desc: __('Configure basic catalog settings to operate your catalog marketplace.', 'woocommerce-catalog-enquiry'),
//         icon: 'icon-general-tab',
//         submenu: 'settings',
//         apiurl: 'save_enquiry',
//         modulename: [
//             {
//                 key: 'woocommerce_catalog_enquiry_general_settings',
//                 type: 'blocktext',
//                 label: __('no_label', 'woocommerce-catalog-enquiry'),
//                 blocktext: __('Common Settings', 'woocommerce-catalog-enquiry'),
//             },
//             {
//                 key: 'is_enable',
//                 label: __('Catalog Mode', 'woocommerce-catalog-enquiry'),
//                 class: 'mvx-toggle-checkbox',
//                 type: 'checkbox',
//                 options: [
//                     {
//                         key: 'is_enable',
//                         // label: apply_filters('woocommerce_catalog_enquiry_enable_catalog_text', __('Enable this to activate catalog mode sitewide. This will remove your Add to Cart button. To keep Add to Cart button in your site, upgrade to <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">WooCommerce Catalog Enquiry Pro</a>.', 'woocommerce-catalog-enquiry')),
//                         value: 'is_enable'
//                     },
//                 ],
//                 database_value: []
//             },
//             {
//                 key: 'is_enable_enquiry',
//                 label: __('Product Enquiry Button', 'woocommerce-catalog-enquiry'),
//                 class: 'mvx-toggle-checkbox',
//                 type: 'checkbox',
//                 options: [
//                     {
//                         key: 'is_enable_enquiry',
//                         label: __('Enable this to add the Enquiry button for all products. Use Exclusion settings to exclude specific product or category from enquiry.', 'woocommerce-catalog-enquiry'),
//                         value: 'is_enable_enquiry'
//                     },
//                 ],
//                 database_value: []
//             },
//             {
//                 key: 'is_enable_out_of_stock',
//                 label: __('Product Enquiry Button When Product is Out Of Stock', 'woocommerce-catalog-enquiry'),
//                 class: 'mvx-toggle-checkbox',
//                 type: 'checkbox',
//                 options: [
//                     {
//                         key: 'is_enable_out_of_stock',
//                         label: __('Enable this to add the Enquiry button for the products which are out of stock. Use Exclusion settings to exclude specific product or category from enquiry.', 'woocommerce-catalog-enquiry'),
//                         value: 'is_enable_out_of_stock'
//                     },
//                 ],
//                 database_value: []
//             },
//             {
//                 key: 'for_user_type',
//                 type: 'select',
//                 label: __('Catalog Mode Applicable For', 'woocommerce-catalog-enquiry'),
//                 desc: __('Select the type users where this catalog is applicable', 'woocommerce-catalog-enquiry'),
//                 options: [
//                     {
//                         key: '1',
//                         label: __('Only Logged out Users', 'woocommerce-catalog-enquiry'),
//                         value: '1',
//                     },
//                     {
//                         key: '2',
//                         label: __('Only Logged in Users', 'woocommerce-catalog-enquiry'),
//                         value: '2',
//                     },
//                     {
//                         key: '3',
//                         label: __('All Users', 'woocommerce-catalog-enquiry'),
//                         value: '3',
//                     }
//                 ],
//             },
//             {
//                 key: 'is_hide_cart_checkout',
//                 label: __('Disable Cart and Checkout Page?', 'woocommerce-catalog-enquiry'),
//                 class: 'mvx-toggle-checkbox',
//                 type: 'checkbox',
//                 options: [
//                     {
//                         key: 'is_hide_cart_checkout',
//                         // label: apply_filters('woocommerce_catalog_enquiry_hide_cart', __('Enable this to redirect users to the home page if they click on the cart or checkout page. To set the redirection to another page, kindly upgrade to <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">WooCommerce Catalog Enquiry Pro</a>.', 'woocommerce-catalog-enquiry')),
//                         value: 'is_hide_cart_checkout'
//                     },
//                 ],
//                 database_value: [],
//             },
//             {
//                 key: 'disable_cart_page_link',
//                 depend_checkbox: 'is_hide_cart_checkout',
//                 // disable: apply_filters('mvx_catalog_free_only_active', true),
//                 type: 'select',
//                 label: __('Set Redirect Page', 'woocommerce-catalog-enquiry'),
//                 // desc: apply_filters('woocommerce_catalog_redirect_disabled_cart_page', __('Select the page where users will be redirected for the disabled cart page. To use this feature, kindly upgrade to <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">WooCommerce Catalog Enquiry Pro</a>.', 'woocommerce-catalog-enquiry')),
//                 options: appLocalizer.all_pages,
//             },
//             {
//                 key: 'is_page_redirect',
//                 label: __('Redirect after Enquiry form Submission', 'woocommerce-catalog-enquiry'),
//                 class: 'mvx-toggle-checkbox',
//                 type: 'checkbox',
//                 options: [
//                     {
//                         key: 'is_page_redirect',
//                         label: __('Enable this to redirect users to another page after successful enquiry submission.', 'woocommerce-catalog-enquiry'),
//                         value: 'is_page_redirect'
//                     },
//                 ],
//                 database_value: [],
//             },
//             {
//                 key: 'redirect_page_id',
//                 depend_checkbox: 'is_page_redirect',
//                 type: 'select',
//                 label: __('Set Redirect Page', 'woocommerce-catalog-enquiry'),
//                 desc: __('Select the page where users will be redirected after successful enquiry.', 'woocommerce-catalog-enquiry'),
//                 options: appLocalizer.all_pages,
//             },
//             {
//                 key: 'separator1_content',
//                 type: 'section',
//                 label: '',
//             },
//             {
//                 key: 'woocommerce_catalog_enquiry_display_settings',
//                 type: 'blocktext',
//                 label: __('no_label', 'woocommerce-catalog-enquiry'),
//                 blocktext: __('Display Options', 'woocommerce-catalog-enquiry'),
//             },
//             {
//                 key: 'is_remove_price_free',
//                 label: __('Remove Product Price?', 'woocommerce-catalog-enquiry'),
//                 class: 'mvx-toggle-checkbox',
//                 type: 'checkbox',
//                 options: [
//                     {
//                         key: 'is_remove_price_free',
//                         label: __('Enable this option to remove the product price display from the site.', 'woocommerce-catalog-enquiry'),
//                         value: 'is_remove_price_free'
//                     },
//                 ],
//                 database_value: [],
//             },
//             {
//                 key: 'is_disable_popup',
//                 label: __('Disable Enquiry form via popup?', 'woocommerce-catalog-enquiry'),
//                 class: 'mvx-toggle-checkbox',
//                 type: 'checkbox',
//                 options: [
//                     {
//                         key: 'is_disable_popup',
//                         label: __('By default, the form will be displayed via popup. Enable this if you want to display the form below the product description.', 'woocommerce-catalog-enquiry'),
//                         value: 'is_disable_popup'
//                     },
//                 ],
//                 database_value: [],
//             },
//             {
//                 key: 'separator2_content',
//                 type: 'section',
//                 label: '',
//             },
//             {
//                 key: 'woocommerce_catalog_enquiry_email_settings',
//                 type: 'blocktext',
//                 label: __('no_label', 'woocommerce-catalog-enquiry'),
//                 blocktext: __('Enquiry Email Receivers Settings', 'woocommerce-catalog-enquiry'),
//             },
//             {
//                 key: 'other_emails',
//                 type: 'text',
//                 label: __('Additional Recipients Emails', 'woocommerce-catalog-enquiry'),
//                 desc: __('Enter email addresses if you want to receive enquiry mail along with admin mail. You can add multiple comma-separated emails. Default: Admin emails.', 'woocommerce-catalog-enquiry'),
//             },
//             {
//                 key: 'is_other_admin_mail',
//                 label: __('Remove admin email', 'woocommerce-catalog-enquiry'),
//                 class: 'mvx-toggle-checkbox',
//                 type: 'checkbox',
//                 options: [
//                     {
//                         key: 'is_other_admin_mail',
//                         label: __('Enable this if you want to remove admin email from receiver list.', 'woocommerce-catalog-enquiry'),
//                         value: 'is_other_admin_mail'
//                     },
//                 ],
//                 database_value: [],
//             },
//         ]
//     }
