import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './comp.component';
@Pipe({
  name: 'sort1'
})
export class Sort1Pipe implements PipeTransform {

  transform(phoneBook: Book[], sort:any): Book[] {
    if(!phoneBook) return [];
    if(!sort) return phoneBook;
    if(sort === 'asc1') return phoneBook.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))
    return phoneBook.sort((a, b) => (a.lastName < b.lastName) ?  1 : ((a.lastName > b.lastName) ? -1 : 0))
  }

}
