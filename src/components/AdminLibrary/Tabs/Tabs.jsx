import { Link } from 'react-router-dom';
import '../../../assets/images/Brand.png';
import '../../../assets/images/Brand-small.png';
import "./tabs.scss";

const Tabs = ( props ) => {
    const { tabData, currentTab, getForm, prepareUrl, HeaderSection, BannerSection } = props;
    
    // Get the description of the current tab.
    const getTabDescription = () => {
        return tabData.map( ( tab ) => {
            return  tab.id === currentTab &&
                <div className="mvx-tab-description-start">
                    <div className="mvx-tab-name">{ tab.name }</div>
                    <p>{ tab.desc }</p>
                </div>
        });
    }
    
    return (
        <>
            <div className={` mvx-general-wrapper mvx-${ props.queryName } `}>
                { HeaderSection && <HeaderSection />}
                <div className="mvx-container">
                
                { BannerSection && <BannerSection />}

                    <div
                        className={ `mvx-middle-container-wrapper ${
                            props.horizontally
                                ? 'mvx-horizontal-tabs'
                                : 'mvx-vertical-tabs'
                        }`}
                    > 
                        <div className="mvx-middle-child-container">
                            <div className="mvx-current-tab-lists">
                                <div className='brand'>
                                    <img src="" alt="" />
                                </div>

                                {
                                    tabData.map( ( tab ) => {
                                        return tab.link ? (
                                            <a href={ tab.link }>
                                                { tab.icon && <i className={`mvx-font ${ tab.icon }`}></i> }
                                                { tab.name }
                                            </a>
                                        ) : (
                                            <Link
                                                className={ currentTab === tab.id ? 'active-current-tab' : '' }
                                                to={ prepareUrl( tab.id ) }
                                            >
                                                { tab.icon && <i className={` mvx-font ${ tab.icon } `} ></i> }
                                                { tab.name }
                                                {
                                                    ( appLocalizer.pro_active == 'free' ) && tab.proDependent &&
                                                    <span class="stock-manager-pro-tag">Pro</span>
                                                }
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                            <div className="mvx-tab-content">
                                {/* Render name and description of the current tab */}
                                { getTabDescription() }
                                {/* Render the form from parent component for better controll */}
                                { getForm( currentTab )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tabs;