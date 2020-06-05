import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { DefaultService } from 'src/app/shared/services/default.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  
  constructor(public service: DefaultService, public route: Router) { }

  ngOnInit()
  {  
    this.service.updateHeader();
    this.service.updateSidebar();
    this.service.User == null;
    this.resetForm();
  }


  errorMessage: string;
  Message: string;
  formDataLogin : User;
  showError= false;
  showMessage= false;

  Login(form : NgForm){
    this.service.Login(form.value).then(
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
          this.Message = res.Message;
          this.showMessage = true;
          this.showError = false; 
          sessionStorage.setItem('accessToken', this.service.User.GUID)
          localStorage.setItem('roleID', this.service.User.TypeID.toString())        
          this.service.updateSidebar();
          this.service.updateHeader();     
          this.service.sideBarOpen = true;
          this.route.navigate(['home'])
        }
    });
    }  

  resetForm(form? : NgForm){

    if (form != null)
    form.resetForm();
    this.formDataLogin = {
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
}



