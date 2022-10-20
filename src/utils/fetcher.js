import { TARGET_SITE } from 'data/urls';

/**
 * Request GET
 * @param {string} url Endpoint
 * @returns {Promise<any>} Response data
 */
export const get = async (url) => {
  const response = await fetch(`${TARGET_SITE}${url}`, {
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
  const response = await fetch(`${TARGET_SITE}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
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
  const response = await fetch(`${TARGET_SITE}${url}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response.json();
};

/**
 * Request DELETE
 * @param {string} url Endpoint
 * @returns {Promise<any>} Response data
 */
export const remove = async (url) => {
  const response = await fetch(`${TARGET_SITE}${url}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  return response.json();
};
