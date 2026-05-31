import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    primary: '#000000',
    secondary: '#424242',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-background': '#000000',
    'on-surface': '#000000',
  },
}

const darkTheme = {
  dark: true,
  colors: {
    background: '#0A0A0A',
    surface: '#1A1A1A',
    primary: '#FFFFFF',
    secondary: '#BDBDBD',
    'on-primary': '#000000',
    'on-secondary': '#000000',
    'on-background': '#FFFFFF',
    'on-surface': '#FFFFFF',
  },
}

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  defaults: {
    VBtn: {
      variant: 'outlined',
      rounded: 0,
    },
    VCard: {
      rounded: 0,
      elevation: 0,
      border: true,
    },
    VChip: {
      rounded: 0,
    },
  },
})
