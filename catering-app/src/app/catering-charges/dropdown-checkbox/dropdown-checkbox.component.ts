
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dropdown-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-checkbox.component.html',
  styleUrls: ['./dropdown-checkbox.component.css']
})
export class DropdownCheckboxComponent {
  cateringTypes = [
    'Morning Tea/Coffee',
    'Breakfast',
    'Lunch',
    'Snacks',
    'Dinner',
    'Ice Cream',
    'Water Bottle'
  ];


  selectedOptions: string[] = [];


  @Output() selectedChange = new EventEmitter<string[]>();


  onCheckboxChange(event: Event, option: string) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions = this.selectedOptions.filter(opt => opt !== option);
    }
    this.selectedChange.emit(this.selectedOptions);
  }


  reset() {
    this.selectedOptions = [];
    this.selectedChange.emit(this.selectedOptions);
  }
}
