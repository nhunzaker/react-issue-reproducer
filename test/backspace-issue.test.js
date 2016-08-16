var assert = require('assert')

describe('backspace issue', function() {

  it('should not eliminate decimal places on controlled input', function () {
    browser.url('/cases/input')
    browser.setValue('#controlled', '3.')
    browser.getValue('#controlled')

    assert.equal(browser.getValue('#controlled'), '3.')
  })

  it('should not eliminate decimal places on uncontrolled input', function () {
    browser.url('/cases/input')
    browser.setValue('#uncontrolled', '3.')
    browser.getValue('#uncontrolled')

    assert.equal(browser.getValue('#uncontrolled'), '3.')
  })

  it ('does not override similar values on controlled inputs', function () {
    browser.url('/cases/input')
    browser.setValue('#controlled', '30')
    browser.getValue('#controlled', '3e10')

    assert.equal(browser.getValue('#controlled'), '30')
  })

  it ('allows bad input on uncontrolled numbers', function () {
    browser.url('/cases/input')
    browser.setValue('#uncontrolled_number', '1e')
    browser.getValue('#uncontrolled_number', '1e3')

    assert.equal(browser.getValue('#uncontrolled_number'), '1e3')
  })

})
