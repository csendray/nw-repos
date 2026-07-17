using { my.northwind as db } from '../db/schema';

service CustomerService @(path: '/customer') {

  @readonly
  entity Customers as projection on db.Customers;

  action importCustomers() returns { imported : Integer };
}