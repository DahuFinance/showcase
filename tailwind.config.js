module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                halo: '0px 0px 22px rgba(83, 82, 237, 0.2)',
            },
            colors: {
                skyBlue: '#95FAFF',
                purple: '#5352ED',
                darkPurple: '#260E44',
                darkBlue: '#220D3C',
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

            }
        },
    },

    plugins: [
        require('tailwindcss-textshadow'),
    ],
}
