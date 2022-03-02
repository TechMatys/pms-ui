import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { GlobalCodes, GlobalCodesService } from 'src/app/core/services/global-codes/global-codes.service';

interface Project {
  name: string,
  startDate: string,
  status: string,
  technology: string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  faEdit = faEdit;
  faDelete = faTrash;
  isShown: boolean = true;
  isAddNew: boolean = true;

  projectlist: Project[] = [
    {
      name: 'Project 1',
      startDate: '10/05/2020',
      status: 'In Progress',
      technology: 'ASP.Net Core'
    }, {
      name: 'Project 2',
      startDate: '19/05/2021',
      status: 'In Progress',
      technology: 'Python'
    }, {
      name: 'Project 3',
      startDate: '10/04/2020',
      status: 'In Progress',
      technology: 'Angular'
    }, {
      name: 'Project 4',
      startDate: '20/04/2020',
      status: 'In Progress',
      technology: 'CSS'
    }, {
      name: 'Project 5',
      startDate: '10/06/2020',
      status: 'In Progress',
      technology: 'HTML'
    }];

  status: GlobalCodes[] = [];
  durations: GlobalCodes[] = [];
  technologies: GlobalCodes[] = [];
  today: Date;

  constructor(private globalCodesService: GlobalCodesService) {
    this.today = new Date();
  }

  getStatus() {
    this.globalCodesService.getGlobalCodes("project-status").subscribe(res => {
      this.status = res;
    });
  }

  getDurations() {
    this.globalCodesService.getGlobalCodes("project-durations").subscribe(res => {
      this.durations = res;
    });
  }

  getTechnologies() {
    this.globalCodesService.getGlobalCodes("technologies").subscribe(res => {
      this.technologies = res;
    });
  }
  // Function to add new button
  addProject() {
    this.isShown = false;
    this.isAddNew = true;
  }

  onStatusChange(item: any) {

  }

  onDurationChange(item: any) {

  }
  onProjectChange(item: any) {

  }
  ngOnInit(): void {

    this.getStatus();
    this.getDurations();
    this.getTechnologies();
  }



}
