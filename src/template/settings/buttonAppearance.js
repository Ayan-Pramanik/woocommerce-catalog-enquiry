// import { __ } from '@wordpress/i18n';

// export default {
//     id: 'button-appearance',
//     name: __('Button Appearance', 'woocommerce-catalog-enquiry'),
//     apiurl: 'save_enquiry',
//     desc: __("Change the appearance of the catalog button to match the theme of your marketplace.", 'woocommerce-catalog-enquiry'),
//     icon: 'icon-button-appearance-tab',
//     submenu: 'settings',
//     modulename: [
//         {
//             key: 'woocommerce_catalog_enquiry_button_settings',
//             type: 'blocktext',
//             label: __('no_label', 'woocommerce-catalog-enquiry'),
//             blocktext: __('Button Customizer', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'enquiry_button_text',
//             type: 'text',
//             label: __('Button Text', 'woocommerce-catalog-enquiry'),
//             desc: __('Enter the text for your Enquiry Button.', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'button_type',
//             type: 'select',
//             label: __('Button Type', 'woocommerce-catalog-enquiry'),
//             options: [
//                 {
//                     key: "1",
//                     label: __('Read More', 'woocommerce-catalog-enquiry'),
//                     value: "1",
//                 },
//                 {
//                     key: "2",
//                     label: __('Custom Link For All Products', 'woocommerce-catalog-enquiry'),
//                     value: "2",
//                 },
//                 {
//                     key: "3",
//                     label: __('Individual link in all products', 'woocommerce-catalog-enquiry'),
//                     value: '3',
//                 },
//                 {
//                     key: "4",
//                     label: __('No Link Just #', 'woocommerce-catalog-enquiry'),
//                     value: '4',
//                 }
//             ],
//             desc: __('Default: Read More.', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'is_button',
//             label: __("Your own button style", 'woocommerce-catalog-enquiry'),
//             class: 'mvx-toggle-checkbox',
//             type: 'checkbox',
//             options: [
//                 {
//                     key: "is_button",
//                     label: __("Enable the custom design for enquiry button.", 'woocommerce-catalog-enquiry'),
//                     value: "is_button"
//                 },
//             ],
//             database_value: [],
//         },
//         {
//             key: 'custom_own_button_style',
//             depend_checkbox: 'is_button',
//             type: 'own_button',
//             class: 'mvx-setting-own-class',
//             desc: __('', 'woocommerce-catalog-enquiry'),
//             label: __('Make your own Button Style', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'woocommerce_catalog_enquiry_button_settings',
//             type: 'blocktext',
//             depend_checkbox: 'is_button',
//             label: __('no_label', 'woocommerce-catalog-enquiry'),
//             blocktext: __('Custom Button Customizer', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'custom_example_button',
//             depend_checkbox: 'is_button',
//             type: 'example_button',
//             class: 'mvx-setting-own-class',
//             desc: __('', 'woocommerce-catalog-enquiry'),
//             label: __('', 'woocommerce-catalog-enquiry')
//         },
//         {
//             key: 'custom_button_size',
//             depend_checkbox: 'is_button',
//             type: 'slider',
//             class: 'mvx-setting-slider-class',
//             desc: __('', 'woocommerce-catalog-enquiry'),
//             label: __('Button Size', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'custom_font_size',
//             depend_checkbox: 'is_button',
//             type: 'slider',
//             class: 'mvx-setting-slider-class',
//             desc: __('', 'woocommerce-catalog-enquiry'),
//             label: __('Font Size', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'custom_border_radius',
//             depend_checkbox: 'is_button',
//             type: 'slider',
//             class: 'mvx-setting-slider-class',
//             desc: __('', 'woocommerce-catalog-enquiry'),
//             label: __('Border Radius', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'custom_border_size',
//             depend_checkbox: 'is_button',
//             type: 'slider',
//             class: 'mvx-setting-slider-class',
//             desc: __('', 'woocommerce-catalog-enquiry'),
//             label: __('Border Size', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'custom_top_gradient_color',
//             depend_checkbox: 'is_button',
//             type: 'color',
//             label: __('Top Gradient Color', 'woocommerce-product-stock-alert'),
//             desc: __('This lets you choose button top gradient color.', 'woocommerce-product-stock-alert'),
//         },
//         {
//             key: 'custom_bottom_gradient_color',
//             type: 'color',
//             depend_checkbox: 'is_button',
//             label: __('Bottom Gradient Color', 'woocommerce-product-stock-alert'),
//             desc: __('This lets you choose button bottom gradient color.', 'woocommerce-product-stock-alert'),
//         },
//         {
//             key: 'custom_border_color',
//             type: 'color',
//             depend_checkbox: 'is_button',
//             label: __('Border Color', 'woocommerce-product-stock-alert'),
//             desc: __('This lets you choose button border color.', 'woocommerce-product-stock-alert'),
//         },
//         {
//             key: 'custom_text_color',
//             type: 'color',
//             depend_checkbox: 'is_button',
//             label: __('Text Color', 'woocommerce-product-stock-alert'),
//             desc: __('This lets you choose button text color.', 'woocommerce-product-stock-alert'),
//         },
//         {
//             key: 'custom_hover_background_color',
//             type: 'color',
//             depend_checkbox: 'is_button',
//             label: __('Hover Background Color', 'woocommerce-product-stock-alert'),
//             desc: __('This lets you choose button hover background color.', 'woocommerce-product-stock-alert'),
//         },
//         {
//             key: 'custom_hover_text_color',
//             type: 'color',
//             depend_checkbox: 'is_button',
//             label: __('Hover Text Color', 'woocommerce-product-stock-alert'),
//             desc: __('This lets you choose button hover text color.', 'woocommerce-product-stock-alert'),
//         },
//         {
//             key: 'custom_button_font',
//             type: 'select',
//             depend_checkbox: 'is_button',
//             label: __('Select Font', 'woocommerce-catalog-enquiry'),
//             options: [
//                 {
//                     key: "helvetica",
//                     label: __('Helvetica', 'woocommerce-catalog-enquiry'),
//                     value: "Helvetica, Arial, Sans-Serif",
//                 },
//                 {
//                     key: "georgia",
//                     label: __('Georgia', 'woocommerce-catalog-enquiry'),
//                     value: "Georgia, Serif",
//                 },
//                 {
//                     key: "lucida_grande",
//                     label: __('Lucida Grande', 'woocommerce-catalog-enquiry'),
//                     value: 'Lucida Grande, Helvetica, Arial, Sans-Serif',
//                 },
//             ],
//         },
//         {
//             key: 'separator4_content',
//             type: 'section',
//             label: "",
//         },
//         {
//             key: 'woocommerce_catalog_enquiry_button2_settings',
//             type: 'blocktext',
//             label: __('no_label', 'woocommerce-catalog-enquiry'),
//             blocktext: __('Additional Settings', 'woocommerce-catalog-enquiry'),
//         },
//         {
//             key: 'custom_css_product_page',
//             type: 'textarea',
//             class: 'mvx-setting-wpeditor-class',
//             desc: __('Put your custom css here, to customize the enquiry form.', 'woocommerce-catalog-enquiry'),
//             label: __('Custom CSS', 'woocommerce-catalog-enquiry'),
//         },
//     ]
// };