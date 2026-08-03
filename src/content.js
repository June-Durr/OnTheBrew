const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const content = {
  business: {
    name: 'On The Brew Coffee Company',
    short: 'OTB',
  },
  nav: {
    links: [
      { label: 'Menu', href: '/menu' },
      { label: 'Our Story', href: '/#story' },
      { label: 'Visit Us', href: '/#visit' },
    ],
  },
  hero: {
    headline: 'Guatemalan Coffee, Roasted With Heart',
    subline: 'Small-batch beans from Cecilia and Jonathan’s family farms, brewed fresh in Stamford. Open until 8 PM most days.',
    cta: 'Find Us',
  },
  difference: {
    headline: 'Not Just Another Cup',
    body: 'Most coffee passes through a dozen hands before it reaches yours. Ours passes through two: the family who grew it, and the family who roasts it. That’s the difference you taste in every sip.',
  },
  trustBar: [
    {
      icon: 'sprig',
      heading: 'We Source. We Roast. We Brew.',
      body: 'Coffee without compromise.',
    },
    {
      icon: 'mountain',
      heading: 'Guatemalan Microlots',
      body: 'Beans from family farms, straight to your cup.',
    },
    {
      icon: 'pin',
      heading: 'Roasted in Stamford',
      body: 'Small-batch, fresh, and local.',
    },
  ],
  story: {
    tag: 'Seed to Sip',
    headline: 'A Family Tradition, Brewed for Stamford',
    body: 'Cecilia and Jonathan Villeda are Stamford natives and first-generation Americans, carrying five generations of Jonathan’s family in Guatemala’s coffee industry. They met working at a coffee shop and started out selling roasted beans at local farmers markets, then custom-built a coffee cart by hand with Jonathan’s father. Today that same spirit lives on at Stamford Town Center, where every cup still carries their family’s heritage.',
  },
  menu: {
    title: 'Taste the Heritage',
    introduction: 'From family-grown Guatemalan coffee to bright café favorites, every cup is made with care.',
    categories: [
      {
        id: 'coffee-espresso',
        label: 'Coffee & Espresso',
        subtitle: 'Drip & Espresso Bar',
        image: assetPath('images/menu-coffee.svg'),
        imageAlt: 'Illustrated iced coffee with cream swirling through the glass',
        items: [
          { name: 'Drip Coffee', description: 'Guatemalan single-origin, brewed fresh all day', featured: true },
          { name: 'Espresso', description: '[ Tasting notes pending ]', featured: false },
          { name: 'Café de Olla', description: 'Espresso, piloncillo, cinnamon and orange', featured: false },
          { name: 'Antigua Latte', description: 'Velvety espresso with brown sugar and spice', featured: false },
          { name: 'Café con Leche', description: 'Rich espresso softened with steamed milk', featured: false },
        ],
      },
      {
        id: 'cultural-favorites',
        label: 'Cultural Favorites',
        subtitle: 'Guatemalan & Latin Classics',
        image: assetPath('images/menu-cacao.svg'),
        imageAlt: 'Illustrated iced cacao drink topped with cream',
        items: [
          { name: 'Horchata', description: '[ Tasting notes pending ]', featured: false },
          { name: 'Tamarind Iced Tea', description: '[ Tasting notes pending ]', featured: false },
          { name: 'Hibiscus Iced Tea', description: 'Tart hibiscus, citrus and sparkling water', featured: false },
          { name: 'Guatemalan Cacao', description: 'Deep cacao, warm spice and steamed milk', featured: true },
        ],
      },
      {
        id: 'tea-more',
        label: 'Tea & More',
        subtitle: 'Beyond Coffee',
        items: [
          { name: 'Matcha', description: '[ Tasting notes pending ]', featured: false },
          { name: 'Chai', description: '[ Tasting notes pending ]', featured: false },
        ],
      },
      {
        id: 'food',
        label: 'Food',
        subtitle: 'From the Pastry Case',
        image: assetPath('images/menu-pastry.svg'),
        imageAlt: 'Illustrated golden pastry with a coffee leaf garnish',
        items: [
          { name: 'Guava & Cheese Pastelito', description: 'Flaky pastry with sweet guava and cream cheese', featured: false },
          { name: 'Coffee Cake', description: 'Tender cinnamon cake with a crisp crumb', featured: false },
          { name: 'Morning Croissant', description: 'Buttery, flaky and baked until golden', featured: false },
          { name: 'Breakfast Burrito', description: '[ Description pending ]', featured: true },
          { name: 'Cookies', description: '[ Description pending ]', featured: false },
        ],
      },
    ],
  },
  brewmobile: {
    heading: 'The Brewmobile',
    hook: 'Coffee that comes to you.',
    tags: ['Weddings', 'Farmers Markets', 'Corporate Events'],
    cta: 'Request a Quote',
  },
  press: {
    label: 'AS FEATURED IN',
    name: 'Hey Stamford!',
    linkText: 'Read the story',
    href: 'https://www.heystamford.com/on-the-brew-opens-new-coffee-shop-at-stamford-town-center-in/',
  },
  proof: {
    heading: 'Loved From the Start',
    blocks: [
      { label: 'Grand Opening', detail: 'Now open in Stamford Town Center' },
      { label: 'Community Favorite', detail: '“Best new coffee shop in Stamford.”' },
      { label: 'Family Roasted', detail: 'Beans sourced directly from Guatemala' },
    ],
  },
  visit: {
    heading: 'Come Find Us',
    address: '100 Greyrock Place, Level 3 Green South, Stamford, CT',
    hours: [
      { day: 'Sunday', time: '11:00 AM – 7:00 PM' },
      { day: 'Monday', time: '8:30 AM – 8:00 PM' },
      { day: 'Tuesday', time: '8:30 AM – 8:00 PM' },
      { day: 'Wednesday', time: '8:30 AM – 8:00 PM' },
      { day: 'Thursday', time: '8:30 AM – 8:00 PM' },
      { day: 'Friday', time: '8:30 AM – 8:00 PM' },
      { day: 'Saturday', time: '8:30 AM – 8:00 PM' },
    ],
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=100+Greyrock+Place+Stamford+CT',
    cta: 'Get Directions',
    videoHeading: 'Finding Us Inside the Mall',
    videoId: '',
  },
  footer: {
    line: '© 2026 On The Brew Coffee Company. All rights reserved.',
    credit: 'Site by SiteLaunch Studios',
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/onthebrew.coffeeco/' },
      { label: 'Facebook', href: 'https://www.facebook.com/p/On-The-Brew-61555690275616/' },
    ],
  },
}
