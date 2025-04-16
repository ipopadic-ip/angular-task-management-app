import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AngazovanaOsoba } from '../../../core/model/angazovana-osoba.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-angazovana-osoba-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './angazovana-osoba-form.component.html',
  styleUrl: './angazovana-osoba-form.component.css'
})
export class AngazovanaOsobaFormComponent implements OnInit, OnChanges {
  @Input() angazovanaOsoba: AngazovanaOsoba | null = null;
  @Output() sacuvaj = new EventEmitter<AngazovanaOsoba>();

  angazovanaOsobaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.angazovanaOsobaForm = this.fb.group(
      {
        id: [null],
        pocetak: ['', Validators.required],
        kraj: [{ value: '', disabled: true }, Validators.required]
      },
      { validators: this.datumValidator }
    );

    // Kada se promeni "pocetak", omogućiti unos u "kraj"
    this.angazovanaOsobaForm.get('pocetak')?.valueChanges.subscribe(value => {
      if (value) {
        this.angazovanaOsobaForm.get('kraj')?.enable();
      } else {
        this.angazovanaOsobaForm.get('kraj')?.disable();
      }
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['angazovanaOsoba'] && this.angazovanaOsoba) {
      this.angazovanaOsobaForm.patchValue(this.angazovanaOsoba);
      if (this.angazovanaOsoba.pocetak) {
        this.angazovanaOsobaForm.get('kraj')?.enable();
      }
    }
  }

  submit(): void {
    if (this.angazovanaOsobaForm.valid) {
      this.sacuvaj.emit(this.angazovanaOsobaForm.value);
    }
  }

  datumValidator(group: AbstractControl): ValidationErrors | null {
    const pocetak = group.get('pocetak')?.value;
    const kraj = group.get('kraj')?.value;
    return pocetak && kraj && new Date(kraj) < new Date(pocetak)
      ? { datumNeispravan: true }
      : null;
  }
}
