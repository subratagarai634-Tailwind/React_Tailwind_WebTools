module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f172a',
          card: '#1e293b',
        },
      },
      fontSize: {
        'fluid-sm': 'clamp(0.8rem, 0.75rem + 0.25vw, 0.95rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.35vw, 1.2rem)',
        'fluid-lg': 'clamp(1.25rem, 1.15rem + 0.65vw, 1.65rem)',
        'fluid-xl': 'clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem)',
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)',
        'elevation-2': '0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.06)',
        'elevation-3': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glassmorphic': {
          'background': 'rgba(255, 255, 255, 0.08)',
          'backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.15)',
        },
      });
    },
  ],
};
