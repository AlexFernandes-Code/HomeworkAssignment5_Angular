import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpParams, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ReportData } from '../models/report-data';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  readonly URL = "http://localhost:59623/api";
  sideBarOpen = false;
  constructor(private http: HttpClient,  public route: Router) { }

  getCustomers()
  {   
    return this.http.get(this.URL + '/getCustomers'); 
  }

  getSuppliers()
  {   
    return this.http.get(this.URL + '/getSuppliers'); 
  }

  getProducts()
  {   
    return this.http.get(this.URL + '/getProducts'); 
  }

  getOrders()
  {   
    return this.http.get(this.URL + '/getOrders'); 
  }

  User: User;
  Login(formDataLogin: User)
  {
    return this.http.post<User>(this.URL + '/Login/', formDataLogin).toPromise()
    .then(res => this.User = res as User);  
  }

  validUser: boolean;

  isLoggedIn(guid: any)
  {
    let myPar = new HttpParams().set('guid',guid);
    return this.http.get(this.URL + '/isLoggedIn/' ,{params:myPar}).subscribe(res => this.validUser as boolean);
  }

  Logout(guid)
  {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.get(this.URL + '/Logout/',{params:myPar});
  }

  updateDataInvoke = new EventEmitter();
  subsVar: Subscription;

  update() {
    this.updateDataInvoke.emit();
  }

  listDefaultData : ReportData[];
  getReportData()
  {  
    return this.http.get(this.URL + '/getReportData').toPromise().then(res=> this.listDefaultData = res as ReportData[]);
  }
}
