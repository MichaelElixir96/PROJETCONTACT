import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/services/authentification/authentification.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email:AbstractControl;
name2:AbstractControl;
number:AbstractControl;
Name:AbstractControl;

LoginForm:FormGroup;
loginUser:LoginUser;
formGroup:FormGroup;
constructor(private formBuilder:FormBuilder,private authService: AuthentificationService) {
  this.formGroup=this.formBuilder.group({
    
    number:[null,[Validators.minLength(8)]]
  }) ;

  
  this.number=this.LoginForm.controls.number;
}

  ngOnInit() {
  }
  onSubmit(){
    
    console.log(this.LoginForm.value.number);
    this.loginUser={
      
      number:this.formGroup.value.number
    }
    this.authService.onLogin(this.loginUser).then(response=>{
      console.log(response);
    });
  
  }
}
