module.exports = {
    trailingSlash: true,
    images: {
        loader: 'imgix',
        path: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://dahu.finance')
    }
}