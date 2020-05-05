import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';


import {FormsModule, ReactiveFormsModule}from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { config } from 'process';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    FormsModule,
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config)
    
  ]
})
export class ContactModule { }
