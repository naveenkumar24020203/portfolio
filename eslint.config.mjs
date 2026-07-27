import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', '.v0/**', 'next-env.d.ts'],
  },
  ...coreWebVitals,
  ...typescript,
]

export default config
