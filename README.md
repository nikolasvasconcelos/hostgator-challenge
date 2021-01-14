# Hostgator Webpage
 Technical Challenge for Hostgator

## About the project

### The project has the following file structure:

* App: Contains the main files of the project
* Assets: Folder containg the needed images
* Components: Where the app's components are developed and properly separated with it's own child components
* Containers: Where the connection bewteen the `Components (view)` and the `Models` happens, passing only the necessary props
* Redux: Folder containing the Redux state container implementation and the API requets
* Themes: Folder for stylesheets and icon libraries.

## The project's development approach:

The `App` index dispatches a request for the lawsuits. Inside the `Redux` folder, the `Sagas` file listens to the dispatched event, makes de API request and dispatches the response to the `Reducer`, which sends the necessary payload back to the app.

When a single lawsuit is selected, the `App` dispatches another event to search for the respective lawsuit data inside the main payload. If it was not loaded before (in case the user opens the lawsuit detail page straightforward), the previous step is done to load the data properly.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app's metro bundler.<br>

### `react-native run-ios`

This command launches the iOS emulator and runs the app in it.

### `emulator @<YOUR_DEVICE_NAME> -dns-server <your.dnvs.server.ip>`

This command launches the Android emulator without opening the Android Studio. It only works if you already have an emulator installed. To verify, run: `avdmanager list avd`

### `react-native run-android`

This command launches the Android version in the emulator.

### Generate an APK

Inside the `android/` folder, run `./gradlew assembleRelease`. An APK will be generated in `android/app/build/outputs/apk/release/`