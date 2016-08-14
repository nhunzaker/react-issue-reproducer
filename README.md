# React Issue Reproducer

React tests against JSDOM. That makes it difficult to reproduce
browser issues. This repo tries to fix that.

## Setup

After running `npm install`, prepare yourself for the least ergonomic
workflow ever...

Are you ready? Okay. Clone and build React as a sibling folder within the parent directory:

```
git clone git@github.com:facebook/react.git
cd react
npm install
npm run build
```

This is useful for switching out another branch and building a
potential fix. Otherwise, the repo has React 15.3.0 checked in.

Host a server:

```
make serve
```

In another pane/tab, spin up selenium:

```
make selenium
```

And in the last pane/tab, execute your tests:

```
make test
```

## Caveats

I haven't setup Sauce/BrowserStack integration. This only tests
against Firefox. I would love to get this setup against many browsers.
