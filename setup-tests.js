const detox = require('detox')

// Configuración de Enzyme
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

// Configuración adicional de Detox (si es necesario)
beforeAll(async () => {
  await detox.init()
})

afterAll(async () => {
  await detox.cleanup()
})
