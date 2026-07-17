const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { Customers } = this.entities;   // local HANA entity

 this.on('importCustomers', async () => {
  const northwind = await cds.connect.to('Northwind');
  const { Customers: Remote } = northwind.entities;
  const { Customers } = this.entities;

  const pageSize = 20;
  let skip = 0;
  let all = [];
  let page;

  do {
    page = await northwind.run(
      SELECT.from(Remote)
        .columns('CustomerID','CompanyName','ContactName','ContactTitle','City','Country','Phone')
        .limit(pageSize, skip)          // $top + $skip
    );
    all = all.concat(page);
    skip += pageSize;
  } while (page.length === pageSize);   // stop when a short/empty page comes back

  await UPSERT.into(Customers).entries(all);
  return { imported: all.length };
});
});