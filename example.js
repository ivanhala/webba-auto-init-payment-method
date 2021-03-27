function wbk_after_payment_events_set (service, time, name, email, phone, desc, quantity) {
    jQuery('.wbk_payment_button_afterform').trigger('click');
}
