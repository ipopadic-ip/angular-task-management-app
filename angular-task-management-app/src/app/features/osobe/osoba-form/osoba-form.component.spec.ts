import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaFormComponent } from './osoba-form.component';

describe('OsobaFormComponent', () => {
  let component: OsobaFormComponent;
  let fixture: ComponentFixture<OsobaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
