import { Component, OnInit, Renderer2, } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private dialog: MatDialog,
    
  ) { }

  ngOnInit(): void {
  }

  openModal(){
    const dialogRef = this.dialog.open(FeedbackComponent,{
      width:'fit-content',
      height:'fit-content'
    })
  }

    close(){

    }
}
