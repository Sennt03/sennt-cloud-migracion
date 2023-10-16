import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy{

  show = false
  event: Subscription
  @Input('showEvent') showEvent: Observable<boolean>

  ngOnInit(): void {
    this.event = this.showEvent.subscribe(toogle => this.show = toogle)
  }

  ngOnDestroy(): void {
    this.event.unsubscribe()
  }

}
