## jgregorio-profile

> Profile for developer jgregorio

# Integrating vue-i18n in NUXT

Using [i18n plugin](https://nuxtjs.org/examples/i18n/) for NUXT.

1. Requirements

```
npm i --save vue-i18n
```

2. nuxt.config.js

```
export default {
  loading: { color: 'cyan' },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  }
}
```

3. middleware/i18n.js

```
export default function({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params
  const locale = params.lang || defaultLocale
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // If route is /<defaultLocale>/... -> redirect to /...
  if (
    locale === defaultLocale &&
    route.fullPath.indexOf('/' + defaultLocale) === 0
  ) {
    const toReplace =
      '^/' +
      defaultLocale +
      (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(route.fullPath.replace(re, '/'))
  }
}
```

3. plugins/i18n.js

```
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      es: require('~/locales/es.json')
    }
  })

  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
```

4. store/index.js

```
export const state = () => ({
  locales: ['en', 'es'],
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
```

5. Create locale files

- ./locales/en.json

```
{
  "head": {
    "title": "Welcome",
    "description": "This is an introduction in English."
  },
  "about": {
    "title": "About",
    "description": "This page is made to give you more informations."
  }
}
```

- ./locales/es.json

```
{
  "head": {
    "title": "Bienvenido",
    "description": "Introducción en español."
  },
  "about": {
    "title": "Quienes somos",
    "description": "Página de información sobre el equipo."
  }
}
```

# Theme

Based on [xriley/Developer-Theme](https://github.com/xriley/developer-theme)
