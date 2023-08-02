module.exports = {

    // ... Otras configuraciones de Jest ...
  
    transform: {
      '^.+\\.js$': require.resolve('babel-jest'),
    },
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
    ],

    extensionsToTreatAsEsm: ['.js'],
    testEnvironment: 'node',
  };

  