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

# Font awesome

1. Incluir dependencia del módulo font-awesome por encima de nuxt

```
"dependencies": {
"@fortawesome/free-solid-svg-icons": "^5.3.1",
"nuxt-fontawesome": "^0.3.0",
"nuxt": "latest"
},
```

En caso de que build falle añadir:

- "@fortawesome/fontawesome-svg-core": "^1.2.4",
- "@fortawesome/vue-fontawesome": "^0.1.1",

2. Anadirlo al fichero nuxt.config.js
* Se puede importar el conjunto completo o solo unos iconos

```
  /*
  ** Modules
  */
  modules: ["nuxt-fontawesome"],
  /*
  ** fontawesome
  */
  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["faExternalLinkAlt"]
      }
    ]
  },
```

4. Para utilizarlo

```
<template>
<div>
  <fa :icon="faExternalLinkAlt" />
</div>
</template>

<script>
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
export default {
  computed: {
      faExternalLinkAlt() {
        return faExternalLinkAlt;
      }
    }
}
</script>
```

# TODO

1. Traducir al espahnol
2. Rellenar skills
2. Mover bloque aside de forma que se muestre por encima
3. anaadir soft skills
