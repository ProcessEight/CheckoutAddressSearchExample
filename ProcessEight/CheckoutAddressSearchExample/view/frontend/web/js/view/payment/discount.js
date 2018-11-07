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
    'jquery',
    'ko',
    'uiComponent',
    'Magento_Checkout/js/model/quote',
    'ProcessEight_CheckoutAddressSearchExample/js/action/set-coupon-code'
], function ($, ko, Component, quote, setCouponCodeAction) {
    'use strict';

    var totals = quote.getTotals(),
        couponCode = ko.observable(null),
        isApplied;

    if (totals()) {
        couponCode(totals()['coupon_code']);
    }
    isApplied = ko.observable(couponCode() != null);

    return Component.extend({
        defaults: {
            template: 'ProcessEight_CheckoutAddressSearchExample/payment/discount'
        },
        couponCode: couponCode,

        /**
         * Applied flag
         */
        isApplied: isApplied,

        /**
         * Coupon code application procedure
         */
        apply: function () {
            if (this.validate()) {
                setCouponCodeAction(couponCode(), isApplied);
            }
        },

        /**
         * Coupon form validation
         *
         * @returns {Boolean}
         */
        validate: function () {
            var form = '#discount-form';

            return $(form).validation() && $(form).validation('isValid');
        }
    });
});
