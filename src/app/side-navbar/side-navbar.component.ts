import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  constructor(private router: Router) { }

  arrow:string='arrow_forward_ios';
  arrowClose:string='arrow_back_ios';
  isExpanded:boolean=true;
  check:boolean=true;

  ngOnInit() {
    console.log("in nav bar");
  }

  changeIcon(){
    this.isExpanded = !this.isExpanded;
    console.log(document.getElementById('side-content').style.marginLeft);
    document.getElementById('side-content').style.marginLeft = this.isExpanded?'80px':'200px';
    console.log(document.getElementById('side-content').style.width);
    if(this.arrow == 'arrow_forward_ios')
    {
      this.arrow = '';  
    }
    else
    {
      this.arrow = 'arrow_forward_ios';
    }

  }

  changeIcon1(){
    this.isExpanded = !this.isExpanded;
    console.log(document.getElementById('side-content').style.marginLeft);
    document.getElementById('side-content').style.marginLeft = this.isExpanded?'65px':'200px';
    console.log(document.getElementById('side-content').style.width);
    
    if(this.arrow == 'arrow_forward_ios')
    {
      this.arrow = '';  
    }
    else
    {
      this.arrow = 'arrow_forward_ios';
    }

  }

  changeBackgorund()
  {
    console.log("in change color");
    console.log(document.getElementById('side-content').style.backgroundColor);
    document.getElementById('side-content').style.backgroundColor = "white";
    console.log(document.getElementById('side-content').style.backgroundColor);
  }

  changeBackgorund1()
  {
    console.log("in change color");
    console.log(document.getElementById('side-content').style.backgroundColor);
    document.getElementById('side-content').style.backgroundColor = "rgb(242,242,242)";
    console.log(document.getElementById('side-content').style.backgroundColor);
  }

  navigate()
  {
    this.router.navigate(['study']);
  }
}
