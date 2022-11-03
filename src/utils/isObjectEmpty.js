/**
 * Checker if object is empty.
 * @param {Object} obj Target Object
 * @returns returns whether the Object is empty of not
 */
export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
