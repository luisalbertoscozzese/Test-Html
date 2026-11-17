const mockData = {
  referenceDate: new Date(2026, 10, 17),
  billing: [
    { date: new Date(2026, 4, 12), sales: 48200, purchases: 27600 },
    { date: new Date(2026, 5, 12), sales: 53600, purchases: 30200 },
    { date: new Date(2026, 6, 12), sales: 49800, purchases: 29400 },
    { date: new Date(2026, 7, 12), sales: 57100, purchases: 31800 },
    { date: new Date(2026, 8, 12), sales: 62400, purchases: 34600 },
    { date: new Date(2026, 9, 12), sales: 68200, purchases: 38200 },
    { date: new Date(2026, 10, 5), sales: 54659.75, purchases: 22300.80 },
    { date: new Date(2026, 10, 17), sales: 18760.50, purchases: 6150.00 }
  ],
  pending: [
    { date: new Date(2026, 10, 17), collections: 7450.75, payments: 4320.40 },
    { date: new Date(2026, 10, 19), collections: 5000, payments: 4000 }
  ],
  orders: [
    { Nombre: 'Comercial Ejemplo', PoblacionEntrega: 'Madrid', ProvinciaEntrega: 'Madrid', Pedido: 'PED-1001', FechaPedido: new Date(2026, 10, 2), FechaEntrega: new Date(2026, 10, 10) },
    { Nombre: 'Distribuciones Norte', PoblacionEntrega: 'Bilbao', ProvinciaEntrega: 'Bizkaia', Pedido: 'PED-1002', FechaPedido: new Date(2026, 10, 5), FechaEntrega: new Date(2026, 10, 13) },
    { Nombre: 'Servicios del Sur', PoblacionEntrega: 'Sevilla', ProvinciaEntrega: 'Sevilla', Pedido: 'PED-1003', FechaPedido: new Date(2026, 10, 9), FechaEntrega: new Date(2026, 10, 16) },
    { Nombre: 'Almacenes Centro', PoblacionEntrega: 'Toledo', ProvinciaEntrega: 'Toledo', Pedido: 'PED-1004', FechaPedido: new Date(2026, 10, 8), FechaEntrega: new Date(2026, 10, 17) },
    { Nombre: 'Suministros Levante', PoblacionEntrega: 'Valencia', ProvinciaEntrega: 'Valencia', Pedido: 'PED-1005', FechaPedido: new Date(2026, 10, 10), FechaEntrega: new Date(2026, 10, 18) },
    { Nombre: 'Mercados del Ebro', PoblacionEntrega: 'Zaragoza', ProvinciaEntrega: 'Zaragoza', Pedido: 'PED-1006', FechaPedido: new Date(2026, 10, 11), FechaEntrega: new Date(2026, 10, 19) },
    { Nombre: 'Comercial Atlántico', PoblacionEntrega: 'Vigo', ProvinciaEntrega: 'Pontevedra', Pedido: 'PED-1007', FechaPedido: new Date(2026, 10, 12), FechaEntrega: new Date(2026, 10, 20) },
    { Nombre: 'Distribuciones Mediterráneo', PoblacionEntrega: 'Barcelona', ProvinciaEntrega: 'Barcelona', Pedido: 'PED-1008', FechaPedido: new Date(2026, 10, 13), FechaEntrega: new Date(2026, 10, 23) }
  ]
};

const startOfWeek = new Date(mockData.referenceDate);
startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() + 6) % 7);
const endOfWeek = new Date(startOfWeek);
endOfWeek.setDate(endOfWeek.getDate() + 7);

function isInReferenceWeek(date) {
  return date >= startOfWeek && date < endOfWeek;
}

function isInReferenceMonth(date) {
  return date.getFullYear() === mockData.referenceDate.getFullYear()
    && date.getMonth() === mockData.referenceDate.getMonth();
}

function totalFor(records, field, filter) {
  return records.filter(record => filter(record.date))
    .reduce((total, record) => total + record[field], 0);
}

const billingByMonth = [];
mockData.billing.forEach(record => {
  const month = record.date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  let summary = billingByMonth.find(item => item.month === month);
  if (!summary) {
    summary = { month, sales: 0, purchases: 0 };
    billingByMonth.push(summary);
  }
  summary.sales += record.sales;
  summary.purchases += record.purchases;
});
