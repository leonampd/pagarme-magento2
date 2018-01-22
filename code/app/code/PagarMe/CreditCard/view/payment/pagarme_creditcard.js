define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component, rendererList) {
        'use strict';
        rendererList.push(
            {
                type: 'pagarme_creditcard',
                component: 'PagarMe_Creditcard/js/view/payment/method-renderer/pagarme_creditcard-method'
            }
        );
        return Component.extend({});
    }
);

