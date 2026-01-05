import { Landing } from './pages/landing/landing';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLayerGroup, faPalette, faServer, faShieldHalved, faGears } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Landing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nextstep-dev');
  
  constructor(library: FaIconLibrary) {
    library.addIcons(faLayerGroup, faPalette, faServer, faShieldHalved, faGears);
  }
}