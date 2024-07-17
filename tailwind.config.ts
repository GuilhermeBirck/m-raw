/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
        './resources/**/*.blade.php',
        './resources/**/*.ts',
        './resources/**/*.vue',
      ],
  theme: {
    themes: [
      {
        mytheme: {
          "primary": "#d8b4fe",
          "secondary": "#1f2937",
          "accent": "#374151",
          "neutral": "#111827",
          "base-100": "#111827",
          "info": "#2563eb",
          "success": "#facc15",
          "warning": "#4d7c0f",
          "error": "#ff0000",
        },
      },
    ],
    daisyui: {
      themes: ["light", "dark", "night", "coffee"]
    },
    extend: {},
  },
  plugins: [daisyui]
} satisfies Config