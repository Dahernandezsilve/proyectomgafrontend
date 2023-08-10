module.exports = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
},
 preset: 'jest-expo',
moduleDirectories: ['node_modules', 'src'],
testEnvironment: 'jsdom',
testRunner: 'jest-circus/runner'
};
