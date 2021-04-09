# Introduction

A Github repo viewer that fetch Decalthon 's github repo.

# API SETTING

## TOKEN

Without token there is only 50 request per hour.
You can add your person access token to have more rate limit
Please add your token in `.env.developement`

```
REACT_APP_API_TOKEN=<<your token>>
```

For dev purpose , you can also set mock api to true in `.env.developement` otherwise it will fetch the real github api

```
REACT_APP_USE_MOCK=true
```

# Quickstart

Strongly recommend using yarn , due to babel-loader conflict between CRA and storybook

For yarn

```

yarn
yarn start

```

For npm (if you really want to...this may break something until CRA update babel-load deps to match with storybook)

Add `SKIP_PREFLIGHT_CHECK=true` to `.env.developement`

```

npm install --legacy-peer-deps //react 17 may not in other deps' peer deps
npm start

```

# Test

```

yarn test

```

```

npm run test

```

# Build

```
yarn run build
```

```
npm run build
```

# Storybook

```

yarn storybook

```

```

npm run storybook

```
