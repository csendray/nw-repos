using { CustomerService } from './customer-service';

annotate CustomerService.Customers with @(
  UI: {
    SelectionFields: [ Country, City ],
    LineItem: [
      { Value: CustomerID,   Label: 'Customer ID' },
      { Value: CompanyName,  Label: 'Company'     },
      { Value: ContactName,  Label: 'Contact'     },
      { Value: City,         Label: 'City'        },
      { Value: Country,      Label: 'Country'     },
      { Value: Phone,        Label: 'Phone'       },
      // Toolbar action on the List Report. Unbound action -> EntityContainer path.
      { $Type:  'UI.DataFieldForAction',
        Action: 'CustomerService.EntityContainer/importCustomers',
        Label:  'Import from Northwind' }
    ],
    HeaderInfo: {
      TypeName:       'Customer',
      TypeNamePlural: 'Customers',
      Title: { Value: CompanyName }
    }
  }
);

// Refresh the Customers list automatically after the (unbound) import action runs.
annotate CustomerService with actions {
  importCustomers @(
    Common.SideEffects: {
      TargetEntities: [ '/CustomerService.EntityContainer/Customers' ]
    }
  );
};
