import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './pages/blank-layout/components/home/home.component';
import { AboutComponent } from './pages/blank-layout/components/about/about.component';
import { ContactComponent } from './pages/blank-layout/components/contact/contact.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'workshop02';
}
