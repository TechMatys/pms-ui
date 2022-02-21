import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  genders = [{
    id: 0, name: '-- Select Gender --'
  }, {
    id: 1, name: 'Male'
  }, {
    id: 2, name: 'Female'
  }];
  isShown: boolean | undefined;
  
  constructor() { }

  onGenderChange(item: any) {
  }

  ngOnInit(): void { this.isShown = !this.isShown;
  }

}
