import { __ } from '@wordpress/i18n';

const modules = [
    {
        "id": "catalog",
        "name": "Catalog",
        "description": "Covers the vast majority of any tangible products you may sell or ship i.e books",
        "plan": "free",
        "doc_link": "https://multivendorx.com/docs/knowladgebase/simple-product",
        "parent_category": "Marketplace Types.",
        "is_active": appLocalizer.active_modules.includes('catalog'),
        "thumbnail_dir": "catalog",
        "active_status": false,
        "setting_link":"http://localhost/secure/wp-admin/admin.php?page=mvx#&submenu=settings&name=settings-store-inventory"
    },
    {
        "id": "enquiries",
        "name": "Enquiries",
        "description": "A product with variations, like different SKU, price, stock option, etc.",
        "plan": "free",
        "required_plugin_list": [
            {
                "plugin_name": "MultivendorX Pro",
                "plugin_link": "https://multivendorx.com/pricing",
                "is_active": true
            }
        ],
        "doc_link": "https://multivendorx.com/docs/knowladgebase/variable-product",
        "is_active": appLocalizer.active_modules.includes('enquiries'),
        "thumbnail_dir": "module-variable",
        "active_status": false,
    },
    {
        "id": "quote",
        "name": "Request Quote",
        "description": "Grants vendor the option to  list and describe on admin website but sold elsewhere",
        "plan": "pro",
        // "required_plugin_list": [
        //     {
        //         "plugin_name": "MultivendorX Pro",
        //         "plugin_link": "https://multivendorx.com/pricing",
        //         "is_active": false
        //     }
        // ],
        "doc_link": "https://multivendorx.com/docs/knowledgebase/external-product/",
        "is_active": appLocalizer.active_modules.includes('quote'),
        "thumbnail_dir": "module-external",
        "active_status": false
    },
    {
        "id": "mailchimp",
        "name": "Mailchimp",
        "description": "A cluster of simple related products that can be purchased individually",
        "plan": "free",
        // "required_plugin_list": [
        //     {
        //         "plugin_name": "MultivendorX Pro",
        //         "plugin_link": "https://multivendorx.com/",
        //         "is_active": false
        //     }
        // ],
        "doc_link": "https://multivendorx.com/docs/knowladgebase/grouped-product",
        "is_active": appLocalizer.active_modules.includes('mailchimp'),
        "thumbnail_dir": "module-grouped",
        "active_status": false
    },
    {
        "id": "multivendorx",
        "name": "MultiVendorX",
        "description": "Allow customers to book appointments, make reservations or rent equipment etc",
        "plan": "free",
        // "required_plugin_list": [
        //     {
        //         "plugin_name": "WooCommerce Booking",
        //         "plugin_link": "https://multivendorx.com/docs/knowladgebase/appointment-product/",
        //         "is_active": false
        //     },
        //     {
        //         "plugin_name": "MultivendorX Pro",
        //         "plugin_link": "https://multivendorx.com/",
        //         "is_active": false
        //     }
        // ],
        "doc_link": "https://multivendorx.com/docs/knowladgebase/booking-product",
        "is_active": appLocalizer.active_modules.includes('multivendorx'),
        "thumbnail_dir": "module-booking",
        "active_status": false
    }
]

export default modules;