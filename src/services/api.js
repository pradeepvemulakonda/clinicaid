import client from './client';

export const getCustomer = customerId => client.get(`/${customerId}`);
