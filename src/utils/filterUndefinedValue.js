/**
 * Delete key-value pair if value === undefined
 * @param {Object} obj target object
 * @returns {Object} object that all undefined values are removed.
 */
export const filterUndefinedValue = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });

  return obj;
};
