import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './comp.component';
@Pipe({
  name: 'sort2'
})
export class Sort2Pipe implements PipeTransform {

  transform(phoneBook: Book[], sort:any): Book[] {
    if(!phoneBook) return [];
    if(!sort) return phoneBook;
    if(sort === 'asc2') return phoneBook.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0))
    return phoneBook.sort((a, b) => (a.number < b.number) ?  1 : ((a.number > b.number) ? -1 : 0))
  }

}
