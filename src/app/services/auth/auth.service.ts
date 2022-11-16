import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  recoverEmailPassword(email: string) : Observable<void>{
    return new Observable<void>(observable => {
      setTimeout(() => {
        if(email == 'error@email.com'){
          observable.error({message: 'Email not found'});
        }
        observable.next();
        observable.complete();
      }, 3000);
    })
  }
}
