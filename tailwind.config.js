const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
        'border-b-2',
        'border-t-2',
        'justify-start',
        'justify-end',
        'justify-center',
        'from-skyBlue',
        'from-purple'
    ],
    theme: {
        extend: {
            boxShadow: {
                halo: '0px 0px 22px rgba(83, 82, 237, 0.2)',
            },
            colors: {
                skyBlue: '#95FAFF',
                clearPurple: '#8B8AFF',
                purple: '#5352ED',
                darkPurple: '#260E44',
                darkBlue: '#17072a',
                green: colors.emerald,
                blueToken: '#2A2564',
                orange: '#FF9966',
                yellow: '#FFDD65',
                red: '#FF6262',
                purpledarky: '#4540DB',
            },
            fontFamily: {
                sans: 'Poppins, sans-serif',
            },
            backgroundImage: {
                'dahu': "url('/dahu-launch.svg')",
                'dahuMobile': "url('/dahu-launch-mobile.png')",
                'stars':"url('/background.png')",
                'bg1':"url('/bg1.svg')",
                'bg2':"url('/bg2.svg')"
            }
        },
    },

    plugins: [
        require('tailwindcss-textshadow'),
    ],
}
