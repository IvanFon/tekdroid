# tekdroid

A teknik.io uploader for Android.

## Download

Get it from the [latest release](https://github.com/IvanFon/tekdroid/releases/latest).

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

### TODO

- Switch to a file picker instead of an image picker
  - You can still choose any file through a file browser like Amaze, but Android's default file browser restricts you to images
- URL shortener support
- Pastebin support
- Settings
  - genDeletionKey
  - Import/Export
  - etc
- Proper asset scaling
