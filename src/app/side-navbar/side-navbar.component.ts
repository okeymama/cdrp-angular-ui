import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  constructor(private router: Router) {
  }

  arrow = 'arrow_forward_ios';
  arrowClose = 'arrow_back_ios';
  isExpanded = true;
  check = true;

  ngOnInit() {
    console.log('in nav bar');
    if (this.router.url === '/nav/study') {
      console.log(this.router.url);
      document.getElementById('side-content').style.backgroundColor = 'rgb(242,242,242)';
    } else {
      document.getElementById('side-content').style.backgroundColor = 'white';
    }
    console.log(this.router.url);
  }

  changeIcon() {
    this.isExpanded = !this.isExpanded;
    console.log(document.getElementById('side-content').style.marginLeft);
    document.getElementById('side-content').style.marginLeft = '190px';
    console.log(document.getElementById('side-content').style.width);
    if (this.arrow === 'arrow_forward_ios') {
      this.arrow = '';
    } else {
      this.arrow = 'arrow_forward_ios';
    }

  }

  changeIcon1() {
    this.isExpanded = !this.isExpanded;
    console.log(document.getElementById('side-content').style.marginLeft);
    document.getElementById('side-content').style.marginLeft = '57px';
    console.log(document.getElementById('side-content').style.width);

    if (this.arrow === 'arrow_forward_ios') {
      this.arrow = '';
    } else {
      this.arrow = 'arrow_forward_ios';
    }

  }

  changeBackground() {
    console.log('in change color');
    console.log(document.getElementById('side-content').style.backgroundColor);
    document.getElementById('side-content').style.backgroundColor = 'white';
    console.log(document.getElementById('side-content').style.backgroundColor);
  }

  changeBackground1() {
    console.log('in change color');
    console.log(document.getElementById('side-content').style.backgroundColor);
    document.getElementById('side-content').style.backgroundColor = 'rgb(242,242,242)';
    console.log(document.getElementById('side-content').style.backgroundColor);
  }

  navigate() {
    this.router.navigate(['study']);
  }
}
