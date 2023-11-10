module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file',
  },
  preset: 'jest-expo',
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  testRunner: 'jest-circus/runner',
  setupFilesAfterEnv: [
    '<rootDir>/jest.env.js',
  ],
  moduleNameMapper: { '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js', '\\.(css|less)$': '<rootDir>/assetsTransformer.js' },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@expo|expo-font|expo-modules-core|expo-asset|expo-constants|expo-file-system|@miblanchard)/)',
  ],
}
