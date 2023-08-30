import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';

import AppNavigator from '../AppNavigator';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Use this instead with React Native >= 0.64
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    render(component);

    const header = await screen.findByText('List of numbers from 1 to 20');
    const items = await screen.findAllByText(/Item number/);

    expect(header).toBeOnTheScreen();
    expect(items.length).toBe(10);
  });

  test('clicking on one item takes you to the details screen', async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    render(component);
    const toClick = await screen.findByText('Item number 5');

    fireEvent(toClick, 'press');
    const newHeader = await screen.findByText('Showing details for 5');
    const newBody = await screen.findByText('the number you have chosen is 5');

    expect(newHeader).toBeOnTheScreen();
    expect(newBody).toBeOnTheScreen();
  });
});