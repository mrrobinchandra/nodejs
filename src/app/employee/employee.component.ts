import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/common-service.service';

export interface UserData {
  eid: string;
  first: string;
  last: string;
  position: string;
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['eid', 'first', 'last', 'position'];
  dataSource: MatTableDataSource<UserData>;
  datePicker = new FormControl('');
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  user: string;
  constructor(private router:Router,private commonService:CommonServiceService) {
    this.user=localStorage.getItem('email')
   }

  ngOnInit(): void {
    this.commonService.allemployee().subscribe((data:any) =>{
      this.dataSource=new MatTableDataSource(data);

    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



    public AddEmployee(){
      this.router.navigate(['/addemployee'])
    }

    applyFilter(event: Event) {
      this.commonService.search().subscribe(data =>{
        console.log(data)
      })
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      console.log("filter"+filterValue)
      console.log("date"+this.datePicker.value)
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    public Signout(){
      localStorage.clear();
      this.router.navigate(['/'])
    }
}
