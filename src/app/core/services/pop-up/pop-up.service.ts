import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PopUpComponent } from '../../pop-up/pop-up.component';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private popUpService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg'|'md' = 'sm'): Promise<boolean> {
    const modalRef = this.popUpService.open(PopUpComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }

}
