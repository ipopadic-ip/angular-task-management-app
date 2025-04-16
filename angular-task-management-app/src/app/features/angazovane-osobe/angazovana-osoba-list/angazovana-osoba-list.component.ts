import { Component, OnInit } from '@angular/core';
import { AngazovanaOsobaService } from '../../../core/services/angazovana-osoba.service';
import { AngazovanaOsoba } from '../../../core/model/angazovana-osoba.model';
import { CommonModule } from '@angular/common';
import { AngazovanaOsobaFormComponent } from '../angazovana-osoba-form/angazovana-osoba-form.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-angazovana-osoba-list',
  imports: [CommonModule, AngazovanaOsobaFormComponent],
  templateUrl: './angazovana-osoba-list.component.html',
  styleUrl: './angazovana-osoba-list.component.css'
})
export class AngazovanaOsobaListComponent implements OnInit {
  angazovaneOsobe: AngazovanaOsoba[] = [];
  prikaziFormu = false;
  trenutnaAngazovanaOsoba: AngazovanaOsoba | null = null;

  constructor(private angazovanaOsobaService: AngazovanaOsobaService) {}

  ngOnInit(): void {
    this.ucitajAngazovaneOsobe();
  }

  ucitajAngazovaneOsobe(): void {
    this.angazovanaOsobaService.getAngazovaneOsobe().subscribe(data => {
      this.angazovaneOsobe = data;
    });
  }

  dodajAngazovanuOsobu(): void {
    this.trenutnaAngazovanaOsoba = null;
    this.prikaziFormu = true;
  }

  azurirajAngazovanuOsobu(angazovanaOsoba: AngazovanaOsoba): void {
    this.trenutnaAngazovanaOsoba = { ...angazovanaOsoba };
    this.prikaziFormu = true;
  }

  sacuvajAngazovanuOsobu(angazovanaOsoba: AngazovanaOsoba): void {
    if (angazovanaOsoba.id) {
      this.angazovanaOsobaService.updateAngazovanaOsoba(angazovanaOsoba).subscribe(() => {
        this.prikaziFormu = false;
        this.ucitajAngazovaneOsobe();
      });
    } else {
      this.angazovanaOsobaService.addAngazovanaOsoba(angazovanaOsoba).subscribe(() => {
        this.prikaziFormu = false;
        this.ucitajAngazovaneOsobe();
      });
    }
  }

  obrisiAngazovanuOsobu(id: number): void {
    this.angazovanaOsobaService.deleteAngazovanaOsoba(id).subscribe(() => {
      this.ucitajAngazovaneOsobe();
    });
  }
}
