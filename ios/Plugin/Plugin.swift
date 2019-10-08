import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(DeviceModel)
public class DeviceModel: CAPPlugin {
  @objc func getInfo(_ call: CAPPluginCall) {
    let modelName: String = UIDevice.current.modelName
    let hasNotch: Bool = false

    call.resolve([
      "hasNotch": hasNotch,
      "modelName": modelName,
      "platform": "ios"
    ])
  }
}
