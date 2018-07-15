import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterName'})

export class FilterNamePipe implements PipeTransform {
  transform(items : any[], searchText : string) : any[] {
    if (!items) 
      return [];
    if (!searchText) 
      return items;
    
    searchText = searchText.toLowerCase();

    return items.filter(it => `${it.Driver.givenName}${it.Driver.familyName}${it.Constructors[0].name}`
        .toLowerCase().includes(searchText));
  }
}