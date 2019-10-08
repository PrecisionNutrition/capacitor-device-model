declare module "@capacitor/core" {
  interface PluginRegistry {
    DeviceModel: DeviceModelPlugin;
  }
}

export interface DeviceModelInfo {
  hasNotch: boolean,
  modelName: string
}

export interface DeviceModelPlugin {
  getInfo(): Promise<DeviceModelInfo>;
}
