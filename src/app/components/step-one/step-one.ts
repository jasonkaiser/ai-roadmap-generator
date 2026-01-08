import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { ROLES } from '../../data/roles';
import { RoleCard } from '../role-card/role-card';

@Component({
  selector: 'app-step1-role-selection',
  standalone: true,
  imports: [RoleCard, CommonModule, FontAwesomeModule],
  templateUrl: './step-one.html',
  styleUrl: './step-one.css'
})
export class Step1RoleSelectionComponent {
  arrowRight = faArrowRightLong;
  roles = ROLES;
  isTransitioning: boolean = false;

  @Output() roleSelected = new EventEmitter<string>();

  selectRole(role: string): void {
    this.isTransitioning = true;

    setTimeout(() => {
      this.roleSelected.emit(role);
    }, 500);
  }
}