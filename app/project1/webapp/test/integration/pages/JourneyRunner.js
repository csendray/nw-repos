sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/CustomersList.gen",
	"project1/test/integration/pages/CustomersObjectPage.gen"
], function (JourneyRunner, CustomersListGenerated, CustomersObjectPageGenerated) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersListGenerated: CustomersListGenerated,
			onTheCustomersObjectPageGenerated: CustomersObjectPageGenerated
        },
        async: true
    });

    return runner;
});

