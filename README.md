# capacitor-device-model

The Capacitor Device Model plugin is a plugin for capacitor applications that wraps DeviceKit to give access to more device information than standard Device plugin.

## Use

```bash
npm install @precision-nutrition/capacitor-device-model
npx cap sync
```

## Dev

See the docs on [Capacitor Plugins](https://capacitor.ionicframework.com/docs/plugins) for the general concept.

### Setup

```bash
npm install
```

### iOS

```bash
cd ios
pod install
```

### Android

Open ./android in Android Studio or `./android/gradlew`.

## Release

1. Do work
2. Commit work and push
3. Update version number in package.json
4. `npm install` to bump package-lock.json
5. `git commit -am "<VERSION_NUMBER>"`
6. `git tag <VERSION_NUMBER>`
7. `git push --tags`

Pushing a tag will trigger an `npm publish` via Github Actions.

Note that you can also create a Release on Github to do tagging. This is handy when tagging release candidates because you can mark the release as "Pre-release Software".

You can also just `npm publish` if Github Actions is not cooporating.
