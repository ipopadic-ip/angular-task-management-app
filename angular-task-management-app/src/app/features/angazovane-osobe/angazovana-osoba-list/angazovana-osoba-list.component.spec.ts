import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngazovanaOsobaListComponent } from './angazovana-osoba-list.component';

describe('AngazovanaOsobaListComponent', () => {
  let component: AngazovanaOsobaListComponent;
  let fixture: ComponentFixture<AngazovanaOsobaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngazovanaOsobaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngazovanaOsobaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
