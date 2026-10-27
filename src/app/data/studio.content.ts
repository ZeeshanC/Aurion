export interface Project {
  slug: string;
  code: string;
  title: string;
  typology: string;
  location: string;
  year: string;
  area: string;
  coords: string;
  viz: 'helix' | 'null' | 'orbit' | 'vertex' | 'lumen' | 'drift';
  summary: string;
  story: string[];
}

export interface Discipline {
  index: string;
  title: string;
  text: string;
}

export interface Article {
  slug: string;
  code: string;
  title: string;
  date: string;
  viz: Project['viz'];
  excerpt: string;
  body: string[];
}

export interface Step {
  index: string;
  title: string;
  text: string;
}

export const navigation = [
  { label: 'About', path: '/atelier', index: '01' },
  { label: 'Services', path: '/disciplines', index: '02' },
  { label: 'Works', path: '/works', index: '03' },
  { label: 'Journal', path: '/journal', index: '04' },
  { label: 'Contact', path: '/contact', index: '05' },
];

export const disciplines: Discipline[] = [
  {
    index: '01',
    title: 'Residence',
    text: 'Private worlds with quiet technology. We hide the machinery and leave the feeling: dawn light, deep silence, rooms that learn a household.',
  },
  {
    index: '02',
    title: 'Hospitality',
    text: 'Hotels and dining rooms staged like orbits. Arrival, pause, and night are choreographed so a guest remembers the air as much as the view.',
  },
  {
    index: '03',
    title: 'Workplace',
    text: 'Studios and headquarters tuned for focus. Daylight canyons, acoustic shells, and rooms that shift from solitary work to collective signal.',
  },
  {
    index: '04',
    title: 'Wellness',
    text: 'Baths, clinics, and recovery suites where mineral surfaces and low-frequency light slow the body down without looking clinical.',
  },
  {
    index: '05',
    title: 'Retail',
    text: 'Pavilions for objects that deserve ceremony. Kinetic ceilings, calibrated dark, and paths that make a product feel discovered.',
  },
  {
    index: '06',
    title: 'Research',
    text: 'A living library of plasters, glasses, metals, and sound. Every commission borrows from tests we run before a drawing is trusted.',
  },
];

export const projects: Project[] = [
  {
    slug: 'helix-residence',
    code: 'AX-11',
    title: 'Helix Residence',
    typology: 'Residence',
    location: 'Dubai',
    year: '2026',
    area: '640 m²',
    coords: '25.08°N  55.14°E',
    viz: 'helix',
    summary: 'A penthouse wound around a helical light well, so every room borrows the same slow sun.',
    story: [
      'Helix Residence started as a shaft of glare. The tower offered a view and almost no shade, so the plan turned inward: a continuous ramp of rooms circling a column of controlled daylight.',
      'Floors are lunar plaster, cool underfoot at noon. Glass is low-iron and slightly smoked, enough to keep the marina from shouting. Brass is ionized until it reads as a soft instrument rather than a shine.',
      'The private rooms sit on the outer curve. The shared rooms face the well, where a single pendant traces the helix at night like a satellite. Nothing blinks. The technology that tempers the glass stays inside the wall.',
    ],
  },
  {
    slug: 'null-house',
    code: 'AX-18',
    title: 'Null House',
    typology: 'Residence',
    location: 'Kyoto',
    year: '2025',
    area: '280 m²',
    coords: '35.01°N  135.77°E',
    viz: 'null',
    summary: 'Black glass, cedar, and a courtyard that edits the city down to weather.',
    story: [
      'Null House is a subtraction. We removed ornament, then half the artificial light, then any surface that tried to explain itself.',
      'A cedar screen divides the street from a gravel court. Beyond it, rooms are stacked as dark horizontal slabs. Shoes come off. Sound drops. The garden is the brightest object in the house, and only when it rains.',
      'The client asked for a home that could disappear at the end of a day spent designing other people’s noise. The answer was mass, grain, and one long window at eye height.',
    ],
  },
  {
    slug: 'orbit-lounge',
    code: 'AX-24',
    title: 'Orbit Lounge',
    typology: 'Hospitality',
    location: 'Singapore',
    year: '2026',
    area: '410 m²',
    coords: '1.28°N  103.85°E',
    viz: 'orbit',
    summary: 'A ring bar suspended in a dim dining room, with service moving on the outer path.',
    story: [
      'Orbit Lounge treats dinner as a slow rotation. Guests sit along an inner ring. The kitchen is unseen. Runners travel a perimeter path sunk twenty centimeters below the floor line, so movement reads as a current, not a crossing.',
      'The ceiling is a shallow dome of acoustic felt dyed to the color of deep water. Pin lights mark constellations that shift once an hour. Nobody is asked to notice. They notice anyway.',
      'Materials stay edible in spirit: stone that looks wet, timber with an oil finish, glassware that disappears against the dark. The room is futuristic because it refuses spectacle.',
    ],
  },
  {
    slug: 'vertex-atelier',
    code: 'AX-31',
    title: 'Vertex Atelier',
    typology: 'Workplace',
    location: 'Oslo',
    year: '2024',
    area: '1,200 m²',
    coords: '59.91°N  10.75°E',
    viz: 'vertex',
    summary: 'A daylight canyon for a product studio, cut on a bias so winter sun reaches the core.',
    story: [
      'Oslo winters are honest. Vertex does not pretend otherwise. The floor plate is sheared into two angles so a low sun can travel farther than a rectangular office allows.',
      'Workbenches face the canyon. Call rooms are upholstered shells the color of wet slate. A single public table, long enough for the whole company, anchors Friday reviews under a skylight.',
      'We measured the building for nine months before drawing furniture. The result feels precise rather than cold: wool, ash, and a pale metal that matches the harbor on an overcast day.',
    ],
  },
  {
    slug: 'lumen-baths',
    code: 'AX-36',
    title: 'Lumen Baths',
    typology: 'Wellness',
    location: 'Lisbon',
    year: '2025',
    area: '860 m²',
    coords: '38.72°N  9.14°W',
    viz: 'lumen',
    summary: 'Mineral pools and a chapel of low light carved under a hillside clinic.',
    story: [
      'Lumen Baths is a sequence of temperatures. Guests descend from a bright reception into rooms that forget the street: warm stone, a cooler immersion pool, a rest hall with almost no contrast.',
      'Light is reflected, never aimed at a face. Hidden coves graze mineral plaster until the walls look backlit from inside the rock. The acoustic target was a faint room tone, like a shell held to the ear.',
      'The clinical floors above stay separate. Below, recovery is treated as architecture: pace, heat, and the decision to make technology invisible.',
    ],
  },
  {
    slug: 'drift-pavilion',
    code: 'AX-42',
    title: 'Drift Pavilion',
    typology: 'Retail',
    location: 'Milan',
    year: '2026',
    area: '320 m²',
    coords: '45.46°N  9.19°E',
    viz: 'drift',
    summary: 'A fashion pavilion with a kinetic fabric ceiling that changes the sky every hour.',
    story: [
      'Drift Pavilion sells clothing by changing the weather indoors. A ceiling of weighted silk ribs shifts on a quiet track, opening and closing the path of spotlights so the collection is never lit the same way twice.',
      'The floor is pale and unpatterned. Mannequins were refused. Garments hang from nearly invisible filaments inside freestanding frames, like specimens in a future archive.',
      'The client wanted spectacle. We gave them a slow one. Shoppers stay longer when the room appears to breathe.',
    ],
  },
];

export const journal: Article[] = [
  {
    slug: 'light-without-lamps',
    code: 'JN-07',
    title: 'Light without lamps',
    date: 'March 2026',
    viz: 'lumen',
    excerpt: 'The most future-facing rooms we make are the ones that refuse a visible fixture.',
    body: [
      'A lamp is a confession that the architecture did not plan the light. We still use fixtures, but the ones guests can name are usually a failure of an earlier decision.',
      'In Helix, sun is steered by glass and a well. In Lumen, brightness is a property of plaster. The source sits where a person cannot politely look: a cove, a joint, a thickness inside a wall.',
      'This is not minimalism as style. It is maintenance, glare, and the way a face should look across a table. When the fitting disappears, the room can be about the person in it.',
      'Our current tests use electrochromic interlayers and a plaster with a slightly higher reflectance than gallery white. The goal is a wall that can be morning without pretending to be the sun.',
    ],
  },
  {
    slug: 'matter-index',
    code: 'JN-06',
    title: 'The matter index',
    date: 'November 2025',
    viz: 'null',
    excerpt: 'Five surfaces we trust when a room has to feel advanced and still be touched every day.',
    body: [
      'Futurism fails when it chips. We keep a short index of materials that survive hands, bags, humidity, and cleaning crews who do not love the concept.',
      'Lunar plaster takes a soft sheen without going plastic. Ionized brass darkens instead of spotting. Acoustic felt, dyed in the mass, can be a ceiling and a quiet. Low-iron glass with a neutral interlayer keeps views from turning green. Cedar, left with an oil that can be renewed, smells like a decision.',
      'We retire materials that photograph well and age badly. Mirrored ceilings, cold white resin, and anything that needs a specialist to clean it once a month.',
      'The index is not a catalog clients shop from. It is a bias. New commissions begin by asking which of these the site already wants.',
    ],
  },
  {
    slug: 'cities-after-dark',
    code: 'JN-05',
    title: 'Cities after dark',
    date: 'June 2025',
    viz: 'orbit',
    excerpt: 'Night is when an interior either becomes a signal or disappears into the skyline.',
    body: [
      'Daylight is a collaborator. Night is a test. From the street, most ambitious rooms collapse into a bright rectangle and a glimpse of a sofa.',
      'We design the exterior read on purpose. Orbit Lounge is a dim disc. Null House is nearly absent. Drift Pavilion pulses once every hour and otherwise stays low. The city does not need another glowing box.',
      'Inside, night is when contrast is allowed to rise. A single pool of light on a table is more generous than a grid of downlights at full output. Guests settle. Staff can see. The architecture keeps its contour.',
      'If a room only works at golden hour, it is a photograph. We stay for the hour after midnight.',
    ],
  },
];

export const steps: Step[] = [
  {
    index: '01',
    title: 'Signal',
    text: 'We read the site, the client, and the way the room must behave at 8am and at midnight.',
  },
  {
    index: '02',
    title: 'Form',
    text: 'Spatial prototypes come before finishes. Models, light studies, and a plan you can walk in your head.',
  },
  {
    index: '03',
    title: 'Matter',
    text: 'Materials are tested for touch, stain, and age. The future ones have to survive ordinary life.',
  },
  {
    index: '04',
    title: 'Inhabit',
    text: 'We tune furniture, acoustics, and the last five percent of light after people start using the room.',
  },
];

export const stats = [
  { value: '48', label: 'Environments delivered' },
  { value: '11', label: 'Cities in orbit' },
  { value: '16', label: 'Years of research' },
  { value: '01', label: 'Living material index' },
];

export const principles = [
  {
    title: 'Hide the machine',
    text: 'Climate, glass, and sound are engineered hard, then concealed so the room can feel calm.',
  },
  {
    title: 'Light is a material',
    text: 'We draw illumination the way other studios draw stone: thickness, color, and where it stops.',
  },
  {
    title: 'Touch before render',
    text: 'If a surface only works on a screen, it does not enter the index.',
  },
];

export const materials = [
  'Lunar plaster',
  'Ionized brass',
  'Smoked low-iron glass',
  'Cedar oil',
  'Acoustic felt',
  'Wet-look stone',
  'Ash',
  'Wool shell',
];

export const team = [
  { name: 'Noor Vale', role: 'Spatial director', code: 'NV' },
  { name: 'Ivo Marek', role: 'Light', code: 'IM' },
  { name: 'Sera Quinn', role: 'Materials', code: 'SQ' },
  { name: 'Kenji Arai', role: 'Environments', code: 'KA' },
];

export const studios = [
  { city: 'Dubai', role: 'Flagship atelier', note: 'Marina gate, level 41' },
  { city: 'Singapore', role: 'Hospitality lab', note: 'Robertson quay' },
  { city: 'Oslo', role: 'Light research', note: 'Bjørvika workshop' },
];

export const typologies = ['All', ...new Set(projects.map((project) => project.typology))];

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function nextProject(slug: string | undefined): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) {
    return undefined;
  }
  return projects[(index + 1) % projects.length];
}

export function findArticle(slug: string | undefined): Article | undefined {
  return journal.find((article) => article.slug === slug);
}
