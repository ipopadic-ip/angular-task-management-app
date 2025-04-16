import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Osoba } from '../../../core/model/osoba.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-osoba-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './osoba-form.component.html',
  styleUrl: './osoba-form.component.css'
})
export class OsobaFormComponent implements OnChanges {
  @Input() osoba: Osoba | null = null;
  @Output() sacuvaj = new EventEmitter<Osoba>();

  osobaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.osobaForm = this.fb.group({
      id: [null],
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['osoba'] && this.osoba) {
      this.osobaForm.patchValue(this.osoba);
    }
  }

  submit(): void {
    if (this.osobaForm.valid) {
      this.sacuvaj.emit(this.osobaForm.value);
    }
  }
}
