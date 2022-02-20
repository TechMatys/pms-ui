import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  @Input() title: any;
  @Input() message: any;
  @Input() btnOkText: any;
  @Input() btnCancelText: any;

  constructor(private activePopUp: NgbActiveModal) { }

  ngOnInit(): void {
  }
  public decline() {
    this.activePopUp.close(false);
  }

  public accept() {
    this.activePopUp.close(true);
  }

  public dismiss() {
    this.activePopUp.dismiss();
  }
}
