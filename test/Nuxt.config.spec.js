/* const routerBase = {
  router: {
    base: '/jgregorio-profile/'
  }
}

const moduleExports = {
  router: {
    ...routerBase,
    middleware: 'i18n'
  }
} */
const nuxtConfig = require('../nuxt.config.js')
describe('Nuxt.config.js', () => {
  test('router must be jgregorio-profile', () => {
    expect(nuxtConfig.router.base).toBe('/jgregorio-profile/')
  })
})
