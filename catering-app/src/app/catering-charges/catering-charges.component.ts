import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DropdownCheckboxComponent } from './dropdown-checkbox/dropdown-checkbox.component';




interface CateringCharge {
  from: string;
  to: string;
  class: string;
  validFrom: string;
  validUpto: string;
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




  autoPopulatedCharges: CateringCharge[] = [
    { from: 'A', to: 'B', class: '', validFrom: '05-07-2024', validUpto: '05-07-2030', morningTeaCoffee: 0, breakfast: 0, lunch: 0, snacks: 0, dinner: 0, iceCream: 0, waterBottle: 0, gst: 0 },
    { from: 'B', to: 'C', class: '', validFrom: '05-07-2024', validUpto: '05-07-2030', morningTeaCoffee: 0, breakfast: 0, lunch: 0, snacks: 0, dinner: 0, iceCream: 0, waterBottle: 0, gst: 0 },
    { from: 'C', to: 'A', class: '', validFrom: '05-07-2024', validUpto: '05-07-2030', morningTeaCoffee: 0, breakfast: 0, lunch: 0, snacks: 0, dinner: 0, iceCream: 0, waterBottle: 0, gst: 0 }
  ];




  onCateringTypeChange(selected: string[]) {
    this.selectedCateringType = selected;
    this.updateAutoPopulatedCharges();
    this.initializeSeparateCharges();
  }




  updateAutoPopulatedCharges() {
    this.autoPopulatedCharges.forEach(charge => {
      charge.morningTeaCoffee = this.selectedCateringType.includes('Morning Tea/Coffee') ? 1 : 0;
      charge.breakfast = this.selectedCateringType.includes('Breakfast') ? 1 : 0;
      charge.lunch = this.selectedCateringType.includes('Lunch') ? 1 : 0;
      charge.snacks = this.selectedCateringType.includes('Snacks') ? 1 : 0;
      charge.dinner = this.selectedCateringType.includes('Dinner') ? 1 : 0;
      charge.iceCream = this.selectedCateringType.includes('Ice Cream') ? 1 : 0;
      charge.waterBottle = this.selectedCateringType.includes('Water Bottle') ? 1 : 0;
      charge.gst = this.selectedCateringType.length > 0 ? 1 : 0; // Assuming GST applies if any catering type is selected
    });
  }




  initializeSeparateCharges() {
    this.separateCharges = {};
    this.selectedCateringType.forEach(type => {
      this.separateCharges[type] = 0;
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
