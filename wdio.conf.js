exports.config = {
  capabilities: [
    { browserName: 'firefox' }
  ],

  specs: [ './test/**/*.test.js' ],
  sync: true,
  baseUrl: "http://localhost:4000",
  logLevel: 'error',
  coloredLogs: true,
  screenshotPath: 'shots',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd'
  }
}
