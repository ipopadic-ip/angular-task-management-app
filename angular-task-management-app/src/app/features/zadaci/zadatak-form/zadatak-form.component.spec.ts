import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadatakFormComponent } from './zadatak-form.component';

describe('ZadatakFormComponent', () => {
  let component: ZadatakFormComponent;
  let fixture: ComponentFixture<ZadatakFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZadatakFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZadatakFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
