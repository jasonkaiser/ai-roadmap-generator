import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ROLES } from './../../data/roles';
import { RoleCard } from './../../components/role-card/role-card';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing',
  imports: [RoleCard, CommonModule, FontAwesomeModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

    arrowRight = faArrowRightLong;
    roles = ROLES;

}
