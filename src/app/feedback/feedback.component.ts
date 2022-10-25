import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialog.closeAll();
  }

  closeModal(){

    this.router.navigate(['/home'])
    this.dialog.closeAll();
  }

}
