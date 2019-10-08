declare module "@capacitor/core" {
  interface PluginRegistry {
    DeviceModel: DeviceModelPlugin;
  }
}

export interface DeviceModelInfo {
  hasNotch: boolean,
  modelName: string,
  platform: 'web' | 'ios' | 'android',
}

export interface DeviceModelPlugin {
  getInfo(): Promise<DeviceModelInfo>;
}
