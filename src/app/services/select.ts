import { inject, Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './tokens';

export type MenuItem = {
  id: number;
  label: string;
  value: number;
  selected: boolean;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);
  private url = inject(API_URL);

  menuItems = signal<MenuItem[]>([]);

  totalSelected = computed(() => this.menuItems().filter(item => item.selected).length);
  totalAmount = computed(() => this.menuItems().reduce((sum, item) => item.selected ? sum + item.value : sum, 0));

  loadMenu() {
    this.http.get<MenuItem[]>(this.url).subscribe(data => {
      const items = data.map(i => ({ ...i, selected: false }));
      this.menuItems.set(items);
    });
  }

  toggleItem(id: number) {
    this.menuItems.update(items => 
      items.map(item => item.id === id ? { ...item, selected: !item.selected } : item)
    );
  }
}