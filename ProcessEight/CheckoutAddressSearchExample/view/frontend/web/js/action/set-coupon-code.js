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
 * @todo Verify that this file is not used anymore/referenced anywhere and delete it
 */

/**
 * Customer store credit(balance) application
 */
define([
    'ko',
    'jquery',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/resource-url-manager',
    'Magento_Checkout/js/model/error-processor',
    'ProcessEight_CheckoutAddressSearchExample/js/model/payment/discount-messages',
    'mage/storage',
    'mage/translate',
    'Magento_Checkout/js/model/full-screen-loader'
], function (ko, $, quote, urlManager, errorProcessor, messageContainer, storage, $t,
             fullScreenLoader
) {
    'use strict';

    return function (postcode, isApplied) {

        fullScreenLoader.startLoader();

        console.log(postcode);

        fullScreenLoader.stopLoader();

        // return addressList;

        // var message = $t('Search successful.'),
        //     url = urlManager.getUrl({
        //         'customer': '/checkoutaddresssearchexample/mine/addresses/' + encodeURIComponent(postcode)
        //     }, {});

        //return alert('2221' + window.checkoutConfig.customerData.addresses[0].postcode);

        // return storage.get(
        //     url,
        //     {},
        //     false
        // ).done(function (response) {
        //     if (response) {
        //         fullScreenLoader.stopLoader();
        //         messageContainer.addSuccessMessage({
        //             'message': message
        //         });
        //         $('.shipping-address-items').replaceWith('<!--\n' +
        //             '/**\n' +
        //             ' * Copyright © Magento, Inc. All rights reserved.\n' +
        //             ' * See COPYING.txt for license details.\n' +
        //             ' */\n' +
        //             '-->\n' +
        //             '\n' +
        //             '<!-- ko if: (visible)-->\n' +
        //             '<div style="border: 1px solid blue;">\n' +
        //             '<div class="field addresses">\n' +
        //             '    <div class="control">\n' +
        //             '        <div class="shipping-address-items">\n' +
        //             '            <!-- ko foreach: { data: elems, as: \'element\' } -->\n' +
        //             '            <!-- ko template: element.getTemplate() --><!-- /ko -->\n' +
        //             '            <!-- /ko -->\n' +
        //             '        </div>\n' +
        //             '    </div>\n' +
        //             '</div>\n' +
        //             '</div>\n' +
        //             '<!-- /ko -->\n');
        //         $('.shipping-address-items').trigger('contentUpdated');
        //         if ($.fn.applyBindings != undefined) {
        //             $('.shipping-address-items').applyBindings();
        //         }
        //     }
        // }).fail(function (response) {
        //     fullScreenLoader.stopLoader();
        //     errorProcessor.process(response, messageContainer);
        // });
    };
});
