describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('debería navegar desde ChoiceScreen a LoginWorker', async () => {
    // Verificar que estamos en la pantalla de ChoiceScreen
    expect(findByText('Trabajador')).toBeVisible();

    // Tocar el botón de trabajador que nos llevará a LoginWorker
    await tap(findByLabel('worker-button'));

    // Verificar que hemos navegado correctamente a LoginWorker
    expect(findByText('Código')).toBeVisible();
  });
});
