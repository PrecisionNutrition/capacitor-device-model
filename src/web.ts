import { WebPlugin } from '@capacitor/core';
import { DeviceModelPlugin, DeviceModelInfo } from './definitions';

export class DeviceModelWeb extends WebPlugin implements DeviceModelPlugin {
  constructor() {
    super({
      name: 'DeviceModel',
      platforms: ['web']
    });
  }

  async getInfo(): Promise<DeviceModelInfo> {
    let modelName = window.navigator.userAgent;

    return {
      modelName,
      hasNotch: false
    }
  }
}

const DeviceModel = new DeviceModelWeb();

export { DeviceModel };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DeviceModel);
