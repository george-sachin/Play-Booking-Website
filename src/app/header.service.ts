import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerSource = new BehaviorSubject(true);
  currentHeader = this.headerSource.asObservable();
  constructor() { }

  changeHeader(header: boolean) {
    this.headerSource.next(header)
  }
}
