module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '\\.(jpg|jpeg|png|gif)$': 'jest-transform-stub',
    '\\.(css|less)$': 'jest-transform-stub'
  },
  setupFiles: ['<rootDir>/test/setup.js'],
  testMatch: ["**/test/**/*spec.js"]
}
