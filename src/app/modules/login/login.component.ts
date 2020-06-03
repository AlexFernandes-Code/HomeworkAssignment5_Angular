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
    this.resetForm();
  }
 
  formDataLogin : User;

  Login(form : NgForm){
    this.service.Login(form.value)
    .then(rez =>{     
        if (this.service.User != null){
          localStorage.setItem('accessToken', this.service.User.GUID)
          this.route.navigate(['home']);
          this.service.validUser = true;
          this.service.update();
          this.service.getReportData();
        }
        else{
          console.log('Login failed');
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
      TitleID : null
    }
  }
}



