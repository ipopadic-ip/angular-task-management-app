import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadatakStatusComponent } from './zadatak-status.component';

describe('ZadatakStatusComponent', () => {
  let component: ZadatakStatusComponent;
  let fixture: ComponentFixture<ZadatakStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZadatakStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZadatakStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
