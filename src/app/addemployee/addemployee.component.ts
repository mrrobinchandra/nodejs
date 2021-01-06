import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/common-service.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  addEmployee:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private commonService:CommonServiceService) { 
    this.addEmployee =this.fb.group({
      eid: ['', Validators.required],
      first:['', Validators.required],
      last: ['', Validators.required],
      position: ['', Validators.required],
    }) 
  }

  ngOnInit(): void {
  }

  save(){
    this.commonService.Add(this.addEmployee.value).subscribe(data=>{
      console.log("data"+data)
      this.router.navigate(['/employee'])
    })
  }

  cancel(){
    this.router.navigate(['/employee']);
  }
}
