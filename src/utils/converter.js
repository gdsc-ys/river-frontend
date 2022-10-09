/**
 * Add protocol (http, ...) to URL
 * @param {string} target URL w/o protocol
 */
export const addProtocol = (target, protocol) => {
  const result = `${protocol}://${target}`;

  return result;
};

/**
 * Remove protocol (http, ...) from URL
 * @param {string} target URL w/ protocol
 */
export const removeProtocol = (target) => {
  const result = target.replace(/.*:\/\//, '');

  return result;
};
