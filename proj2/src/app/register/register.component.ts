import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: any = {
    name: '',
    email: '',
    password: ''

  };

  constructor(private dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

  onRegister() {
    console.log('registered user: ', this.user);
    this.dialogRef.close();



  }// onRegister



  getPasswordError(pass) {
    if(pass.length < 5) {
      return 'Must be 5 characters long';
    }
    else if(pass.length >= 5) {
      return 'Password is good';
    }

  }




}// RegisterComponent class
