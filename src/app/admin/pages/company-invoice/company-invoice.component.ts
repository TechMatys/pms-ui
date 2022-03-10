import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faDownload, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/core/services/https/http.service';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';

interface CompanyInvoice {
  title: string,
  createdBy: string;
  generatedDate: string;
}

@Component({
  selector: 'app-company-invoice',
  templateUrl: './company-invoice.component.html',
  styleUrls: ['./company-invoice.component.scss']
})
export class CompanyInvoiceComponent implements OnInit {

  invoiceForm: FormGroup;
  submitted = false;

  faDownload = faDownload;
  faEye = faEye;
  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
  isAddNew: boolean = true;

  controllerName = "Company-Invoice";

  // dtOptions: DataTables.Settings = {};

  companyInvoiceList: CompanyInvoice[] = [];
  today: Date;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private popUpService: PopUpService,
    private http: HttpService) {

      this.today = new Date();
      this.invoiceForm = this.formBuilder.group({
        companyInvoiceId: [0],
        title: [null, Validators.required],
        createdBy: [null],
        generatedDate: new FormControl(this.today),
        managedBy: [-1]
      });
     }

     generateInvoice() {
      this.resetForm();
      this.isShown = false;
      this.isAddNew = true;
    }
  
    resetForm() {
      this.submitted = false;
      this.invoiceForm.reset();
      this.invoiceForm.controls['generatedDate'].setValue(this.today);
      this.invoiceForm.controls['companyInvoiceId'].setValue(0);
      this.invoiceForm.controls['managedBy'].setValue(-1);
    }
  
    deleteCompanyInvoice(companyInvoice: any) {
      this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this Company invoice?', 'Yes', 'No', 'md')
        .then((confirmed) => {
          if (confirmed) {
            this.http.delete(this.controllerName, companyInvoice.companyInvoiceId)
              .subscribe(res => {
                this.toastr.success("Company invoice deleted successfully", "Success");
                this.getAllCompanyInvoiceList();
              });
          }
        });
    }
  
    get f() { return this.invoiceForm.controls; }
    
  
    saveCompanyInvoice() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.invoiceForm.invalid) {
        return;
      }
  
      this.invoiceForm.controls['managedBy'].setValue(-1);
  
      const companyInvoiceData = this.invoiceForm.value;
      const companyInvoiceId = companyInvoiceData.companyInvoiceId;
      if (companyInvoiceId < 1) {
        this.http.create(this.controllerName, companyInvoiceData)
          .subscribe(res => {
            this.toastr.success("Company invoice created successfully", "Success");
            this.getAllCompanyInvoiceList();
          });
      }
      else {
        this.http.update(this.controllerName, companyInvoiceId, companyInvoiceData)
          .subscribe(res => {
            this.toastr.success("Company invoice updated successfully", "Success");
            this.getAllCompanyInvoiceList();
          });
      }
    }
  
    getAllCompanyInvoiceList() {
      this.isShown = true;
      this.http.getAll(this.controllerName).subscribe(res => {
        this.companyInvoiceList = res;
      });
  
    }
  

  ngOnInit(): void {
    this.getAllCompanyInvoiceList();
  }

}
