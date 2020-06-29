// uncomment if you've installed rxjs
import 'any-observable/register/rxjs-all';

import Observable from './lib/observable';
import { SenseME } from './index';

SenseME.setConfig({ broadcastAddress: undefined })
    .on('founddevice', dev => {
        console.log(`Found a device: ${dev.name} (${dev.ip})`);
    })
    .on('lostdevice', dev => {
        console.log(`Lost a device: ${dev.name} (${dev.ip})`);
    })
    .discover();


// run discovery for 30 seconds
setTimeout(() => {
    SenseME.cancelDiscovery();
    SenseME.getAllDevices().forEach(dev => dev.disconnect());
}, 3000);