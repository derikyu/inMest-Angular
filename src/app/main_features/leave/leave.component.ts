import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss',
})
export class LeaveComponent implements OnInit {
  leaves: any[] = [];

  constructor(private leaveService: LeaveService){
  }

  ngOnInit(): void {
      this.getAllLeaves();
  }

  getAllLeaves() {
    this.leaveService.getLeaves().subscribe((res: any) => {
      this.leaves = res;
    });
  }
}
