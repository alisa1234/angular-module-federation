import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userName = '';

  public get user(): string {
    return this.userName;
  }

  constructor() {}

  public login(userName: string, password: string | null): void {
    this.userName = userName;
  }
}
