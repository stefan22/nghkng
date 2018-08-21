import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogClose } from '@angular/material';
import { LoginComponent } from '../login/login.component';

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
      height: '350px'

    });




  }// openLoginForm









}// HeaderComponent class
