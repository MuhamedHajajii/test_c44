import { Routes } from '@angular/router';
import { HomeComponent } from './pages/blank-layout/components/home/home.component';
import { AboutComponent } from './pages/blank-layout/components/about/about.component';
import { ContactComponent } from './pages/blank-layout/components/contact/contact.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: '**', component: NotFoundComponent },
];
