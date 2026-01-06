import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-role-card',
  imports: [NgClass, FontAwesomeModule],
  standalone: true,
  templateUrl: './role-card.html',
  styleUrl: './role-card.css',
})
export class RoleCard {

    @Input() role: string = '';
    @Input() color: string = 'orange';
    @Input() icon: string = '';

    @Output() roleSelected = new EventEmitter<string>();


    colorClasses: Record<string, string> = {

      red: 'text-red-500 bg-red-500/20 hover:bg-red-500/30',
      blue: 'text-blue-500 bg-blue-500/20 hover:bg-blue-500/30',
      purple: 'text-purple-500 bg-purple-500/20 hover:bg-purple-500/30',
      yellow: 'text-yellow-500 bg-yellow-500/20 hover:bg-yellow-500/30',
      orange: 'text-orange-500 bg-orange-500/20 hover:bg-orange-500/30',

    };

    getColorClass(color: string): string{
      return this.colorClasses[color] || this.colorClasses['orange'];
    }

    onRoleClick(): void {

        this.roleSelected.emit(this.role);

    }

}
