/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  devices: {
    // Configuración para dispositivos Android
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_3a_API_34_extension_level_7_x86_64", // Nombre del emulador en Android Studio
      },
    },
  },
  apps: {
    "com.dahernandez.proyectomgafrontend": { // Reemplaza "myApp.android" por el bundle ID de tu aplicación en Expo
      build: "eas build -p android --profile preview",
      type: "android.apk", // Cambia el tipo de archivo a android.aab
      binaryPath: "C:/Proyectos/software/proyectomgafrontend/aab/MGAA.apk",      // Esta ruta no es necesaria para Expo
      testBinaryPath: "C:/Proyectos/software/proyectomgafrontend/aab/mga.apk"
    },
  },
  configurations: {
    "android.emulator": {
      build: "expo build:android", // Agrega el comando de construcción de tu proyecto Expo aquí
      device: "emulator",
      app: "com.dahernandez.proyectomgafrontend", // Reemplaza "myApp.android" por el bundle ID de tu aplicación en Expo
    },
  },
};
