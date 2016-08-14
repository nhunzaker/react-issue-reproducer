var assert = require('assert')

describe('default checked issue', function() {

  it('should not update the checked value after checked is assigned', function () {
    browser.url('/cases/chrome-default-checkbox')
    assert.equal(browser.isSelected('#checkbox'), true)
  })

})
