import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngazovanaOsobaFormComponent } from './angazovana-osoba-form.component';

describe('AngazovanaOsobaFormComponent', () => {
  let component: AngazovanaOsobaFormComponent;
  let fixture: ComponentFixture<AngazovanaOsobaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngazovanaOsobaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngazovanaOsobaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
