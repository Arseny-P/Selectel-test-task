import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { DataService } from './services/select';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="header">
      <span>Section: {{ router.url === '/select' ? 'Select page' : 'Welcome page' }}</span>
      <div class="header__statistic">
        <span>Selected: {{ ds.totalSelected() }}</span>
        <span>Total amount: {{ ds.totalAmount() }}</span>
      </div>
    </header>
    <nav class="navigation">
      <a class="navigation__link" [class.active]="router.url === '/home'" routerLink="/home" >Home</a>
      <a class="navigation__link" [class.active]="router.url === '/select'" routerLink="/select" >Menu</a> 
    </nav>
    <main class="main__container">
      <router-outlet />
    </main>
  `,
  styleUrl: "../styles/app.scss",
})
export class App {
  public ds = inject(DataService);
  public router = inject(Router);
}