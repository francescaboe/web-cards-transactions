/**
A simple theme with most common attributes
**/
export interface ThemeType {
  colors: {
    primary: string
    secondary: string
    text: string
    background: string
    error: string
    success: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  typography: {
    fontFamily: string
    fontSize: {
      small: string
      body: string
      h3: string
      h2: string
      h1: string
    }
    fontWeight: {
      regular: number
      medium: number
      bold: number
    }
    lineHeight: {
      small: number
      body: number
      heading: number
    }
  }
  borderRadius: {
    small: string
    medium: string
    large: string
    round: string
  }
  transitions: {
    default: string
    fast: string
    slow: string
  }
}

const theme: ThemeType = {
  colors: {
    primary: '#64b4e0',
    secondary: '#7c7c7b',
    text: '#1F2937',
    background: '#fdfdfe',
    error: '#EF4444',
    success: '#348618',
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
  },
  typography: {
    // Euclid Square needs to be imported, as it is a custom font
    fontFamily: '"Euclid Square",myriad-pro,sans-serif', // same as website
    fontSize: {
      small: '0.875rem', // 14px
      body: '1rem', // 16px
      h3: '1.25rem', // 20px
      h2: '1.5rem', // 24px
      h1: '2rem', // 32px
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      small: 1.25,
      body: 1.5,
      heading: 1.2,
    },
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem',
    round: '9999px',
  },
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },
}

export default theme
