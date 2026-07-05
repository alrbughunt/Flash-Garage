import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        electric: '#0066FF',
        metal: '#C0C0C0',
        garage: {
          50: '#F7FAFF',
          100: '#EAF1FF',
          300: '#95B9FF',
          600: '#0066FF',
          700: '#004ED0',
          900: '#07101F',
          950: '#05070B'
        },
        asphalt: '#333333'
      },
      fontFamily: {
        display: ['Bahnschrift', 'DIN Condensed', 'Arial Narrow', 'system-ui', 'sans-serif'],
        body: ['Trebuchet MS', 'Segoe UI', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 102, 255, 0.35)',
        metal: '0 20px 60px rgba(0, 0, 0, 0.24)'
      },
      backgroundImage: {
        'garage-radial': 'radial-gradient(circle at top left, rgba(0,102,255,0.32), transparent 38%), radial-gradient(circle at 80% 10%, rgba(192,192,192,0.16), transparent 30%), linear-gradient(135deg, #05070B 0%, #07101F 50%, #111827 100%)',
        'metal-line': 'linear-gradient(90deg, transparent, rgba(192,192,192,0.7), transparent)'
      }
    }
  },
  plugins: []
};

export default config;
