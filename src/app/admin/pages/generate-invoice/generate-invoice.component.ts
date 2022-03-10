import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit, faTrash, faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/core/services/https/http.service';
import { PopUpService } from 'src/app/core/services/pop-up/pop-up.service';

interface GenerateInvoice {
  title: string,
  createdBy: string;
  generatedDate: string;
}
@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent implements OnInit {

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

  generateInvoiceList: GenerateInvoice[] = [];
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

  deleteGenerateInvoice(generateInvoice: any) {
    this.popUpService.confirm('Confirmation', 'Are you sure you want to delete this GenerateInvoice?', 'Yes', 'No', 'md')
      .then((confirmed) => {
        if (confirmed) {
          this.http.delete(this.controllerName, generateInvoice.companyInvoiceId)
            .subscribe(res => {
              this.toastr.success("GenerateInvoice deleted successfully", "Success");
              this.getAllGenerateInvoiceList();
            });
        }
      });
  }

  get f() { return this.invoiceForm.controls; }
  

  saveGenerateInvoice() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.invoiceForm.invalid) {
      return;
    }



    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.invoiceForm.value))

    this.invoiceForm.controls['managedBy'].setValue(-1);

    const generateInvoiceData = this.invoiceForm.value;
    const companyInvoiceId = generateInvoiceData.companyInvoiceId;
    if (companyInvoiceId < 1) {
      this.http.create(this.controllerName, generateInvoiceData)
        .subscribe(res => {
          this.toastr.success("GenerateInvoice created successfully", "Success");
          this.getAllGenerateInvoiceList();
        });
    }
    else {
      this.http.update(this.controllerName, companyInvoiceId, generateInvoiceData)
        .subscribe(res => {
          this.toastr.success("GenerateInvoice updated successfully", "Success");
          this.getAllGenerateInvoiceList();
        });
    }
  }

  getAllGenerateInvoiceList() {
    this.isShown = true;
    this.http.getAll(this.controllerName).subscribe(res => {
      this.generateInvoiceList = res;
    });

  }


  ngOnInit(): void {
    this.getAllGenerateInvoiceList();
  }

}



