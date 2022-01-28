import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './comp.component';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(phoneBook: Book[], sort:any): Book[] {
    if(!phoneBook) return [];
    if(!sort) return phoneBook;
    
    if(sort === 'asc') return phoneBook.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    return phoneBook.sort((a, b) => (a.firstName < b.firstName) ?  1 : ((a.firstName > b.firstName) ? -1 : 0))
  }
}


