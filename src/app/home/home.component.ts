import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openInsta(){
    window.open("https://www.instagram.com/rohiths8241/")
  }

  openFaceBook(){
    window.open("https://www.facebook.com/rohith.sridhar.332")
  }

  openTwitter(){
    window.open("https://twitter.com/rohiths8241")
  }
  openGit(){
    window.open("https://github.com/rohith8241")
  }
  openLinkedin(){
    window.open("https://www.linkedin.com/in/rohith-sridhar-8198571a0")
  }
}
