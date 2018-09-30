import os from "os";

/**
 * Gets all non-local, IPv4 IP addresses.
 *
 * Based on https://stackoverflow.com/a/8440736
 *
  * @returns {Array} An array of IP addresses.
 */
export function getAllIPAddresses() {
  const interfaces = os.networkInterfaces();
  let result = [];

  Object.keys(interfaces).forEach((name) => {
    interfaces[name].forEach((iface) => {
      if ("IPv4" == iface.family && !iface.internal) {
        result.push(iface.address);
      }
    });
  });

  return result;
}
