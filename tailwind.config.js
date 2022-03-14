module.exports = {
    important: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                '2xs': "0.625rem"
            },
            lineHeight: {
                '0': 0,
            },
            colors: {
                "primary": "#28B6FF",
                "secondary": "#2D3B45",
                "gray-light": "#E6E6E6",
                "rose": "#FAF8FD"
            }
        }
    },
    plugins: [],
}
