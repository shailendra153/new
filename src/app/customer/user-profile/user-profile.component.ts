import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile_data: string | any;

  constructor() { 
    this.profile_data=localStorage.getItem('user-profile');
    this.profile_data = JSON.parse(this.profile_data);
    console.log(this.profile_data)
  }
 
  ngOnInit(): void {
  }

}
