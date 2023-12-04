import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-detail.component.html',
  styleUrl: './leave-detail.component.scss',
})
export class LeaveDetailComponent implements OnInit {
  leaveId = '';
  createdBy = '';
  leave: any;
  startDay = '';
  endDate = '';
  leaveStatus = '';
  lastModified = '';
  approveBy = '';

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private leaveService: LeaveService,
  ) {}


  goBack() {
    this.router.navigate(['/leaves'], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.leaveId = param['id'];
      this.getMyLeaveById(parseInt(this.leaveId));
      // this.createdBy = param['leave_type'];
      // this.startDay = param['start_day'];
      // this.endDate = param['end_date'];
      // this.leaveStatus = param['status'];
      // this.lastModified = param['last_modified'];
      // this.approveBy = param['approve_by'];
    });
  }

  getMyLeaveById(id: number){
    return this.leaveService.getLeaveById(id).subscribe(res=> {
     this.leave = res;
    });
  }
}
