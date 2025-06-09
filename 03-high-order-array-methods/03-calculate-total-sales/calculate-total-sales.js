function calculateTotalSalesWithTax(sales, taxRate) {
  return sales.reduce((subtotal, sale) => {
    return subtotal + (sale.quantity * sale.price)
  }, 0) * (1 + (taxRate * .01));
}

module.exports = calculateTotalSalesWithTax;
