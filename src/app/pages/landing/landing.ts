import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { ROLES } from './../../data/roles';
import { RoleCard } from './../../components/role-card/role-card';


// Task: Organize steps in each page not one 


@Component({
  selector: 'app-landing',
  imports: [RoleCard, CommonModule, FontAwesomeModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
    arrowRight = faArrowRightLong;
    roles = ROLES;
    currentStep: number = 1;
    role: string = '';
    isTransitioning: boolean = false;

    constructor(private cdr: ChangeDetectorRef) {} 

    selectRole(role: string): void {
      this.role = role;
      this.isTransitioning = true; 

      setTimeout(() => {
        this.currentStep++;
        this.cdr.detectChanges();  
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth'});
        }, 100);
      }, 500);
      
      console.log('selectRole called with:', role);
      console.log('currentStep BEFORE:', this.currentStep);
    }
}