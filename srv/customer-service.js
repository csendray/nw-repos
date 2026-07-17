const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  this.on('importCustomers', async () => {
    const northwind = await cds.connect.to('Northwind');
    const db = await cds.connect.to('db');
    const { Customers: Remote } = northwind.entities;

    const pageSize = 20;
    let skip = 0, all = [], page;
    do {
      page = await northwind.run(
        SELECT.from(Remote)
          .columns('CustomerID','CompanyName','ContactName','ContactTitle','City','Country','Phone')
          .limit(pageSize, skip)
      );
      all = all.concat(page);
      skip += pageSize;
    } while (page.length === pageSize);

    await db.run(UPSERT.into('my.northwind.Customers').entries(all));
    return { imported: all.length };
  });
});