import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-actions',
  templateUrl: './modal-actions.component.html',
  styleUrls: ['./modal-actions.component.scss']
})
export class ModalActionsComponent {

  @Input() path: string;
  @Input() method: string;

  close(){
    document.getElementById('app-modal-actions').classList.remove('show')
  }

}
