import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private leavesDB = [
    {
      id: 1,
      leave_type: 'Maternity',
      start_day: 'Dec 20, 2024',
      end_date: 'Mar 20, 2024',
      created_by: 'Oyinlade',
      status: 'Approved',
      last_modified: 'Nov 27, 2023',
      approve_by: 'Deyemi Presh',
    },
    {
      id: 2,
      leave_type: 'Beacation',
      start_day: 'Jan 26th, 2024',
      end_date: 'Feb 05, 2024',
      created_by: 'Suad',
      status: 'Pending',
      last_modified: 'Dec 27, 2023',
      approve_by: 'Xarri the Namibia',
    },
  ]

  constructor(

  ) { }

  getLeaves(){
    return of(this.leavesDB)
  }

  getLeaveById(id: number) {
    const leaveData = this.leavesDB.find((el) => el.id === id);
    return of(leaveData);
  }
}
