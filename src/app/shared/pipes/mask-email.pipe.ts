import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maskEmail',
  standalone: false
})
export class MaskEmailPipe implements PipeTransform {

  transform(email: string): string {
    console.log("email", email);
    if (!email) return '';
    const [user, domain] = email.split('@');
    const maskedUser = user.length > 2
      ? user[0] + '*'.repeat(user.length - 2) + user[user.length - 1]
      : '*'.repeat(user.length);
    return `${maskedUser}@${domain}`;
  }

}
