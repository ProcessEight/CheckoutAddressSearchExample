/**
 * @todo Override module-checkout/view/frontend/web/js/view/shipping-address/list.js with this
 */

define([
    'underscore',
    'ko',
    'mageUtils',
    'uiComponent',
    'uiLayout',
    'Magento_Customer/js/model/address-list'
], function (_, ko, utils, Component, layout, addressList) {
    'use strict';

    var mixin = {

        /** @inheritdoc */
        initialize: function () {
            this._super()
                .initChildren();

            addressList.subscribe(function (changes) {
                    var self = this;

                    changes.forEach(function (change) {
                        if (change.status === 'added') {
                            self.createRendererComponent(change.value, change.index);
                        }
                        if (change.status === 'deleted') {
                            self.removeRendererComponent(change.value, change.index);
                        }
                    });
                },
                this,
                'arrayChange'
            );

            return this;
        },

        /** @inheritdoc */
        initConfig: function () {
            this._super();
            // the list of child components that are responsible for address rendering
            this.rendererComponents = [];

            this.postcode = null;

            return this;
        },

        filterAddresses: function (postcode) {
            // Clear out addresses
            this.rendererComponents = [];
            // Criteria to filter by
            this.postcode = postcode;
            // Generate filtered array of addresses
            _.each(addressList(), this.matchAddresses, this);

            return this;
        },

        matchAddresses: function (address) {
            _.find(addressList(), function (value) {
                // if (this.postcode != value.postcode) {
                    value.disposeSubscriptions();
                    value.destroy();
                // }
            });
        },

        removeRendererComponent: function (address, index) {
            this.rendererComponents[index] = null;
        },

    };

    return function (target) {
        return target.extend(mixin);
    };
});
