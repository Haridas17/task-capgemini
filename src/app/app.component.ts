import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  countryForm: FormGroup;
  countries: string[] = ['India', 'China', 'America', 'Russia', 'Japan'];
  selectedCountries: any[] = [];

  constructor(private fb: FormBuilder) {
    this.countryForm = this.fb.group({
      country: ['', Validators.required]
    });
  }

  addCountry(): void {
    const selectedCountry = this.countryForm.get('country')?.value;

    if (selectedCountry && !this.selectedCountries.some(c => c.country === selectedCountry)) {
      this.selectedCountries.push({
        country: selectedCountry,
        input1: 0,
        input2: 0,
        input3: 0, // Sum of input1 + input2
        input4: 0,
        input5: 0,
        input6: 0, // Sum of input4 + input5
        input7: 0,
        input8: 0,
        input9: 0  // Sum of input7 + input8
      });
      this.countryForm.reset(); // Reset form after adding
    } else {
      alert('Please select a valid country or avoid duplicates.');
    }
  }

  // Update sums dynamically
  updateSum(country: any): void {
    country.input3 = country.input1 + country.input2; // Sum of input1 + input2
    country.input6 = country.input4 + country.input5; // Sum of input4 + input5
    country.input9 = country.input7 + country.input8; // Sum of input7 + input8
  }

  object(index: number) {
    const country = this.selectedCountries[index];
    console.log(this.selectedCountries);
    // Perform your required action with the selected country
  }
  
}
