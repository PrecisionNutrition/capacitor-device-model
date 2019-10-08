import { WebPlugin } from '@capacitor/core';
import { DeviceModelPlugin } from './definitions';

export class DeviceModelWeb extends WebPlugin implements DeviceModelPlugin {
  constructor() {
    super({
      name: 'DeviceModel',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const DeviceModel = new DeviceModelWeb();

export { DeviceModel };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DeviceModel);
