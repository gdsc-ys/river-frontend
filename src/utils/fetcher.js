import { API_HOST } from '@data/urls';
import { filterUndefinedValue } from '@utils/filterUndefinedValue';

/**
 * Request GET
 * @param {string} url Endpoint
 * @returns {Promise<any>} Response data
 */
export const get = async (url) => {
  const response = await fetch(`${API_HOST}${url}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return response.json();
};

/**
 * Request POST
 * @param {string} url Endpoint
 * @param {any} data Data
 * @returns {Promise<any>} Response data
 */
export const post = async (url, data) => {
  const response = await fetch(`${API_HOST}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filterUndefinedValue(data)),
  });

  return response.json();
};

/**
 * Request PATCH
 * @param {string} url Endpoint
 * @param {any} data Data
 * @returns {Promise<any>} Response data
 */
export const patch = async (url, data) => {
  const response = await fetch(`${API_HOST}${url}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filterUndefinedValue(data)),
  });

  return response.json();
};

/**
 * Request DELETE
 * @param {string} url Endpoint
 * @returns {Promise<any>} Response data
 */
export const remove = async (url, data) => {
  const response = await fetch(`${API_HOST}${url}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filterUndefinedValue(data)),
  });

  return response.json();
};
