namespace my.northwind;
using { managed } from '@sap/cds/common';

entity Customers : managed {
  key CustomerID   : String(5);
      CompanyName  : String(40);
      ContactName  : String(30);
      ContactTitle : String(30);
      City         : String(15);
      Country      : String(15);
      Phone        : String(24);
}