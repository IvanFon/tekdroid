# tekdroid

A teknik.io uploader for Android.

## Screenshots

| ![](https://user-images.githubusercontent.com/1174413/59154789-2bf2a700-8a6a-11e9-9d93-8a60989496af.png) | ![](https://user-images.githubusercontent.com/1174413/59154792-32811e80-8a6a-11e9-855d-7ffbd01eb885.png) | ![](https://user-images.githubusercontent.com/1174413/59154793-34e37880-8a6a-11e9-8963-98dd0a4208f1.png) |
| --- | --- | --- |

## Download

[Click here to download the latest APK](https://github.com/IvanFon/tekdroid/releases/download/v0.1.1/tekdroid-0.1.1.apk).

**Note: if the app crashes when you launch it, you may have to manually give it storage permission in the Android settings:**
1. Open Android `Settings`.
2. Go to `Apps` (may be under a different name depending on your device).
3. Find `tekdroid`.
4. Tap on `Permissions`.
5. Enable `Storage`.
6. Try launching the app again, it should work this time.

Changelogs and more are available from the [Github releases](https://github.com/IvanFon/tekdroid/releases).

## Development

### Usage

``` bash
# Install dependencies
yarn install

# Build for production
yarn run build:android

# Build, watch for changes and debug the application
yarn run debug:android

# Build, watch for changes and run the application
yarn run watch:android

# Clean the NativeScript application instance (i.e. rm -rf dist)
yarn run clean
```
