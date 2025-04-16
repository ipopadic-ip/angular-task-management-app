import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Zadatak } from '../../../core/model/zadatak.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zadatak-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './zadatak-form.component.html',
  styleUrl: './zadatak-form.component.css'
})
export class ZadatakFormComponent implements OnChanges {
  @Input() zadatak: Zadatak | null = null;
  @Output() sacuvaj = new EventEmitter<Zadatak>();

  zadatakForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.zadatakForm = this.fb.group({
      id: [null],
      naziv: ['', Validators.required],
      opis: ['', Validators.required],
      rok: ['', Validators.required],
      prioritet: [1, Validators.required],
      status: [0, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['zadatak'] && this.zadatak) {
      this.zadatakForm.patchValue(this.zadatak);
    }
  }

  submit(): void {
    if (this.zadatakForm.valid) {
      this.sacuvaj.emit(this.zadatakForm.value);
    }
  }
}
