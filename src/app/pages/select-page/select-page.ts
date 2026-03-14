import { Component, inject, OnInit } from '@angular/core';
import { Select } from "../../components/app-select/app-select";
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/select';

@Component({
  selector: 'select-page',
  standalone: true,
  imports: [Select, RouterLink],
  template: `
    <button class="app-button" routerLink="/home">← Back</button>
    <h1>Select Items</h1>
    
    <div class="menu-list">
      @for (item of ds.menuItems(); track item.id) {
        <app-select 
          [checked]="item.selected" 
          (checkedChange)="ds.toggleItem(item.id)"
          [label]="item.label"
          [value]="item.value">
        </app-select>
      }
    </div>
  `,
  styleUrl: '../../../styles/select-page.scss',
})
export class SelectPage implements OnInit {
  public ds = inject(DataService);

  ngOnInit() {
    if (this.ds.menuItems().length === 0) {
      this.ds.loadMenu();
    }
  }
}