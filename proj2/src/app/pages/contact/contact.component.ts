import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackForm, ContactType } from '../../shared/feedback-form';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackSubmitted = false;

  feedback: FeedbackForm;
  form: FormGroup;   // formGroup
  contactType = ContactType; // contactType

  formatLabel(value: number) {
    return value + ' season';
  }// fromatLabel

  constructor(public fb: FormBuilder) {
    this.createForm();
  }// const

  ngOnInit() {
    this.feedbackSubmitted = false;
  }



  createForm() {
    this.form = this.fb.group({
      username:     '',
      email:        '',
      mobile:       '',
      age:          '',
      consent:      'yes',
      favSeason:    '',
      favCharacter: '',
      message:      '',
      contactType:  ''


    });


  }// createForm

  onContactFormSubmitted() {
    this.feedbackSubmitted = true;
    this.feedback = this.form.value;
    console.log(this.feedback);
    this.form.reset();

  }// onContactFormSubmitted







}// ContactComponent
