// import { __ } from '@wordpress/i18n';

// export default {
//     id:'enquiry-form',
//     name: __('Enquiry Form', 'woocommerce-catalog-enquiry'),
//     apiurl: 'save_enquiry',
//     desc: __("Customise your product enquiry form", 'woocommerce-catalog-enquiry'),
//     icon: 'icon-enquiry-form-tab',
//     submenu: 'settings',
//     modulename: [
//         {
//             key: 'woocommerce_catalog_enquiry_form_general_settings',
//             type: 'blocktext',
//             label: __('no_label', 'woocommerce-catalog-enquiry'),
//             blocktext: __('General Settings', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'top_content_form',
//             type: 'textarea',
//             desc: __('This content will be displayed above your from.', 'woocommerce-catalog-enquiry'),
//             label: __('Content Before Enquiry From', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'bottom_content_form',
//             type: 'textarea',
//             desc: __('This content will be displayed after your from.', 'woocommerce-catalog-enquiry'),
//             label: __('Content After Enquiry From', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'is_override_form_heading',
//             label: __("Override Form Title?", 'woocommerce-catalog-enquiry'),
//             class: 'mvx-toggle-checkbox',
//             type: 'checkbox',
//             options: [
//                 {
//                     key: "is_override_form_heading",
//                     label: __('By default it will be "Enquiry about PRODUCT_NAME". Enable this to set your custom title.', 'woocommerce-catalog-enquiry'),
//                     value: "is_override_form_heading"
//                 }
//             ],
//             database_value: [],
//         },
//         {
//             key: 'custom_static_heading',
//             depend_checkbox: 'is_override_form_heading',
//             type: 'text',
//             desc: __('Set custom from title. Use this specifier to replace the product name - %% PRODUCT_NAME %%.', 'woocommerce-catalog-enquiry'),
//             label: __('Set Form Title', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'separator3_content',
//             type: 'section',
//             label: "",
//         },
//         {
//             key: 'woocommerce_catalog_enquiry_form_settings',
//             type: 'blocktext',
//             label: __('no_label', 'woocommerce-catalog-enquiry'),
//             blocktext: __('Enquiry Form Fields', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'enquiry_form_fileds',
//             type: 'table',
//             label: __('Enquiry Form Fileds', 'woocommerce-catalog-enquiry'),
//             desc: __('Want to customise the form as per your need? To have a fully customizable form kindly upgrade to <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">WooCommerce Catalog Enquiry Pro</a>', 'woocommerce-catalog-enquiry', 'woocommerce-catalog-enquiry'),
//             label_options: [
//                 __('Field Name', 'woocommerce-catalog-enquiry'),
//                 __('Enable / Disable', 'woocommerce-catalog-enquiry'),
//                 __('Set New Field Name', 'woocommerce-catalog-enquiry'),
//             ],
//             options: [
//                 {
//                     variable: __("Name", 'woocommerce-catalog-enquiry'),
//                     id: 'name-label',
//                     is_enable: false,
//                     description: __('Enables you to create a seller dashboard ', 'woocommerce-catalog-enquiry'),
//                 },
//                 {
//                     variable: __("Email", 'woocommerce-catalog-enquiry'),
//                     id: 'email-label',
//                     is_enable: false,
//                     description: __('Creates a page where the vendor registration form is available', 'woocommerce-catalog-enquiry'),
//                 },
//                 {
//                     variable: __("Phone", 'woocommerce-catalog-enquiry'),
//                     id: 'is-phone',
//                     is_enable: true,
//                     description: __('Lets you view  a brief summary of the coupons created by the seller and number of times it has been used by the customers', 'woocommerce-catalog-enquiry'),
//                 },
//                 {
//                     variable: __("Address", 'woocommerce-catalog-enquiry'),
//                     id: 'is-address',
//                     is_enable: true,
//                     description: __('Allows you to glance at the recent products added by seller', 'woocommerce-catalog-enquiry'),
//                 },
//                 {
//                     variable: __("Enquiry About", 'woocommerce-catalog-enquiry'),
//                     id: 'is-subject',
//                     is_enable: true,
//                     description: __('Displays the products added by seller', 'woocommerce-catalog-enquiry'),
//                 },
//                 {
//                     variable: __("Enquiry Details", 'woocommerce-catalog-enquiry'),
//                     id: 'is-comment',
//                     is_enable: true,
//                     description: __('Exhibits featured products added by the seller', 'woocommerce-catalog-enquiry'),
//                 },
//                 {
//                     variable: __("File Upload", 'woocommerce-catalog-enquiry'),
//                     id: 'is-fileupload',
//                     is_enable: true,
//                     description: __('Allows you to see the products put on sale by a seller', 'woocommerce-catalog-enquiry'),
//                 },
//                 {
//                     variable: __("File Upload Size Limit ( in MB )", 'woocommerce-catalog-enquiry'),
//                     id: 'filesize-limit',
//                     is_enable: true,
//                     description: __('Allows you to see the products put on sale by a seller', 'woocommerce-catalog-enquiry'),
//                 },
//                 {
//                     variable: __("Captcha", 'woocommerce-catalog-enquiry'),
//                     id: 'is-captcha',
//                     is_enable: true,
//                     description: __('Displays the top rated products of the seller', 'woocommerce-catalog-enquiry'),
//                 },
//             ],
//         },
//     ],
// };
