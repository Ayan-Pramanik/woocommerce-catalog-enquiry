/* global appLocalizer */
import React, { Component } from 'react';

export default function Banner() {
    return (
        <>
        {appLocalizer.pro_active ?
        <div className="mvx-sidebar">
            <div className="mvx-banner-right">
                <div className="mvx-logo-right">
                    <a href="https://multivendorx.com/woocommerce-request-a-quote-product-catalog/">
                        <img
                            src={ appLocalizer.banner_img }
                            alt="right-banner"
                        />
                    </a>
                </div>
            </div>
        </div>
        : '' }
        </>
    );
}