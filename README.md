# capacitor-device-model

The Capacitor Device Model plugin is a plugin for capacitor applications that wraps DeviceKit to give access to more device information than standard Device plugin.

## Dev

See the docs on [Capacitor Plugins](https://capacitor.ionicframework.com/docs/plugins) for the general concept.

### Setup

    npm install

### iOS

    cd ios 
    pod install

### Android

TODO: the Android version of this plugin is not yet available

## Release

1. Do work
2. Commit work and push
3. Update versions in CapacitorDeviceModel.podspec and package.json to the same version
3. `npm install` to bump package-lock.json
4. `git commit -am "<VERSION_NUMBER>"`
5. `git tag v<VERSION_NUMBER>`
6. `git push --tags`

Pushing a tag will trigger an `npm publish` via Github Actions.

You can also just `npm publish` if Github Actions is not cooporating.

Finally update the Spec in our CocoaPodsSpecs repo as described below.

## CocoaPods Specs

### Setup

See [Private Pods](https://guides.cocoapods.org/making/private-cocoapods.html) for the basics.

    pod repo add PrecisionNutrition-CocoaPodsSpecs https://github.com/PrecisionNutrition/CocoaPodsSpecs

Did it work?

    cd ~/.cocoapods/repos/PrecisionNutrition-CocoaPodsSpecs
    pod repo lint .

### Updating

Use the scripts:

    yarn spec:lint
    yarn spec:push

or, more directly:

    pod spec lint CapacitorDeviceModel.podspec --allow-warnings
    pod repo push PrecisionNutrition-CocoaPodsSpecs CapacitorDeviceModel.podspec --allow-warnings

Warnings will prevent a push and there are some warnings that currently are unable to resolve. Feel free to fix!
