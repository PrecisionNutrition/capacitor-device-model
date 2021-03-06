import Foundation
import Capacitor
import DeviceKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(DeviceModel)
public class DeviceModel: CAPPlugin {
  @objc func getInfo(_ call: CAPPluginCall) {
    let device = Device.current
    let hasNotch = device.isOneOf(Device.allDevicesWithSensorHousing + Device.allSimulatorDevicesWithSensorHousing)

    call.resolve([
      "hasNotch": hasNotch,
      "isSimulator": device.isSimulator,
      "modelName": device.description,
      "platform": "ios"
    ])
  }
}
