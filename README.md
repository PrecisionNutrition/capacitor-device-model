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

Open ./android in Android Studio or `./android/gradlew`.

## Release

1. Do work
2. Commit work and push
3. Update versions in PrecisionNutritionCapacitorDeviceModel.podspec and package.json to the same version
3. `npm install` to bump package-lock.json
4. `git commit -am "<VERSION_NUMBER>"`
5. `git tag <VERSION_NUMBER>`
6. `git push --tags`

Pushing a tag will trigger an `npm publish` via Github Actions.

Note that you can also create a Release on Github to do tagging. This is handy when tagging release candidates because you can mark the release as "Pre-release Software".

You can also just `npm publish` if Github Actions is not cooporating.

Finally update the Spec in our CocoaPodsSpecs repo as described below.

## CocoaPods Specs

You'll need to create your first tag to start because of [this issue](https://stackoverflow.com/questions/37038659/issue-when-creating-my-first-cocoapod)

    git tag v0.0.1
    git push --tags

### Setup

    pod repo add PrecisionNutrition-CocoaPodsSpecs https://github.com/PrecisionNutrition/CocoaPodsSpecs

Did it work?

    cd ~/.cocoapods/repos/PrecisionNutrition-CocoaPodsSpecs
    pod repo lint .

### Updating

The podspec is linted and push to our [CocoaPodsSpecs repo](https://github.com/PrecisionNutrition/CocoaPodsSpecs) so it can be installed via pods without a full path.

Use the scripts:

    npm run spec:lint
    npm run spec:push

Warnings will prevent a push and there are some warnings that currently are unable to resolve. Feel free to fix!
