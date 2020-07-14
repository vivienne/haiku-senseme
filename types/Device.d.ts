import { EventEmitter } from 'events';
import Observable, { hasObservable } from './lib/observable';
import State from './State';
export { Device as default };

/**
 * Represents one device on the local network, such as a fan.
 */
declare class Device {
    /**
     * Create a new device.
     * @param {Object} opts
     * @param {string} opts.name - The advertised name of the new device
     * @param {string} opts.id   - The MAC address of the new device
     * @param {string} opts.type - The type of the new device, such as `FAN,HAIKU,HSERIES`
     * @param {string} opts.ip   - The IP address of the new device
     * @param {EventEmitter} messenger - An EventEmitter for funneling incoming messages from the discovery process.
     */
    constructor({ name, id, type, ip }: {
        name: string;
        id: string;
        type: string;
        ip: string;
    }, messenger?: EventEmitter);
    observeAll: () => any;
    state: State;
    /**
     * Send one or more messages to the device.
     * @param {...string} msgs - The messages to send
     * @private
     */
    _sendMessage(...msgs: string[]): void;
    /**
     * Process one incoming message.
     * @param {string} msg - The message
     * @private
     */
    _handleMessage(msg: string): void;
    /**
     * Disconnect from the device.
     */
    disconnect(): void;
    /**
     * Listen for changes to any of the properties of this device.
     * Changes are delivered as 'change' events emitted by the returned
     * emitter.
     * @returns {EventEmitter}
     */
    listenAll(): EventEmitter;
    /**
     * Request the current values of all known properties from this device.
     * This method only updates the local state; to be informed of the new
     * values, use {@link Device#listenAll}, {@link Device#observeAll}, or the corresponding
     * methods on the individual values of interest.
     */
    refreshAll(): void;
    /**
     * The ID (MAC address) of this device.
     * @type {string}
     * @readonly
     */
    get id(): string;
    /**
     * The IP address of this device.
     * @type {string}
     * @readonly
     */
    get ip(): string;
    /**
     * The name of this device
     * @type {string}
     * @readonly
     */
    get name(): string;
    /**
     * The type of this device, such as `FAN,HAIKU,HSERIES`
     * @type {string}
     * @readonly
     */
    get type(): string;

    /**
     * @name fan
     * @type {FanProperties}
     * @memberof module:Device~Device
     * @readonly
     * @instance
     */
    readonly fan: FanProperties

    /**
     * @name light
     * @type {LightProperties}
     * @memberof module:Device~Device
     * @readonly
     * @instance
     */
    readonly light: LightProperties

    /**
     * @name sensor
     * @type {SensorProperties}
     * @memberof module:Device~Device
     * @readonly
     * @instance
     */
    readonly sensor: SensorProperties

    /**
     * @name smartMode
     * @type {SmartModeProperties}
     * @memberof module:Device~Device
     * @readonly
     * @instance
     */
    readonly smartMode: SmartModeProperties

    /**
     * @name sleepMode
     * @type {SleepModeProperties}
     * @memberof module:Device~Device
     * @readonly
     * @instance
     */
    readonly sleepMode: SleepModeProperties

    /**
     * @name device
     * @type {DeviceProperties}
     * @memberof module:Device~Device
     * @readonly
     * @instance
     */
    device: DeviceProperties

    /**
     * @name network
     * @type {NetworkProperties}
     * @memberof module:Device~Device
     * @readonly
     * @instance
     */
    network: NetworkProperties
}
import {LightProperties, FanProperties, SensorProperties, SmartModeProperties, SleepModeProperties, DeviceProperties, NetworkProperties} from "./property-docs";
