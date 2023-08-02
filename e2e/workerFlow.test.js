const { device, element, by } = require('detox');

describe('Navegación entre pantallas', () => {
  beforeEach(async () => {
    // Asegurarse de que la aplicación está abierta antes de cada prueba
    await device.reloadReactNative();
  });

  it('debería navegar desde HomeScreen a DetailScreen', async () => {
    // Verificar que estamos en la pantalla de inicio
    await expect(element(by.text('Esta es la pantalla de inicio'))).toBeVisible();

    // Tocar el botón que nos llevará a DetailScreen
    await element(by.text('Ir a Detalle')).tap();

    // Verificar que hemos navegado correctamente a DetailScreen
    await expect(element(by.text('Esta es la pantalla de detalles'))).toBeVisible();
  });
});
