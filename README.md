# capacitor-device-model

The Capacitor Device Model plugin is a plugin for capacitor applications that wraps DeviceKit to give access to more device information than standard Device plugin.

## Dev

See the docs on [Capacitor Plugins](https://capacitor.ionicframework.com/docs/plugins) for the general concept.

### Setup

    npm install

    cd ios 
    pod install

## Release

1. Do work
2. Commit work and push
3. Update versions in CapacitorDeviceModel.podspec and package.json to the same version
3. `npm install` to bump package-lock.json
4. `git commit -am "<VERSION_NUMBER>"`
5. `git tag v<VERSION_NUMBER>`
6. `git push --tags`

Pushing a tag will trigger an `npm publish` via Github Actions.
