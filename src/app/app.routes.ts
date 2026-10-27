import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    data: {
      title: 'Aurion — Interior design for homes, offices, and restaurants',
      description: 'Aurion designs interiors for homes, offices, restaurants, and shops. See the work, then book a meeting by phone or WhatsApp.',
    },
  },
  {
    path: 'atelier',
    loadComponent: () => import('./pages/atelier/atelier.page').then((m) => m.AtelierPage),
    data: {
      title: 'About Aurion — Interior design studio',
      description: 'Meet Aurion, an interior studio working from Dubai, Singapore, and Oslo on homes, hotels, and workplaces.',
    },
  },
  {
    path: 'disciplines',
    loadComponent: () => import('./pages/disciplines/disciplines.page').then((m) => m.DisciplinesPage),
    data: {
      title: 'Interior design services — Aurion',
      description: 'Residential, hospitality, workplace, wellness, retail, and design research from the Aurion studio.',
    },
  },
  {
    path: 'works',
    loadComponent: () => import('./pages/works/works.page').then((m) => m.WorksPage),
    data: {
      title: 'Interior design projects — Aurion',
      description: 'Selected Aurion interiors: homes, hotels, offices, baths, and retail spaces.',
    },
  },
  {
    path: 'works/:slug',
    loadComponent: () => import('./pages/work-detail/work-detail.page').then((m) => m.WorkDetailPage),
  },
  {
    path: 'journal',
    loadComponent: () => import('./pages/journal/journal.page').then((m) => m.JournalPage),
    data: {
      title: 'Interior design journal — Aurion',
      description: 'Notes from Aurion on light, materials, and how rooms feel after dark.',
    },
  },
  {
    path: 'journal/:slug',
    loadComponent: () => import('./pages/journal-detail/journal-detail.page').then((m) => m.JournalDetailPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
    data: {
      title: 'Book an interior design meeting — Aurion',
      description: 'Tell Aurion about your room. Reach the studio on WhatsApp or by phone at +91 85117 17710.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
