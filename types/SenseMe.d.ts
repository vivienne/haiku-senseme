import { nextTick } from 'process';
import dgram from 'dgram';

import constants from './constants';

export { single as default };
declare let single: SenseMe;
/**
 * Discover and manage SenseME-enabled devices on the local network.
 */
declare class SenseMe extends EventEmitter {
    constructor(...args: any[]);
    /**
     * Process one discovered device.  This will handle
     * tracking of devices in case they eventually disappear,
     * and in the case of a previously unknown device will
     * emit a "founddevice" event.
     * @private
     * @param {Object} opts
     * @param {string} opts.name - The advertised name of the new device
     * @param {string} opts.id   - The MAC address of the new device
     * @param {string} opts.type - The type of the new device, such as `FAN,HAIKU,HSERIES`
     * @param {string} opts.ip   - The IP address of the new device
     * @emits SenseMe#founddevice
     */
    private _handleDeviceFound;
    /**
     * Process one incoming message from a remote device.
     * @param {string} name - The name of the remote device
     * @param {string} msg - The actual message
     * @private
     */
    private _handleMessage;
    setConfig(value: any): SenseMe;
    /**
     * Get a list of all currently known devices.
     * @returns {Array<Device>}
     */
    getAllDevices(): Array<Device>;
    /**
     * Get one discovered device by its ID (usually MAC address).
     * @param {string} id - The ID of the requested device.
     * @returns {Device}
     */
    getDeviceById(id: string): Device;
    /**
     * Get one discovered device by its name.
     * @param {string} name - The name of the requested device.
     * @returns {Device}
     */
    getDeviceByName(name: string): Device;
    /**
     * Begin discovery of all SenseME devices on the local network.
     * Discovery will continue until {@link cancelDiscovery} is called.
     * @param {number} [interval=10000] - How often (in milliseconds) should a discovery request be sent out?
     * @param {number} [missingThreshold=3] - How many discovery requests must a device miss before being considered no longer on the network?
     * @emits SenseMe#lostdevice
     */
    discover(interval?: number, missingThreshold?: number): void;
    _discoveryInterval: number;
    /**
     * Cancel an ongoing discovery session.
     */
    cancelDiscovery(): void;
}
import { EventEmitter } from 'events';
import Device from "./Device";
