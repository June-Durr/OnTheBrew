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
    subline: 'Small-batch beans from Cecilia and Jonathan’s family farms, brewed fresh in Stamford.',
    cta: 'Find Us',
  },
  difference: {
    headline: 'Not Just Another Cup',
    body: 'Most coffee passes through a dozen hands before it reaches yours. Ours passes through two: the family who grew it, and the family who roasts it. That’s the difference you taste in every sip.',
  },
  story: {
    tag: 'Seed to Sip',
    headline: 'A Family Tradition, Brewed for Stamford',
    body: 'Cecilia and Jonathan grew up around coffee farms in Guatemala’s highlands. On The Brew is their way of bringing that heritage — and their family’s microlot beans — straight to your cup, roasted small-batch and served with care.',
  },
  menu: {
    title: 'Taste the Heritage',
    introduction: 'From family-grown Guatemalan coffee to bright café favorites, every cup is made with care.',
    categories: [
      {
        id: 'coffee',
        label: 'Coffee',
        subtitle: 'Signature Drinks',
        image: assetPath('images/menu-coffee.svg'),
        imageAlt: 'Illustrated iced coffee with cream swirling through the glass',
        items: [
          { name: 'Café de Olla', description: 'Espresso, piloncillo, cinnamon and orange', featured: true },
          { name: 'Antigua Latte', description: 'Velvety espresso with brown sugar and spice', featured: false },
          { name: 'Café con Leche', description: 'Rich espresso softened with steamed milk', featured: true },
          { name: 'Iced Guatemalan Brew', description: 'Slow-steeped, refreshing and bold', featured: false },
        ],
      },
      {
        id: 'non-coffee',
        label: 'Non-Coffee',
        subtitle: 'Fresh & Comforting',
        image: assetPath('images/menu-cacao.svg'),
        imageAlt: 'Illustrated iced cacao drink topped with cream',
        items: [
          { name: 'Guatemalan Cacao', description: 'Deep cacao, warm spice and steamed milk', featured: true },
          { name: 'Hibiscus Refresher', description: 'Tart hibiscus, citrus and sparkling water', featured: false },
          { name: 'Vanilla Steamer', description: 'Steamed milk with fragrant vanilla', featured: false },
          { name: 'Seasonal Agua Fresca', description: 'A rotating fruit-forward house refreshment', featured: false },
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
        ],
      },
    ],
  },
  brewmobile: {
    heading: 'The Brewmobile',
    body: 'Bring On The Brew to your next event. Our mobile coffee bar serves handcrafted drinks for weddings, offices, and community gatherings anywhere in the area.',
    cta: 'Request a Quote',
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
    hours: '[ Hours TBD ]',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=100+Greyrock+Place+Stamford+CT',
    ctas: ['Get Directions', 'Order Ahead'],
  },
  footer: {
    line: '© 2026 On The Brew Coffee Company. All rights reserved.',
    credit: 'Site by SiteLaunch Studios',
    social: ['Instagram', 'Facebook', 'TikTok'],
  },
}
