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

  status: GlobalCodes[] = [];

  durations: GlobalCodes[] = [];

  technologies: GlobalCodes[] = [];

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
