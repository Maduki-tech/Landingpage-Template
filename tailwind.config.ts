import { type Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('~/public/Images/hero-bg.jpg')",
            },
        },
    },
    plugins: [require('daisyui')],
} satisfies Config;
