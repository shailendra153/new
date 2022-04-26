import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user_data:any


  constructor() { 

    this.user_data = localStorage.getItem('user-profile');
    this.user_data = JSON.parse(this.user_data);
    console.log(this.user_data);
    
  }
  ngOnInit(): void {
  }

}
