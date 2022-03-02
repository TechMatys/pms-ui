import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/https/http.service';

export interface GlobalCodes {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class GlobalCodesService {

  controllerName: string = "global-codes";

  status: GlobalCodes[] = [];

  genders: GlobalCodes[] = [{
    id: 0, name: '-- Select Gender --'
  }, {
    id: 1, name: 'Male'
  }, {
    id: 2, name: 'Female'
  }];

  durations: GlobalCodes[] = [];

  technologies: GlobalCodes[] = [];

  roles = [{
    id: 0, name: '-- Select Roles --'
  }, {
    id: 1, name: 'Admin'
  }, {
    id: 2, name: 'Staff'
  }];

  constructor(public http: HttpService) { }

  getGlobalCodes(url : string): Observable<any[]>{
    return this.http.getAll(this.controllerName + "/" +url);
  }
}
