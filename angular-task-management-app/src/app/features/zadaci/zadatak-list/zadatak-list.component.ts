import { Component, OnInit } from '@angular/core';
import { ZadatakService } from '../../../core/services/zadatak.service';
import { Zadatak } from '../../../core/model/zadatak.model';
import { CommonModule } from '@angular/common';
import { ZadatakFormComponent } from '../zadatak-form/zadatak-form.component';
import { ZadatakStatusComponent } from '../zadatak-status/zadatak-status.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zadatak-list',
  imports: [CommonModule, FormsModule, ZadatakFormComponent, ZadatakStatusComponent],
  templateUrl: './zadatak-list.component.html',
  styleUrl: './zadatak-list.component.css'
})
export class ZadatakListComponent implements OnInit {
  zadaci: Zadatak[] = [];
  prikaziFormu = false;
  trenutniZadatak: Zadatak | null = null;
  sortOrder: 'asc' | 'desc' = 'asc';
  globalBoja: string = '#27ae60';

  constructor(private zadatakService: ZadatakService) {}

  ngOnInit(): void {
    this.ucitajZadatke();
  }

  ucitajZadatke(): void {
    this.zadatakService.getZadaci().subscribe((data) => {
      this.zadaci = data;
    });
  }

  sortirajPoPrioritetu(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.zadaci.sort((a, b) => 
      this.sortOrder === 'asc' ? Number(a.prioritet) - Number(b.prioritet) : Number(b.prioritet) - Number(a.prioritet)
    );
  }  

  dodajZadatak(): void {
    this.trenutniZadatak = null;
    this.prikaziFormu = true;
  }

  azurirajZadatak(zadatak: Zadatak): void {
    this.trenutniZadatak = { ...zadatak };
    this.prikaziFormu = true;
  }

  sacuvajZadatak(zadatak: Zadatak): void {
    if (zadatak.id) {
      this.zadatakService.updateZadatak(zadatak).subscribe(() => {
        this.prikaziFormu = false;
        this.ucitajZadatke();
      });
    } else {
      this.zadatakService.getNextId().subscribe(nextId => {
        zadatak.id = nextId;
        this.zadatakService.addZadatak(zadatak).subscribe(() => {
          this.prikaziFormu = false;
          this.ucitajZadatke();
        });
      });
    }
  }

  obrisiZadatak(id: number): void {
    this.zadatakService.deleteZadatak(id).subscribe(() => {
      this.ucitajZadatke();
    });
  }
}
