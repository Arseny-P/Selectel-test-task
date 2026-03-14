import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'main-page',
  imports: [RouterLink],
  template: `
    <h1 class="main__title">Hello! Welcome to <span>SELECT EL</span>ements example</h1>
    <button routerLink="/select" class="app-button">Let's see how it works</button>
  `,
  styleUrl: '../../../styles/main-page.scss',
})
export class MainPage {}
