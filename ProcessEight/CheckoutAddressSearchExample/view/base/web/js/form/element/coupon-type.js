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

/**
 * @todo Remove unnecessary logic
 */

define([
    'underscore',
    'uiRegistry',
    'Magento_Ui/js/form/element/select'
], function (_, uiRegistry, select) {
    'use strict';

    return select.extend({

        /**
         * Hide fields on coupon tab
         */
        onUpdate: function () {

            /* eslint-disable eqeqeq */
            if (this.value() !== this.displayOnlyForCouponType) {
                uiRegistry.get('sales_rule_form.sales_rule_form.rule_information.use_auto_generation').checked(false);
            }

            this.enableDisableFields();
        },

        /**
         * Enable/disable fields on Coupons tab
         */
        enableDisableFields: function () {
            var selector,
                isUseAutoGenerationChecked,
                couponType,
                disableAuto;

            selector = '[id=sales-rule-form-tab-coupons] input, [id=sales-rule-form-tab-coupons] select, ' +
                '[id=sales-rule-form-tab-coupons] button';
            isUseAutoGenerationChecked = uiRegistry
                .get('sales_rule_form.sales_rule_form.rule_information.use_auto_generation')
                .checked();
            couponType = uiRegistry
                .get('sales_rule_form.sales_rule_form.rule_information.coupon_type')
                .value();
            disableAuto = couponType === 3 || isUseAutoGenerationChecked;
            _.each(
                document.querySelectorAll(selector),
                function (element) {
                    element.disabled = !disableAuto;
                }
            );
        }
    });
});
