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

  getCustomers(guid: any)
  {   
    let myPar = new HttpParams().set('guid',guid);
    return this.http.get(this.URL + '/getCustomers', {params:myPar}); 
  }

  getSuppliers(guid: any)
  {   
    let myPar = new HttpParams().set('guid',guid);
    return this.http.get(this.URL + '/getSuppliers', {params:myPar}); 
  }

  getProducts(guid: any)
  {   
    let myPar = new HttpParams().set('guid',guid);
    return this.http.get(this.URL + '/getProducts', {params:myPar});   
  }

  getOrders(guid: any)
  {   
    let myPar = new HttpParams().set('guid',guid);
    return this.http.get(this.URL + '/getOrders', {params:myPar}); 
  }

  Register(formDataRegister : User)
  {
      return this.http.post(this.URL + '/Register/', formDataRegister);
  }

  User: User;
  Login(formDataLogin: User)
  {
    return this.http.post<User>(this.URL + '/Login/', formDataLogin).toPromise()
    .then(res => this.User = res as User);  
  }

  validUser: any;

  isLoggedIn(guid: string)
  {
    let myPar = new HttpParams().set('guid',guid);
    return this.http.get(this.URL + '/isLoggedIn/' ,{params:myPar}).toPromise()
    .then(res => this.validUser as any)
    .then(x => console.log("here: " + this.validUser))
  }

  Logout(guid)
  {
      let myPar = new HttpParams().set('guid',guid);
      return this.http.get(this.URL + '/Logout/',{params:myPar});
  }

  updateHeaderEmitter = new EventEmitter();
  updateHeaderSub: Subscription;
  updateHeader() {
    this.updateHeaderEmitter.emit();
  }

  updateSidebarEmitter = new EventEmitter();
  updateSidebarSub: Subscription;
  updateSidebar() {
    this.updateSidebarEmitter.emit();
  }

  listDefaultData : ReportData[];
  getReportData()
  {  
    return this.http.get(this.URL + '/getReportData').toPromise().then(res=> this.listDefaultData = res as ReportData[]);
  }

  GetTitles(){
    return this.http.get(this.URL + '/getTitle');
  }

  GetGender(){
    return this.http.get(this.URL + '/getGender');
  }

  GetUserTypes(){
    return this.http.get(this.URL + '/getUserTypes');
  }



}
