import React from 'react';
import * as testingLibrary from '@testing-library/react-native';
import PersonalScreen from '../../screens/PersonalScreen'; // Asegúrate de que la ruta sea correcta
import renderer from "react-test-renderer";
// Mock para useApi
jest.mock('../../hooks/useApi/useApi', () => {
  return jest.fn(() => [null, null, jest.fn()]);
});

describe('PersonalScreen', () => {
  it('renders PersonalScreen component', async () => {
    const { getByText, queryByText } = testingLibrary.render(<PersonalScreen navigation={{ navigate: jest.fn() }});

    // Simula una respuesta de API (aquí puedes usar act para simular una actualización del estado)
    testingLibrary.act(() => {
      global.handleRequest('GET', '/obtainTrabajadores'); 
    });

    // Espera a que los trabajadores se carguen
    await testingLibrary.waitFor(() => {
      expect(getByText('Personal')).toBeTruthy(); 
      expect(queryByText('Error al obtener los trabajadores:')).toBeNull(); 
    });
  });
});
