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


  constructor() { }
}
