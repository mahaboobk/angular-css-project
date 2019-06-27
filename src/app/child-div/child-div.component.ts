import { Component, OnInit, Input, ChangeDetectionStrategy, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-child-div',
  templateUrl: './child-div.component.html',
  styleUrls: ['./child-div.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,  
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(500))
  ])]
})

export class ChildDivComponent implements OnInit {
PaneType: string;
@Input() activePane: PaneType = 'left';
  constructor() { }

  ngOnInit() {
  }

}
type PaneType = 'left' | 'right';