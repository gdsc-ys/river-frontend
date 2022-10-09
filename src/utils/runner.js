/**
 * Run external scripts with proper host
 * @param {string} url external script url
 */
export const run = async (url) => {
  try {
    const response = await fetch(url, { method: 'GET' });
    const raw = await response.text();

    // HARD-CODED
    const script = raw
      .replace(/static-files/g, 'http://yscec.site:80/static-files')
      .replace(/ajax-api/g, 'http://yscec.site:80/ajax-api')
      .replace(/get-artifact/g, 'http://yscec.site:80/get-artifact');

    // eslint-disable-next-line no-new-func
    const runner = new Function(script);

    return runner();
  } catch (error) {
    console.error(error);
  }
};
