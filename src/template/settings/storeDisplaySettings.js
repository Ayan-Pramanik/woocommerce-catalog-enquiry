import { __ } from '@wordpress/i18n';

export default {
        id:'storeDisplay',
        priority: 1,
        name: __('Store Display Settings', 'woocommerce-catalog-enquiry'),
        desc: __('Configure basic store display settings to operate your catalog marketplace.', 'woocommerce-catalog-enquiry'),
        icon: 'icon-general-tab',
        submenu: 'settings',
        submitUrl: 'save_enquiry',
        proDependent: true,
        modal: [
            {
                key: 'woocommerce_catalog_enquiry_product_gallery_page_setting',
                type: 'blocktext',
                label: __('no_label', 'woocommerce-catalog-enquiry'),
                blocktext: __('Product Gallery Page (Shop, Categoty etc)', 'woocommerce-catalog-enquiry'),
            },
            // {
            //     key: 'woocommerce_userroles_list',
            //     type: 'multi-select',
            //     label: __('User Role Specific Exclusion', 'woocommerce-catalog-enquiry'),
            //     desc: __('Select the user roles, who won’t be able to send enquiry.', 'woocommerce-catalog-enquiry'),
            //     // options: appLocalizer.all_roles,
            // },
            {
                key: 'woocommerce_catalog_enquiry_product_gallery_page_setting',
                type: 'blocktext',
                label: __('no_label', 'woocommerce-catalog-enquiry'),
                blocktext: __('Product Page', 'woocommerce-catalog-enquiry'),
            },
            // {
            //     key: 'woocommerce_userroles_list',
            //     type: 'multi-select',
            //     label: __('User Role Specific Exclusion', 'woocommerce-catalog-enquiry'),
            //     desc: __('Select the user roles, who won’t be able to send enquiry.', 'woocommerce-catalog-enquiry'),
            //     // options: appLocalizer.all_roles,
            // }
        ]
    }
