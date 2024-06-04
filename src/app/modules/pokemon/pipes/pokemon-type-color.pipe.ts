import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
    switch (type) {
      case 'Feu':
        color = 'badge bg-danger';
        break;
      case 'Eau':
        color = 'badge bg-primary';
        break;
      case 'Plante':
        color = 'badge bg-success';
        break;
      case 'Insecte':
        color = 'badge bg-warning';
        break;
      case 'Normal':
        color = 'badge bg-info';
        break;
      case 'Vol':
        color = 'badge bg-light';
        break;
      case 'Poison':
        color = 'badge bg-primary';
        break;
      case 'Fée':
        color = 'badge bg-primary';
        break;
      case 'Psy':
        color = 'badge bg-primary';
        break;
      case 'Electrik':
        color = 'badge bg-primary';
        break;
      case 'Combat':
        color = 'badge bg-primary';
        break;
      default:
        color = 'badge bg-primary';
        break;
    }
    return color;
  }

}
