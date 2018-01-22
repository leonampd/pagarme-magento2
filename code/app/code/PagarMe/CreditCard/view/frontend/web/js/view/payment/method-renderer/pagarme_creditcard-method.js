define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'PagarMe_Creditcard/payment/pagarme_creditcard'
            },
            getMailingAddress: function () {
                return window.checkoutConfig.payment.checkmo.mailingAddress;
            },
        });
    }
);

