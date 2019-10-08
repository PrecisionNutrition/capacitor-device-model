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
    // TODO: get name of browser based on ua
    let modelName = window.navigator.userAgent;

    return Promise.resolve({
      hasNotch: false,
      modelName,
      platform: 'web'
    });
  }
}

const DeviceModel = new DeviceModelWeb();

export { DeviceModel };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DeviceModel);
