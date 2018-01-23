define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'pagarme_creditcard',
                component: 'PagarMe_CreditCard/js/view/payment/method-renderer/testpayment'
            }
        );
        return Component.extend({});
    }
);
