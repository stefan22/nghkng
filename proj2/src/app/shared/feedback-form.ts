export class FeedbackForm {

  username: string;
  email: string;
  mobile: number;
  age: number;
  gender: string;
  consent: boolean;
  favSeason: number;
  favCharacter: string;
  message: string;
  contactType: string;

}; // FeedbackForm class

export const ContactType = ['email', 'mobile', 'none'];
