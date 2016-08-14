# React Issue Reproducer

React tests against JSDOM. That makes it difficult to reproduce
browser issues. This repo tries to fix that.

## Setup

Clone and build React as a sibling folder within the parent directory:

```
git clone git@github.com:facebook/react.git
cd react
npm install
npm run build
```

Then run this project using Make:

```
make
```

Or host a server:

```
make serve
```

To run tests, after hosting the server, spin up another shell and run selenium:

```
make selenium
```

Now execute your tests in another shell using:

```
make test
```
