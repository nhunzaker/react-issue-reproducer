var assert = require('assert')

describe('Radio Buttons', function() {

  beforeEach(function() {
    browser.url('/cases/radiobutton')
  })

  it('supports clicking controlled radiobuttons', function () {
    browser.click('#rc-2')
    assert.equal(browser.isSelected('#rc-2'), true)
  })

  it('supports clicking a different controlled radiobutton', function () {
    browser.click('#rc-2')
    browser.click('#rc-3')
    assert.equal(browser.isSelected('#rc-3'), true)
  })

  it('supports controlling radiobuttons through state', function () {
    browser.click('#rc-1')
    browser.click('#set-controlled-3')
    assert.equal(browser.isSelected('#rc-3'), true)
  })

  // Confirm this with core team...
  it.skip('should select an uncontrolled input on the first click after clicking an uncontrolled input', function() {
    browser.click('#rm-2') // controlled
    browser.click('#rm-3') // uncontrolled

    assert.equal(browser.isSelected('#rc-3'), true)
  })

  // Confirm this with core team...
  it.skip('deals with state assignments for mixed radiobutton control types', function () {
    // When a controlled radio is clicked
    browser.click('#rm-2')

    // And then an uncontrolled radio is clicked
    browser.click('#rm-3')

    // And the component's state is forced to select 2
    browser.click('#set-mixed-2')

    // This could fail because the component's state is 2, but the
    // uncontrolled input for 3 is clicked. When the button is pushed,
    // no state change occurs because the value is the same. This
    // means the checkbox is never re-assigned.
    //
    // See _handleChange in ReactDOMInput.js
    assert.equal(browser.isSelected('#rc-2'), true)
  })

})
