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
  sideBarOpen : boolean;
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
    return this.http.post(this.URL + '/Login/', formDataLogin).toPromise()
    .then(res => this.User = res as User);  
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

  getReportData(guid)
  {  
    let myPar = new HttpParams().set('guid',guid);
    return this.http.get(this.URL + '/getReportData',{params:myPar});
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
