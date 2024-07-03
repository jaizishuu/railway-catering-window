import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DropdownCheckboxComponent } from './dropdown-checkbox/dropdown-checkbox.component';

interface AutoPopulatedCharge {
  fromStn: string;
  toStn: string;
  class: string;
  validFromDate: string;
  validUptoDate: string;
  morningTeaCoffee: number;
  breakfast: number;
  lunch: number;
  snacks: number;
  dinner: number;
  iceCream: number;
  waterBottle: number;
  gst: number;
}

@Component({
  selector: 'app-catering-charges',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownCheckboxComponent],
  templateUrl: './catering-charges.component.html',
  styleUrls: ['./catering-charges.component.css']
})
export class CateringChargesComponent {
  @ViewChild(DropdownCheckboxComponent) dropdownCheckbox: DropdownCheckboxComponent | undefined;

  selectedCateringType: string[] = [];
  charges: string = '';
  chargesType: string = '';
  separateCharges: { [key: string]: number } = {};

  autoPopulatedCharges: AutoPopulatedCharge[] = [
    { fromStn: 'A', toStn: 'B', class: '1A', validFromDate: '10-07-2024', validUptoDate: '10-07-2025', morningTeaCoffee: 0, breakfast: 0, lunch: 0, snacks: 0, dinner: 0, iceCream: 0, waterBottle: 0, gst: 0 },
    { fromStn: 'B', toStn: 'C', class: '1A', validFromDate: '10-07-2024', validUptoDate: '10-07-2025', morningTeaCoffee: 0, breakfast: 0, lunch: 0, snacks: 0, dinner: 0, iceCream: 0, waterBottle: 0, gst: 0 },
    { fromStn: 'C', toStn: 'A', class: '1A', validFromDate: '10-07-2024', validUptoDate: '10-07-2025', morningTeaCoffee: 0, breakfast: 0, lunch: 0, snacks: 0, dinner: 0, iceCream: 0, waterBottle: 0, gst: 0 },
  ];

  onCateringTypeChange(selected: string[]) {
    this.selectedCateringType = selected;
    if (this.charges === 'auto') {
      this.updateAutoPopulatedCharges();
    }
  }

  updateAutoPopulatedCharges() {
    this.autoPopulatedCharges.forEach(row => {
      row.morningTeaCoffee = this.selectedCateringType.includes('Morning Tea/Coffee') ? 1 : 0;
      row.breakfast = this.selectedCateringType.includes('Breakfast') ? 1 : 0;
      row.lunch = this.selectedCateringType.includes('Lunch') ? 1 : 0;
      row.snacks = this.selectedCateringType.includes('Snacks') ? 1 : 0;
      row.dinner = this.selectedCateringType.includes('Dinner') ? 1 : 0;
      row.iceCream = this.selectedCateringType.includes('Ice Cream') ? 1 : 0;
      row.waterBottle = this.selectedCateringType.includes('Water Bottle') ? 1 : 0;
    });
  }

  onSubmit(form: NgForm) {
    console.log('Form submitted', form.value);

    // Reset the form and other states
    form.resetForm();
    this.selectedCateringType = [];
    this.charges = '';
    this.chargesType = '';
    this.separateCharges = {};

    // Reset the dropdown checkboxes
    if (this.dropdownCheckbox) {
      this.dropdownCheckbox.reset();
    }
  }
}
