import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

  @Input() path: string

  constructor(){}

  toggle(){
    const element = document.getElementById(`menu-${this.path}`)
    const add = element.classList.contains('show') ? false : true;
    this.closeAll()
    if(add) element.classList.add('show')
    else element.classList.remove('show')
  }

  closeAll(){
    const uls:any = document.querySelectorAll('.dropwdown-actions-container .show')
    if(uls.length >= 1){
      uls.forEach(ul => {
        ul.classList.remove('show')
      })
    }
  }

}
