import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/https/http.service';
import { Observable } from 'rxjs';

export interface GlobalCodes {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class GlobalCodesService {

  controllerName :string= "global-codes";

  genders: GlobalCodes[] = [];

  designations: GlobalCodes[] = [];

  status: GlobalCodes[] = [{
    id: 0, name: '-- Select Status --'
  }, {
    id: 1, name: 'Active'
  }, {
    id: 2, name: 'InActive'
  }];

  durations: GlobalCodes[] = [{
    id: 0, name: '-- Select Duration --'
  }, {
    id: 1, name: 'Monthly'
  }, {
    id: 2, name: 'One Time'
  }];

  technologies: GlobalCodes[] = [{
    id: 0, name: 'Angular'
  }, {
    id: 1, name: '.NET Core'
  }, {
    id: 2, name: 'HTML'
  }, {
    id: 3, name: 'CSS'
  }, {
    id: 4, name: 'Javascript'
  }];    

  roles = [{
    id: 0, name: '-- Select Roles --'
  }, {
    id: 1, name: 'Admin'
  }, {
    id: 2, name: 'Staff'
  }];

  
  
  constructor( public http : HttpService) {  }

  
  getGlobalCodes(url : string): Observable<any[]>{
    return this.http.getAll(this.controllerName + "/" +url);
  }

  
}
