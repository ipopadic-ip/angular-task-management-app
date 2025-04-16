import { Routes } from '@angular/router';
// import { KlijentListComponent } from './features/klijenti/components/klijent-list/klijent-list.component';
// import { RacunListComponent } from './features/racuni/components/racun-list/racun-list.component';
import { OsobaListComponent } from './features/osobe/osoba-list/osoba-list.component';
import { ZadatakListComponent } from './features/zadaci/zadatak-list/zadatak-list.component';
import { AngazovanaOsobaListComponent } from './features/angazovane-osobe/angazovana-osoba-list/angazovana-osoba-list.component';


export const routes: Routes = [
    { path: '', component: OsobaListComponent },
    { path: 'zadaci', component: ZadatakListComponent },
    { path: 'angazovane-osobe', component: AngazovanaOsobaListComponent }
];
