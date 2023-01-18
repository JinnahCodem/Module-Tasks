/*
 * Copyright (c) 2022-2023 ReCodem Pvt Ltd All rights reserved
 */
define([
    'jquery',
    'mage/utils/wrapper'

], function ($, wrapper) {
    'use strict';

    return function (setPaymentInformationExtendedAction) {
        return wrapper.wrap(setPaymentInformationExtendedAction, function (originalAction, messageContainer, paymentData, skipBilling) {
            if (paymentData['extension_attributes'] === undefined) {
                paymentData['extension_attributes'] = {};
            }

            paymentData['extension_attributes']['payment_type'] = $('.payment-method._active #payment_type').val();
            paymentData['extension_attributes']['payment_comment'] = $('.payment-method._active #payment_comment').val();
            return originalAction(messageContainer, paymentData, skipBilling);
        });
    };
});
