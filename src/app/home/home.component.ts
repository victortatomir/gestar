import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  babyPic = 'assets/images/baby.jpg';
  doctorPic = 'assets/images/doctor.jpg';
  woman1 = 'assets/images/woman1.jpg';
  woman2 = 'assets/images/woman2.jpg';
  woman3 = 'assets/images/woman3.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
