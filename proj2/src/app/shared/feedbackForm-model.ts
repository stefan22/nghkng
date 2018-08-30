export class FeedbackFormModel {

  username: string;
  email: string;
  mobile: number;
  age: number;
  consent: string;
  favSeason: number;
  favCharacter: string;
  message: string;
  contactType: string;

} // FeedbackForm class

export const ContactTypeData = ['none', 'email', 'mobile'];
