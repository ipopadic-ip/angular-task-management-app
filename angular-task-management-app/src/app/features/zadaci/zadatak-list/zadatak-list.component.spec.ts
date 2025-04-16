import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadatakListComponent } from './zadatak-list.component';

describe('ZadatakListComponent', () => {
  let component: ZadatakListComponent;
  let fixture: ComponentFixture<ZadatakListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZadatakListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZadatakListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
