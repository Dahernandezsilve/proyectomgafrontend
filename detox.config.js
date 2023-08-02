module.exports = {
  testRunner: "jest",
  runnerConfig: "e2e/config.json",
  apps: {
    // Configuración para la aplicación Android
    "MGA.android": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
    },
  },
  devices: {
    // Configuración para dispositivos Android
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Nombre del AVD (Android Virtual Device)",
      },
    },
  },
  configurations: {
    android: {
      device: "emulator",
      app: "MGA.android",
    },
  },
};
