import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/shared/services/default.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { UserRole } from 'src/app/shared/models/user-role';
import { Title } from '@angular/platform-browser';
import { Gender } from 'src/app/shared/models/gender';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public service: DefaultService, public route: Router) { }

  ngOnInit()
  {
    this.resetForm();
    this.service.GetUserTypes().toPromise().then(res=> this.listUserTypes = res as UserRole[]);
    this.service.GetGender().toPromise().then(res=> this.listGender = res as Gender[]);
    this.service.GetTitles().toPromise().then(res=> this.listTitles = res as Title[]);
  }

  listGender : Gender[];
  listTitles : Title[];
  listUserTypes : UserRole[];

  resetForm(form? : NgForm){
    if (form != null)
    form.resetForm();
    this.formDataRegister = {
      UserID : null,
      UserEmail : null,
      UserPassword :null,
      TypeID :null,
      GUID : null,
      GUIDExpiry : null,
      Name : null,
      Surname : null,
      DOB : null,
      GenderID : null,
      TitleID : null,  
      Type: null,
      Gender: null,
      Title: null,
      Orders: null
    }
  }

  formDataRegister : User;
  errorMessage: string;
  Message: string;
  showError= false;
  showMessage= false;
  onRegister(form : NgForm){
    this.service.Register(form.value).subscribe(
      (res: any) => {        
        if (res.Error)  {
          this.errorMessage = res.Error;
          this.showError = true; 
          this.showMessage = false;
          setTimeout(() => {
            this.showError = false;
          }, 2000)
        }     
        else{
          this.route.navigate(['login'])
          this.Message = res.Message;
          this.showMessage = true;
          this.showError = false; 
        }
    });
    }
  }

