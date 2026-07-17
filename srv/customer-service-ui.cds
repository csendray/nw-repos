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
  // Toolbar action on the List Report (toolbar is the default placement)
  { $Type:  'UI.DataFieldForAction',
    Action: 'CustomerService.importCustomers',
    Label:  'Import from Northwind' }
],
    HeaderInfo: {
      TypeName:       'Customer',
      TypeNamePlural: 'Customers',
      Title: { Value: CompanyName }
    }
  }
);