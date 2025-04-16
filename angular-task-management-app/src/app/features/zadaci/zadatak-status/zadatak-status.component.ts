import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zadatak-status',
  imports: [CommonModule, FormsModule],
  templateUrl: './zadatak-status.component.html',
  styleUrl: './zadatak-status.component.css'
})
export class ZadatakStatusComponent {
  @Input() status: number = 0;
  @Input() boja: string = '#3498db';

  get popunjeniKvadrati(): number {
    return Math.round(this.status * 10);
  }

  get kvadrati(): boolean[] {
    return Array(10).fill(false).map((_, i) => i < this.popunjeniKvadrati);
  }
}
