import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackForm, ContactType } from '../../shared/feedback-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // template class
  feedback: FeedbackForm;
  feedbackForm: FormGroup;   // formGroup
  contactType = ContactType; // contactType

  constructor
  (
      private fb: FormBuilder
  ) {
    this.createForm();

  }// const

  ngOnInit() {
  }



  createForm() {
    this.feedbackForm = this.fb.group({

      username:     '',
      email:        '',
      mobile:       '',
      age:          '',
      gender:       '',
      consent:      '',
      favSeason:    '',
      favCharacter: '',
      message:      '',
      contactType:  ''


    });


  }// createForm







}// ContactComponent
