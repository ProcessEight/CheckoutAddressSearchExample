/**
 * ProcessEight
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this module to newer
 * versions in the future. If you wish to customize this module for your
 * needs please contact ProcessEight for more information.
 *
 * @category    CheckoutAddressSearchExample
 * @copyright   Copyright (c) 2017 ProcessEight
 * @author      ProcessEight
 *
 */
define([
    'Magento_Checkout/js/view/shipping-address/list',
    'Magento_Customer/js/model/address-list',
    'ko'
], function (Component, addressList, ko) {
    'use strict';

    return Component.extend({
        /**
         * Init address list
         */
        initObservable: function () {
            this._super();
            this.visible = ko.computed(function () {
                return addressList().length > 0;
            });

            return this;
        }
    });
});
