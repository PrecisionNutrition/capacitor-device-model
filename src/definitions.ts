declare module "@capacitor/core" {
  interface PluginRegistry {
    DeviceModel: DeviceModelPlugin;
  }
}

export interface DeviceModelPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
