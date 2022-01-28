import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './comp.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

transform(phoneBook: Book[], field: any): Book[] {
    if(!phoneBook) return [];
    if(!field) return phoneBook;
    return phoneBook.filter(car => 
      car.firstName.toLowerCase().includes(field.toLowerCase())||
      car.lastName.toLowerCase().includes(field.toLowerCase())||
      car.number.toLowerCase().includes(field.toLowerCase())
    
    );
  }
}


