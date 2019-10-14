import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  public currentUserSource = new BehaviorSubject( {} );
  public currentUser = this.currentUserSource.asObservable();

  public setUsername( user ): void {
    this.currentUserSource.next( user );
  }
}
