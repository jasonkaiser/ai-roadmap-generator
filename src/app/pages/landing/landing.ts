import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1RoleSelectionComponent } from './../../components/step-one/step-one';
import { Step2UserDetailsComponent } from './../../components/step-two/step-two';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, Step1RoleSelectionComponent, Step2UserDetailsComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  currentStep: number = 1;
  role: string = '';
  userDetails: string = '';

  constructor(private cdr: ChangeDetectorRef) {} 

  onRoleSelected(role: string): void {
    this.role = role;
    
    setTimeout(() => {
      this.currentStep = 2;
      this.cdr.detectChanges();
      
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
      }, 100);
    }, 300);
  }

  onSkipClicked(): void {
    console.log('User skipped step 2');
    this.currentStep = 3; 
  }

  onContinueClicked(details: string): void {
    this.userDetails = details;
    console.log('User details:', details);
    console.log('Role:', this.role);

    this.currentStep = 3; 
  }
}