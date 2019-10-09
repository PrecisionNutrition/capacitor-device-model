import Foundation
import Capacitor
import DeviceKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(DeviceModel)
public class DeviceModel: CAPPlugin {
  @objc func getInfo(_ call: CAPPluginCall) {
    let device = Device.current
    let hasNotch = device.isOneOf(Device.allXSeriesDevices + Device.allSimulatorXSeriesDevices)

    call.resolve([
      "hasNotch": hasNotch,
      "isSimulator": device.isSimulator,
      "modelName": device.description,
      "platform": "ios"
    ])
  }
}
