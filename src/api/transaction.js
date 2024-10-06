import invoices from '../data/invoice';

export const getPendingInvoices = () => {
  return invoices.filter(invoice => invoice.status === 'pending').slice(0, 10);
};

export const searchInvoiceByNumber = (invoiceNumber) => {
  return invoices.find(invoice => invoice.invoiceNumber === invoiceNumber);
};
