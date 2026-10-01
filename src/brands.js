import wayLogo from './assets/main_logo.webp'

export const brands = {
  waytofitness: {
    name: 'Way To Fitness',
    area: 'Colaba',
    city: 'Colaba, Mumbai',
    logo: wayLogo,
    rating: '4.6/5',
    reviews: '100+ Google Reviews',
    members: '500+',
    hours: '5AM – 11PM',
  },
  // Copy the block above for the next gym, e.g.
  // mygym: { name: '...', area: '...', city: '...', logo: wayLogo, rating: '...', reviews: '...', members: '...', hours: '...' },
}

const key = import.meta.env.VITE_GYM || new URLSearchParams(window.location.search).get('gym')
export const brand = brands[key] || brands.waytofitness
