import { Component, OnInit } from '@angular/core';
import {Contact,contacts} from './contact-data';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsData:Contact[];

  constructor() { 

    this.contactsData=contacts;
  }

  ngOnInit(): void {
  }

}
