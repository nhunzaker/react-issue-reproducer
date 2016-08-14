var assert = require('assert')

describe('Range Inputs', function() {

  beforeEach(function() {
    browser.url('/cases/range')
  })

  describe('#7099 - Input range value rounding', function () {
    // Step must assign before value, otherwise the value is modified
    // on insertion.
    // https://github.com/facebook/react/issues/7099#issuecomment-227680457
    it('does not round controlled ranges on mount', function () {
      assert.equal(browser.getValue('#controlled'), '3.5')
    })

    it('does not round uncontrolled ranges on mount', function () {
      assert.equal(browser.getValue('#uncontrolled'), '3.5')
    })
  })
})
