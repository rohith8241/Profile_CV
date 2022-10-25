import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  openIIA(){
  window.open("https://www.interviewia.com/")
  }

  openTrustyX(){
    window.open("https://trustyx.in/")
  }

}
