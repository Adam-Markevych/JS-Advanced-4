import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})

export class CompComponent implements OnInit {

  public arrPhoneBook: Book[] = [
    {
      firstName: 'ivan',
      lastName: 'ivanov',
      number: '0687657876'
    }, 
    {
      firstName: 'petro',
      lastName: 'petriv',
      number: '0685467876'
    },
    {
      firstName: 'ira',
      lastName: 'tytar',
      number: '0686435678'
    },
    {
      firstName: 'olena',
      lastName: 'soroka',
      number: '0876534567'
    },
    {
      firstName: 'oleg',
      lastName: 'Oliynyk',
      number: '0686545456'
    }
  ]
  public check_name = /^[a-zA-z]{3,16}$/;
  public check_number = /^[0-9]{10}$/;

  public firsName: any;
  public lastName: any;
  public number: any;
  public field: any;
  public add = false;
  public edit = false;
  public saveIndex!: number;
  public type = 'asc';
  public type1 = 'asc1';
  public type2 = 'asc2';
  public disabledAdd = false;
  public btn_save = true;
  public btn_save_edit = false;
  public firstNameExp: any;
  public lastNameExp: any;
  public numberExp: any;
  constructor() { }

  ngOnInit(): void {
  }
  checkFirstName(): void{
    this.firstNameExp = this.check_name.test(this.firsName);
    if(this.firstNameExp){
      this.btn_save = false;
      this.btn_save_edit = false;
    } 
    else {
      this.btn_save = true;
      this.btn_save_edit = true;
    }
  }
  checkLastName(): void{
    this.lastNameExp = this.check_name.test(this.lastName);
    if(this.lastNameExp){
      this.btn_save = false;
      this.btn_save_edit = false;
    } 
    else {
      this.btn_save = true;
      this.btn_save_edit = true;
    }
  }
  checkNumber(): void{
    this.numberExp = this.check_number.test(this.number);
    if(this.numberExp){
      this.btn_save = false;
      this.btn_save_edit = false;
    } 
    else {
      this.btn_save = true;
      this.btn_save_edit = true;
    }
  }
  checkSearch(): void{
    if(this.field != 0) this.disabledAdd = true;
    else this.disabledAdd = false;
  }
  
  btnAdd(): void{
      this.add = true;
      this.edit = true; 
  }
 
  btnSave(): void{
    if(this.firsName.length != 0 && this.lastName.length != 0 && this.number.length != 0 
      && this.firstNameExp && this.numberExp && this.lastNameExp){
      this.btn_save = false;
      let obj =  {
        firstName: this.firsName,
        lastName: this.lastName,
        number: this.number
      }
      this.arrPhoneBook.push(obj);
      this.firsName = '';
      this.lastName = '';
      this.number = '';
      this.add = false;
    }
    else{
      this.btn_save = true;
    }
  }
  btnDelete(index: number): void{
    console.log('hello ', index);
    this.arrPhoneBook.splice(index, 1);
  }
  btnEdit(index: number): void{
    this.add = true;
    this.edit = false;
    this.saveIndex = index;
    this.firsName = this.arrPhoneBook[index].firstName;
    this.lastName = this.arrPhoneBook[index].lastName;
    this.number = this.arrPhoneBook[index].number;
  }
  btn_editSave(): void{
    if(this.firsName.length != 0 && this.lastName.length != 0 && this.number.length != 0 
      && this.firstNameExp && this.numberExp && this.lastNameExp){
    this.btn_save_edit = false;
      let newObj = {
        firstName: this.firsName,
        lastName: this.lastName,
        number: this.number
      }
      this.arrPhoneBook[this.saveIndex] = newObj;
      this.firsName = '';
      this.lastName = '';
      this.number = '';
      this.add = false;
      this.btn_save = true;
    }
  else{
    this.btn_save_edit = true;
  }
  }
  changeSort(type: string): void {
    this.type = type;
    console.log('hello')
  }
  changeSort1(type1: string): void {
    this.type1 = type1;
    console.log('hello');
  }
  changeSort2(type2: string): void {
    this.type2 = type2;
    console.log('hello');
  }
  btnClose(): void{
    this.add = false;
    this.edit = false; 
    this.firsName = '';
    this.lastName = '';
    this.number = '';
  }
}


export interface Book {
  firstName: string;
  lastName: string;
  number: string;
}

