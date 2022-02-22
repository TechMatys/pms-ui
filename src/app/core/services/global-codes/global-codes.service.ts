import { Injectable } from '@angular/core';

export interface GlobalCodes {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class GlobalCodesService {

  genders: GlobalCodes[] = [{
    id: 0, name: '-- Select Gender --'
  }, {
    id: 1, name: 'Male'
  }, {
    id: 2, name: 'Female'
  }];

  designations: GlobalCodes[] = [{
    id: 0, name: '-- Select Designations --'
  }, {
    id: 1, name: 'Developer'
  }, {
    id: 2, name: 'Manager'
  }];

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
  
  constructor() { }
}