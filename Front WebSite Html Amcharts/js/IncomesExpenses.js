const incomesExpenses = {
  PendingChargessOfTheWeek: totalFor(mockData.pending, 'collections', isInReferenceWeek),
  SalesBillingForTheWeek: totalFor(mockData.billing, 'sales', isInReferenceWeek),
  SalesBillsOfTheMonth: totalFor(mockData.billing, 'sales', isInReferenceMonth),
  PendingPaymentsForTheWeek: totalFor(mockData.pending, 'payments', isInReferenceWeek),
  PurchasesBillingForTheWeek: totalFor(mockData.billing, 'purchases', isInReferenceWeek),
  PurchasesBillsOfTheMonth: totalFor(mockData.billing, 'purchases', isInReferenceMonth)
};

Object.entries(incomesExpenses).forEach(([id, total]) => {
  document.getElementById(id).textContent = total.toFixed(2);
});
