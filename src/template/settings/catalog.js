import { __ } from '@wordpress/i18n';

export default {
        id:'catalog',
        priority:2,
        name: __('Catalog', 'woocommerce-catalog-enquiry'),
        desc: __('Configure basic catalog settings to operate your catalog marketplace.', 'woocommerce-catalog-enquiry'),
        icon: 'icon-general-tab',
        submenu: 'settings',
        apiurl: 'save_enquiry',
        modal: [
            // {
            //     key: 'woocommerce_catalog_enquiry_general_settings',
            //     type: 'blocktext',
            //     label: __('no_label', 'woocommerce-catalog-enquiry'),
            //     blocktext: __('Common Settings', 'woocommerce-catalog-enquiry'),
            // },
            {
                key: 'for_user_type',
                type: 'select',
                label: __('Catalog Mode Applicable For', 'woocommerce-catalog-enquiry'),
                desc: __('Select the type users where this catalog is applicable', 'woocommerce-catalog-enquiry'),
                options: [
                    {
                        key: '1',
                        label: __('Only Logged out Users', 'woocommerce-catalog-enquiry'),
                        value: '1',
                    },
                    {
                        key: '2',
                        label: __('Only Logged in Users', 'woocommerce-catalog-enquiry'),
                        value: '2',
                    },
                    {
                        key: '3',
                        label: __('All Users', 'woocommerce-catalog-enquiry'),
                        value: '3',
                    }
                ],
            },
            {
                key: 'is_hide_cart_checkout',
                label: __('Disable Cart and Checkout Page?', 'woocommerce-catalog-enquiry'),
                class: 'mvx-toggle-checkbox',
                type: 'checkbox',
                options: [
                    {
                        key: 'is_hide_cart_checkout',
                        label:appLocalizer.disable_cart_label,
                        value: 'is_hide_cart_checkout'
                    },
                ],
            },
            {
                key: 'woocommerce_catalog_enquiry_general_settings',
                type: 'blocktext',
                label: __('no_label', 'woocommerce-catalog-enquiry'),
                blocktext: __('Catalog Page Design', 'woocommerce-catalog-enquiry'),
            },
            {
                key: 'is_catalog_page_customization',
                label: __('Enable Customization for Catalog Page ?', 'woocommerce-catalog-enquiry'),
                class: 'mvx-toggle-checkbox',
                type: 'checkbox',
                options: [
                    {
                        key: 'is_catalog_page_customization',
                        label: __( 'Enable this to customize your Catalog Page', 'woocommerce-catalog-enquiry' ),
                        value: 'is_catalog_page_customization'
                    },
                ],
            },
            {
                key: 'in_description_box',
                type: 'textarea',
                desc: __('This content will be displayed in description box.', 'woocommerce-catalog-enquiry'),
                label: __('Description box text', 'woocommerce-catalog-enquiry'),
            },
            {
                key: 'for_description_box_position',
                type: 'select',
                label: __('Description Box Position', 'woocommerce-catalog-enquiry'),
                desc: __('Select the position where the description box will be shown', 'woocommerce-catalog-enquiry'),
                options: [
                    {
                        key: '1',
                        label: __('Above Product Description', 'woocommerce-catalog-enquiry'),
                        value: 'above',
                    },
                    {
                        key: '2',
                        label: __('Replace', 'woocommerce-catalog-enquiry'),
                        value: 'replace',
                    },
                    {
                        key: '3',
                        label: __('Below Product Description', 'woocommerce-catalog-enquiry'),
                        value: 'below',
                    }
                ],
            },
            {
                key: 'for_description_box',
                type: 'select',
                label: __('Button display Position', 'woocommerce-catalog-enquiry'),
                desc: __('Select the position where the button will be shown', 'woocommerce-catalog-enquiry'),
                options: [
                    {
                        key: '1',
                        label: __('Below Description', 'woocommerce-catalog-enquiry'),
                        value: 'above',
                    },
                    {
                        key: '2',
                        label: __('Above Add to Cart', 'woocommerce-catalog-enquiry'),
                        value: 'replace',
                    },
                    {
                        key: '3',
                        label: __('Above Add to Cart', 'woocommerce-catalog-enquiry'),
                        value: 'below',
                    },
                    {
                        key: '3',
                        label: __('Above Add to Cart', 'woocommerce-catalog-enquiry'),
                        value: 'below',
                    }
                ],
            }
        ]
    }
