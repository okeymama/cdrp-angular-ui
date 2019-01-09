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
  TrajectoryName:string;
  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http:Http,private router: Router, private  httpClient:  HttpClient){}

  private categoryUrl = 'https://cdrp-service.herokuapp.com/data';
  private categoryUrl1 = 'https://cdrp-service.herokuapp.com/getstudy';
  private categoryUrl2 = 'https://cdrp-service.herokuapp.com/getdetails';

  getProducts1(){
 
    return this.http.request(this.categoryUrl)
   
  }

  setid(id){
    this.id=id;
  }

  setTrajectoryName(name){
    this.TrajectoryName=name;
  }

  getstudy(){

    return this.http.request(this.categoryUrl1)
    }

  getdetails(){

      return this.http.request(this.categoryUrl2)
  }
  getProducts(){
 
    return this.http.request('https://cdrp-service.herokuapp.com/getdata?id='+this.id);
   
  }

}