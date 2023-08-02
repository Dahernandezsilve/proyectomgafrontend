import  React from 'react';
import { render } from '@testing-library/react-native';
import CardGaleraAdmin from '../CardGaleraAdmin';

//const React = require('react');
//const CardGaleraAdmin = require('./CardGaleraAdmin')
//const render = require('@testing-library/react-native')
describe('CardGaleraAdmin component', () => {
  test('renders without errors', () => {
    render(
      <CardGaleraAdmin
        ca="red"
        msgCA="Sample Message: "
        numberCA={42}
        customValues={{ key1: 'Value 1', key2: 'Value 2' }}
        customTitles={['Title 1', 'Title 2']}
        navigateToGaleras={() => {}}
      />
);
});
});