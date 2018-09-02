import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackFormModel, ContactTypeData } from '../../shared/feedbackForm-model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackSubmitted = false;

  feedback: FeedbackFormModel;
  form: FormGroup;   // formGroup
  contactType = ContactTypeData; // contactType

  formatSeasonLabel(value: number) {
    return value + ' season';
  }// formatSeasonLabel

  constructor(public fb: FormBuilder) {
    this.createForm();
  }// const

  ngOnInit() {
    this.feedbackSubmitted = false;
  }



  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      age: ['', Validators.required],
      consent: ['yes', Validators.required],
      favCharacter: ['', Validators.required],
      favSeason: '',
      message: '',
      contactType: ''


    });


  }// createForm

  onContactFormSubmitted() {
    this.feedbackSubmitted = true;
    this.feedback = this.form.value;
    console.log(this.feedback);
    this.form.reset({
      username: '',
      email: '',
      mobile: '',
      age: '',
      consent: '',
      favSeason: '',
      favCharacter: '',
      message: '',
      contactType: ''
    });

  }// onContactFormSubmitted







}// ContactComponent
