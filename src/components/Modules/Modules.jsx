import axios from 'axios';
import React,{useState} from 'react';
import { __ } from '@wordpress/i18n';
import moduleData from '../../template/modules/modules';

function Modules() {
    const [ module, setModule ] = useState(moduleData)
    const activateModuleUrl =  `${ appLocalizer.apiUrl }/mvx_catalog/v1/activate_module`
    const handleOnChange = ( event, id ) => {
        let value = event.target.checked
        axios({
            method: "post",
            url: activateModuleUrl,
            headers: { "X-WP-Nonce": appLocalizer.nonce },
            data: { module_id:id , value:event.target.checked }
        })

        setModule((prevData) => {
            return prevData.map(obj => {
                if (obj.id === id) {
                    return { ...obj, 'is_active': value };
                }
                return obj;
            });
        });
    }
  return (
    <div class="mvx-container">
        <div className="mvx-tab-description-start">
            <div className="mvx-tab-name">
                Modules
            </div>
            <p>Customize your marketplace site by enabling the module that you prefer</p>
        </div>
        <div className="mvx-module-option-row">
        { module?.map( (module, index) => (
            <div className="mvx-module-section-options-list">
                <div className={`mvx-module-settings-box ${ module.is_active ? 'active' : '' }`}>
                    <div className="mvx-module-icon">
                        <i className={`mvx-font ${module.thumbnail_dir}`}></i>
                    </div>
                    <header>
                        <div className="mvx-module-list-label-text">
                            { module.name } {module.plan === 'pro' ? <span class="stock-manager-pro-tag">Pro</span> : ''}
                        </div>
                        <p> { module.description } </p>
                    </header>
                        {module.required_plugin_list ? <div className="mvx-module-require-name"> { __('Requires:', 'woocommerce-catalog-enquiry') } </div> : ''}
                    <ul>
                        {module.required_plugin_list &&
                            module.required_plugin_list.map(( required_plugin, index_req ) => (
                                    <li>
                                        {required_plugin.is_active ? (
                                            <div className="mvx-module-active-plugin-class">
                                                <span className="mvx-font icon-yes"></span>
                                            </div>
                                        ) : (
                                            <div className="inactive-plugin-class">
                                                <span className="mvx-font icon-no"></span>
                                            </div>
                                        )}
                                        <a href={ required_plugin.plugin_link } className="mvx-third-party-plugin-link-class">
                                            { required_plugin.plugin_name }
                                        </a>
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className="mvx-module-current-status">
                        {   module.is_active &&
                                module.setting_link
                                ? <a href={ module.setting_link } className="mvx-btn btn-border"> { __('Settings', 'woocommerce-catalog-enquiry') } </a>
                                : ''
                        }
                        {   module.doc_link
                                ? <a target ='_blank' href={ module.doc_link } className="mvx-btn btn-border" >{ __('DOC', 'woocommerce-catalog-enquiry') }</a>
                                : ''
                        }
                        <div className={`mvx-toggle-checkbox-content ${module.plan && module.plan == 'pro' ? 'disabled' : ''}`}>
                            <input
                                type="checkbox"
                                className="mvx-toggle-checkbox"
                                id={`mvx-toggle-switch-${module.id}`}
                                name="modules[]"
                                value={ module.id }
                                checked={ module.is_active ? true : false }                                        
                                onChange={(e) => handleOnChange( e, module.id )}
                            />
                            <label htmlFor={`mvx-toggle-switch-${module.id}`}/>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Modules
