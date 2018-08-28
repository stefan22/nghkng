import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogClose } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  goBeyondJumboClass = false;

  constructor(private dialog: MatDialog) {

   }

  ngOnInit() {
    this.goBeyondJumboClass = false;
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {
      width: '400px',
      height: '400px'

    });

  }// openLoginForm


  openRegisterForm() {
    console.log('register form');
    this.dialog.open(RegisterComponent, {
      width: '400px',
      height: '420px'
    });

  }// openRegisterForm


  goBeyondJumbo() {
    // console.log('passing input to jumbo');
    this.goBeyondJumboClass = true;

  }// goBeyondJumbo


  @HostListener('window: scroll', ['$event'])
  onScrollDown(e) {
    console.log(e);
    if (e.target.scrollingElement.scrollTop >= 347) {// contact pg height
      this.goBeyondJumboClass = false;
    }

  }// onScrollDown






}// HeaderComponent class
