import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaListComponent } from './osoba-list.component';

describe('OsobaListComponent', () => {
  let component: OsobaListComponent;
  let fixture: ComponentFixture<OsobaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
