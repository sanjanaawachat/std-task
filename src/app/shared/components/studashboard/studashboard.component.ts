import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../models/std';
@Component({
  selector: 'app-studashboard',
  templateUrl: './studashboard.component.html',
  styleUrls: ['./studashboard.component.scss']
})
export class StudashboardComponent implements OnInit {
  

  stdArray: Array<Istd>=[];
  generateuuid():string{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }

  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  constructor() { }
 
  ngOnInit(): void {
  }

  // stdArray: any[] = []; // Replace `any` with the actual type of student objects

  onstuAdd(){
    let newstu:Istd={
     
      Id: this.generateuuid(),
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value
    }
    this.stdArray.push(newstu);
    this.fname.nativeElement.value='';
    this.lname.nativeElement.value='';
    this.email.nativeElement.value='';
    this.contact.nativeElement.value='';

console.log("Todo item added successfully:", newstu);
  }
}
