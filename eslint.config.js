import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const browserGlobals = {
  window: 'readonly',
  document: 'readonly',
  localStorage: 'readonly',
  sessionStorage: 'readonly',
  console: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly',
  fetch: 'readonly',
  URL: 'readonly',
  Intl: 'readonly',
  performance: 'readonly',
  requestAnimationFrame: 'readonly',
  cancelAnimationFrame: 'readonly',
  IntersectionObserver: 'readonly',
  Image: 'readonly'
}

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: browserGlobals,
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      // Atributos que lee el plugin dflip (visor de folleto), no son errores.
      'react/no-unknown-property': ['error', { ignore: ['_slug', 'wpoptions', 'thumbtype'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
]
