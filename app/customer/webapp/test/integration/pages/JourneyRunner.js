sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"customer/test/integration/pages/CustomersList.gen",
	"customer/test/integration/pages/CustomersObjectPage.gen"
], function (JourneyRunner, CustomersListGenerated, CustomersObjectPageGenerated) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('customer') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersListGenerated: CustomersListGenerated,
			onTheCustomersObjectPageGenerated: CustomersObjectPageGenerated
        },
        async: true
    });

    return runner;
});

