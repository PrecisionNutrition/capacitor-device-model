import { WebPlugin } from '@capacitor/core';
import { DeviceModelPlugin, DeviceModelInfo } from './definitions';
import { Plugins } from '@capacitor/core'

const { Device } = Plugins;

export class DeviceModelWeb extends WebPlugin implements DeviceModelPlugin {
  constructor() {
    super({
      name: 'DeviceModel',
      platforms: ['web']
    });
  }

  async getInfo(): Promise<DeviceModelInfo> {
    let info = await Device.getInfo();
    let modelName = info.model;

    return Promise.resolve({
      modelName,
      hasNotch: false
    });
  }
}

const DeviceModel = new DeviceModelWeb();

export { DeviceModel };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DeviceModel);
