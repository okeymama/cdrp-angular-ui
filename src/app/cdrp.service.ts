import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { HttpMethod } from '../../node_modules/blocking-proxy/built/lib/webdriver_commands';
import { Headers, Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Router} from '@angular/router';


@Injectable()
export class CdrpService {

  //id:string="MZ-123076";
  id:string;
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http:Http,private router: Router, private  httpClient:  HttpClient){}

  private categoryUrl = 'http://localhost:8080/data';
  private categoryUrl1 = 'http://localhost:8080/getstudy';
  private categoryUrl2 = 'http://localhost:8080/getdetails';

  getProducts1(){
 
    return this.http.request(this.categoryUrl)
   
  }

  setid(id){
    this.id=id;
  }

  getstudy(){

    return this.http.request(this.categoryUrl1)
    }

  getdetails(){

      return this.http.request(this.categoryUrl2)
  }
  getProducts(){
 
    return this.http.request('http://localhost:8080/getdata?id='+this.id);
   
  }

}