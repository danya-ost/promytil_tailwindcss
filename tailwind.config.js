module.exports = {
  content: [
    "./dist/index.html",
    "./dist/about.html",
    "./dist/doc.html",
    "./dist/contacts.html",
    "./dist/news.html",
    "./dist/view-news.html",
    "./dist/search.html",
  ],
  theme: {
    extend: {},
    container:{
      center: true,
    },
    colors: {
      'mc': '#29884D',
      'mlc': '#5DC383',
      'elc': '#E8F7E8',
      'eelc': '#F4F9F6',
      'mgc': '#9D9E9E',
      'mdc': '#1F1A17',
      'ac': '#FEBF0A',
      'white': '#FFFFFF'
    },
    fontFamily: {
      'rubic': ['"Rubik"', 'sans-serif'],
      'open-sans': ['"Open Sans"', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px'
    }
  },
  plugins: [],
}
