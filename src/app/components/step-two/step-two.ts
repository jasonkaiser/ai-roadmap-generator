import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-step2-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './step-two.html',
  styleUrl: './step-two.css'
})
export class Step2UserDetailsComponent {
  arrowRight = faArrowRightLong;
  userDetails: string = '';

  @Input() role: string = '';
  @Output() skipClicked = new EventEmitter<void>();
  @Output() continueClicked = new EventEmitter<string>();

  skip(): void {
    this.skipClicked.emit();
  }

  continue(): void {
    this.continueClicked.emit(this.userDetails);
  }
}