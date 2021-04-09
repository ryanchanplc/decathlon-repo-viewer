#Introduction

#Quickstart
Strongly recommend using yarn , due to babel-loader conflict between CRA and storybook

For yarn

```
yarn
yarn start
```

For npm (if you really want to...this may break something until CRA update babel-load deps to match with storybook)

Add SKIP_PREFLIGHT_CHECK=true to `.env.developement`

```
npm install --legacy-peer-deps   //react 17 may not in other deps' peer deps
npm start
```

#Test

```
yarn test
```

```
npm run test
```

#storybook

```
yarn storybook
```

```
npm run storybook
```
