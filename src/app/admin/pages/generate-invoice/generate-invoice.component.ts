import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faEye,faDownload } from '@fortawesome/free-solid-svg-icons';

interface GenrateInvoice{
  title: string,
  createdBy: string;
  genrateDate: string;
}
@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent implements OnInit {
  faDownload = faDownload;
  faEye = faEye;
  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
  isAddNew: boolean = true;
  

  genrateInvoiceList: GenrateInvoice[] = [
    {
      title: 'Invoice1',
     createdBy: 'Admin',
     genrateDate: '28/02/2022'
    },{
      title: 'Invoice2',
     createdBy: 'Admin',
     genrateDate: '28/02/2022'
    },{
      title: 'Invoice3',
     createdBy: 'Staff',
     genrateDate: '28/02/2022'
    },{
      title: 'Invoice4',
     createdBy: 'Staff',
     genrateDate: '28/02/2022'
    }
  ];


  constructor() {}
    genrateInvoice (){
      this.isShown = false;
      this.isAddNew = true;
    }
   

  ngOnInit(): void {
  }

}



