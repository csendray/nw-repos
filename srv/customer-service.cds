using { my.northwind as db } from '../db/schema';



service CustomerService @(path: '/customer') {

  @readonly
  entity Customers as projection on db.Customers;

  function importCustomers() returns { imported : Integer };   // was: action
}