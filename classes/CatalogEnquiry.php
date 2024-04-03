<?php

namespace CatalogEnquiry;
defined( 'ABSPATH' ) || exit;
use \Automattic\WooCommerce\Utilities\FeaturesUtil;

class CatalogEnquiry {

    private static $instance = null;
    private $container = [];
    private $file;

    /**
     * Class construct
     * @param object $file
     */
    public function __construct( $file ) {
        require_once trailingslashit( dirname( $file ) ) . '/config.php';

        $this->file = $file;
        $this->container[ 'plugin_url' ]    = trailingslashit( plugins_url( '', $plugin = $file ) );
        $this->container[ 'plugin_path' ]   = trailingslashit( dirname( $file ) );
        $this->container[ 'token' ]         = WOOCOMMERCE_CATALOG_ENQUIRY_PLUGIN_TOKEN;
        $this->container[ 'text_domain' ]   = WOOCOMMERCE_CATALOG_ENQUIRY_TEXT_DOMAIN;
        $this->container[ 'version' ]       = WOOCOMMERCE_CATALOG_ENQUIRY_PLUGIN_VERSION;

		// default general setting
		$this->container[ 'options_general_settings' ] = get_option('mvx_catalog_general_tab_settings');	
		// from_setting
		$this->container[ 'options_form_settings' ] = get_option('mvx_catalog_enquiry_form_tab_settings');
		// exclusion setting
		$this->container[ 'options_exclusion_settings' ] = get_option('mvx_catalog_exclusion_tab_settings');
		// button appearence
		$this->container[ 'options_button_appearence_settings' ] = get_option('mvx_catalog_button_appearance_tab_settings');
        // Activation Hooks
        register_activation_hook( $file, [ $this, 'activate' ] );
        // Deactivation Hooks
        register_deactivation_hook( $file, [ $this, 'deactivate' ] );
        
        add_filter( 'plugin_action_links_' . plugin_basename( $file ), [ $this, 'catelog_enquiry_settings' ] );
        // add_action( 'admin_notices', [ $this, 'database_migration_notice' ] );
        add_filter( 'woocommerce_email_classes', [ $this, 'catalog_enquiry_email_setup' ] );

        add_action( 'before_woocommerce_init', [ $this, 'declare_compatibility' ] );
        add_action( 'woocommerce_loaded', [ $this, 'init_plugin' ] );
        add_action( 'plugins_loaded', [ $this, 'is_woocommerce_loaded' ] );
    }

    /**
	 * Add WC Catalog Email
	 *
	 * @param emails     default email classes
	 * @return modified email classes
	 */ 
	function catalog_enquiry_email_setup( $emails ) {
		require_once( 'emails/Emails.php' );
		$emails['Woocommerce_Catalog_Enquiry_Email'] = new Emails();		
		return $emails;
	}

    public function activate() {
        register_activation_hook($this->file, ['Utill', 'migration_from_previous']);
    }

    public function deactivate() {
        // register_activation_hook(__FILE__, 'migration_from_previous');
    }

    /**
     * Add High Performance Order Storage Support
     * @return void
     */
    public function declare_compatibility() {
        FeaturesUtil::declare_compatibility ( 'custom_order_tables', plugin_basename( $this->file ), true );  
    }

    public function init_plugin () {
        $this->load_plugin_textdomain();
        $this->init_classes();
    }

    /**
   * Load Localisation files.
   *
   * Note: the first-loaded translation file overrides any following ones if the same translation is present
   *
   * @access public
   * @return void
   */
  	public function load_plugin_textdomain() {
		$locale = is_admin() && function_exists('get_user_locale') ? get_user_locale() : get_locale();
		$locale = apply_filters('woocommerce_catalog_enquiry_plugin_locale', $locale, 'woocommerce-catalog-enquiry');
		load_textdomain('woocommerce-catalog-enquiry', WP_LANG_DIR . '/woocommerce-catalog-enquiry/woocommerce-catalog-enquiry-' . $locale . '.mo');
		load_plugin_textdomain('woocommerce-catalog-enquiry', false, plugin_basename(dirname(dirname($this->file))) . '/languages');
  	}
    

      /**
     * Set the stoct Manager settings in plugin activation page.
     * @param mixed $links
     * @return array
     */
    public static function catelog_enquiry_settings( $links ) {	
        $plugin_links = [
            '<a href="' . admin_url( 'admin.php?page=catalog#&tab=settings&subtab=general' ) . '">' . __( 'Settings', WOOCOMMERCE_CATALOG_ENQUIRY_TEXT_DOMAIN ) . '</a>',
            '<a href="https://multivendorx.com/support-forum/forum/wcmp-catalog-enquiry/">' . __( 'Support', WOOCOMMERCE_CATALOG_ENQUIRY_TEXT_DOMAIN ) . '</a>',			
        ];
        $links = array_merge( $plugin_links, $links );
        if ( apply_filters( 'woocommerce_catalog_enquiry_free_active', true ) ) {
            $links[] = '<a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/" target="_blank">' . __( 'Upgrade to Pro', WOOCOMMERCE_CATALOG_ENQUIRY_TEXT_DOMAIN ) . '</a>';
        }
        return $links;
    }

    /**
     * Init all CatalogEnquiry classess.
     * Access this classes using magic method.
     * @return void
     */
    public function init_classes() {
        $this->container[ 'admin' ]  = new Admin();
        $this->container[ 'ajax' ]   = new Ajax();
        $this->container[ 'frontend' ]   = new Frontend();
        $this->container[ 'restapi' ]   = new RestAPI();
        $this->container[ 'template' ]   = new Template();
        $this->container[ 'utill']       = new Utill();
    }
    /**
     * Take action based on if woocommerce is not loaded
     * @return void
     */
    public function is_woocommerce_loaded() {
        if ( did_action( 'woocommerce_loaded' ) || ! is_admin() ) {
            return;
        }
        add_action( 'admin_notices',[ $this, 'catalog_enquiry_alert_notice' ]);
    }
    function catalog_enquiry_alert_notice() {
        ?>
        <div id="message" class="error">
            <p><?php printf( __( '%sWoocommerce Catalog Enquiry is inactive.%s The %sWooCommerce plugin%s must be active for the Woocommerce Catalog Enquiry to work. Please %sinstall & activate WooCommerce%s', WOOCOMMERCE_CATALOG_ENQUIRY_TEXT_DOMAIN ), '<strong>', '</strong>', '<a target="_blank" href="http://wordpress.org/extend/plugins/woocommerce/">', '</a>', '<a href="' . admin_url( 'plugins.php' ) . '">', '&nbsp;&raquo;</a>' ); ?></p>
        </div>
        <?php
     }

    /**
     * Magic getter function to get the reference of class.
     * Accept class name, If valid return reference, else Wp_Error. 
     * @param   mixed $class
     * @return  object | \WP_Error
     */
    public function __get( $class ) {
        if ( array_key_exists( $class, $this->container ) ) {
            return $this->container[ $class ];
        } 
        return new \WP_Error( sprintf( 'Call to unknown class %s.', $class ) );
    }

    /**
     * Initializes the CatalogEnquiry class.
     * Checks for an existing instance
     * And if it doesn't find one, create it.
     * @param mixed $file
     * @return object | null
     */
    public static function init( $file ) {
        if ( self::$instance === null ) {
            self::$instance = new self( $file );
        }
        return self::$instance;
    }
}
