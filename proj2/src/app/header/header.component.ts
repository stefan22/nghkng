import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogClose } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  jumboGreeting = 'Hello Eric!';

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }


  onScrollDown() {



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
      height: '410px'
    });





  }// openRegisterForm









}// HeaderComponent class
