import { Component } from '@angular/core';
import { TraitementComponent } from '../traitement/traitement.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [TraitementComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent {}
