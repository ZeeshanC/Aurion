/**
 * AURION THEME — the only file that controls the look of the site.
 *
 * Change the mood:
 *   1. Switch `activePalette` to another name (`nocturne`, `solar`, `ion`).
 *   2. Or edit the hex values inside that palette. Every screen follows them.
 *
 * Also editable here: studio name, tagline, fonts, corner radius, and motion.
 * Fonts already loaded in index.html: Syne, Outfit, Share Tech Mono, Orbitron.
 * Set `fonts.display` to '"Orbitron", sans-serif' for a sharper HUD face.
 */

export type PaletteName = 'nocturne' | 'solar' | 'ion';

export interface Palette {
  void: string;
  abyss: string;
  panel: string;
  ink: string;
  muted: string;
  faint: string;
  accent: string;
  signal: string;
  flare: string;
  heat: string;
  onAccent: string;
}

export const palettes: Record<PaletteName, Palette> = {
  nocturne: {
    void: '#0c0c0c',
    abyss: '#111111',
    panel: '#161616',
    ink: '#f3f3f3',
    muted: '#bdbdbd',
    faint: '#8d8d8d',
    accent: '#ffffff',
    signal: '#e8e8e8',
    flare: '#ffffff',
    heat: '#ff6b6b',
    onAccent: '#111111',
  },
  solar: {
    void: '#100c09',
    abyss: '#1a1410',
    panel: '#2a211a',
    ink: '#fff6ec',
    muted: '#d2bba6',
    faint: '#8d7563',
    accent: '#ffb15a',
    signal: '#ff7a59',
    flare: '#ffe08a',
    heat: '#ff5d73',
    onAccent: '#1a0e06',
  },
  ion: {
    void: '#070514',
    abyss: '#100a22',
    panel: '#1b1333',
    ink: '#f6edff',
    muted: '#c0addd',
    faint: '#7e6b9e',
    accent: '#c084fc',
    signal: '#7aa2ff',
    flare: '#ff7ad9',
    heat: '#ff4d8d',
    onAccent: '#160818',
  },
};

/** Flip this value to recolor the entire website. */
export const activePalette: PaletteName = 'nocturne';

export const theme = {
  brand: 'AURION',
  tagline: 'Spatial design for the next century',
  colors: palettes[activePalette],
  fonts: {
    display: '"Syne", sans-serif',
    body: '"Outfit", sans-serif',
    mono: '"Share Tech Mono", ui-monospace, monospace',
  },
  tracking: '0.18em',
  radius: {
    sm: '12px',
    md: '22px',
    lg: '32px',
    pill: '999px',
  },
  motion: {
    fast: '180ms',
    base: '520ms',
  },
};

export type Theme = typeof theme;

function hexToRgb(hex: string): string {
  const normalized = hex.replace('#', '').trim();
  const value = Number.parseInt(normalized, 16);
  return `${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}`;
}

export function applyTheme(config: Theme = theme): void {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;
  const c = config.colors;
  const mix = (color: string, amount: string, base = 'transparent') =>
    `color-mix(in srgb, ${color} ${amount}, ${base})`;

  const vars: Record<string, string> = {
    '--void': c.void,
    '--abyss': c.abyss,
    '--panel': c.panel,
    '--ink': c.ink,
    '--muted': c.muted,
    '--faint': c.faint,
    '--accent': c.accent,
    '--signal': c.signal,
    '--flare': c.flare,
    '--heat': c.heat,
    '--on-accent': c.onAccent,
    '--glass': mix(c.panel, '78%'),
    '--accent-soft': mix(c.accent, '22%'),
    '--accent-dim': mix(c.accent, '58%', c.void),
    '--signal-soft': mix(c.signal, '20%'),
    '--flare-soft': mix(c.flare, '18%'),
    '--line': mix(c.signal, '28%'),
    '--line-strong': mix(c.accent, '55%'),
    '--glow': `0 0 42px ${mix(c.accent, '38%')}`,
    '--font-display': config.fonts.display,
    '--font-body': config.fonts.body,
    '--font-mono': config.fonts.mono,
    '--track': config.tracking,
    '--radius-sm': config.radius.sm,
    '--radius-md': config.radius.md,
    '--radius-lg': config.radius.lg,
    '--radius-pill': config.radius.pill,
    '--motion-fast': config.motion.fast,
    '--motion-base': config.motion.base,
    '--ion-font-family': config.fonts.body,
    '--ion-background-color': c.void,
    '--ion-background-color-rgb': hexToRgb(c.void),
    '--ion-text-color': c.ink,
    '--ion-text-color-rgb': hexToRgb(c.ink),
    '--ion-color-primary': c.accent,
    '--ion-color-primary-rgb': hexToRgb(c.accent),
    '--ion-color-primary-contrast': c.onAccent,
    '--ion-color-primary-contrast-rgb': hexToRgb(c.onAccent),
    '--ion-color-primary-shade': mix(c.accent, '78%', 'black'),
    '--ion-color-primary-tint': mix(c.accent, '78%', 'white'),
    '--ion-toolbar-background': c.void,
    '--ion-toolbar-color': c.ink,
    '--ion-item-background': c.panel,
    '--ion-item-color': c.ink,
    '--ion-card-background': c.panel,
    '--ion-border-color': mix(c.signal, '28%'),
  };

  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }

  root.style.colorScheme = 'dark';
  root.style.backgroundColor = c.void;

  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor?.setAttribute('content', c.void);
}
