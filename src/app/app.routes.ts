import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'atelier',
    loadComponent: () => import('./pages/atelier/atelier.page').then((m) => m.AtelierPage),
  },
  {
    path: 'disciplines',
    loadComponent: () => import('./pages/disciplines/disciplines.page').then((m) => m.DisciplinesPage),
  },
  {
    path: 'works',
    loadComponent: () => import('./pages/works/works.page').then((m) => m.WorksPage),
  },
  {
    path: 'works/:slug',
    loadComponent: () => import('./pages/work-detail/work-detail.page').then((m) => m.WorkDetailPage),
  },
  {
    path: 'journal',
    loadComponent: () => import('./pages/journal/journal.page').then((m) => m.JournalPage),
  },
  {
    path: 'journal/:slug',
    loadComponent: () => import('./pages/journal-detail/journal-detail.page').then((m) => m.JournalDetailPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
