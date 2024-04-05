import { __ } from '@wordpress/i18n';

export default {
        id:'quote',
        priority: 4,
        name: __('Quote', 'woocommerce-catalog-enquiry'),
        desc: __('Configure basic store display settings to operate your catalog marketplace.', 'woocommerce-catalog-enquiry'),
        icon: 'icon-general-tab',
        submenu: 'settings',
        submitUrl: 'save_enquiry',
        proDependent: false,
        modal: [
            {
                key: 'woocommerce_catalog_enquiry_general_settings',
                type: 'blocktext',
                label: __('no_label', 'woocommerce-catalog-enquiry'),
                blocktext: __('Common Settings', 'woocommerce-catalog-enquiry'),
            },
            {
                key: 'is_enable',
                label: __('Catalog Mode', 'woocommerce-catalog-enquiry'),
                class: 'mvx-toggle-checkbox',
                type: 'checkbox',
                options: [
                    {
                        key: 'is_enable',
                        label: appLocalizer.catalog_mode_label,
                        value: 'is_enable'
                    },
                ],
            },
        ]
    }
