import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { setDefaultOptions } from 'jsdom-screenshot'

// TravisCI and Linux OS require --no-sandbox to be able to run the tests
// https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-on-travis-ci
setDefaultOptions({
  launch: {
    pipe: true,
  },
  waitUntilNetworkIdle: false,
})

// give tests more time as taking screenshots takes a while
jest.setTimeout(10000)

expect.extend({ toMatchImageSnapshot })

global.setImmediate = global.setImmediate || ((fn, ...args) => global.setTimeout(fn, 0, ...args))
global.clearImmediate = clearTimeout
