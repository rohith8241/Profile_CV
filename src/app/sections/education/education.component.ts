import { Component, OnInit } from '@angular/core';
import {StepperOrientation} from '@angular/material/stepper';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  stepperOrientation: Observable<StepperOrientation>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 768px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
   }

  ngOnInit(): void {
  }

}
