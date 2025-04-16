import { Component, OnInit } from '@angular/core';
import { OsobaService } from '../../../core/services/osoba.service';
import { Osoba } from '../../../core/model/osoba.model';
import { CommonModule } from '@angular/common';
import { OsobaFormComponent } from '../osoba-form/osoba-form.component';

@Component({
  selector: 'app-osoba-list',
  imports: [CommonModule, OsobaFormComponent],
  templateUrl: './osoba-list.component.html',
  styleUrl: './osoba-list.component.css'
})
export class OsobaListComponent implements OnInit {
  osobe: Osoba[] = [];
  prikaziFormu = false;
  trenutnaOsoba: Osoba | null = null;

  constructor(private osobaService: OsobaService) {}

  ngOnInit(): void {
    this.ucitajOsobe();
  }

  ucitajOsobe(): void {
    this.osobaService.getOsobe().subscribe((data) => {
      this.osobe = data;
    });
  }

  dodajOsobu(): void {
    this.trenutnaOsoba = null;
    this.prikaziFormu = true;
  }

  azurirajOsobu(osoba: Osoba): void {
    this.trenutnaOsoba = { ...osoba };
    this.prikaziFormu = true;
  }

  sacuvajOsobu(osoba: Osoba): void {
    if (osoba.id) {
      this.osobaService.updateOsoba(osoba).subscribe(() => {
        this.prikaziFormu = false;
        this.ucitajOsobe();
      });
    } else {
      this.osobaService.getNextId().subscribe(nextId => {
        osoba.id = nextId;
        this.osobaService.addOsoba(osoba).subscribe(() => {
          this.prikaziFormu = false;
          this.ucitajOsobe();
        });
      });
    }
  }

  obrisiOsobu(id: number): void {
    this.osobaService.deleteOsoba(id).subscribe(() => {
      this.ucitajOsobe();
    });
  }
}
