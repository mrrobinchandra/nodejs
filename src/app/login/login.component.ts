import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userGroup: FormGroup;

  constructor(  private router:Router,
    private fb: FormBuilder,
    private commonService:CommonServiceService){
    this.userGroup =this.fb.group({
      email: ['', Validators.required],
      password:['', Validators.required]
    }) }

  ngOnInit(): void {
  }

  public Signin(){
    if(this.userGroup.valid){
      this.commonService.signin(this.userGroup.value).subscribe(data=>{
        localStorage.setItem('token',data['token'])
        localStorage.setItem('email',data['email'])
        this.router.navigate(['/employee'])
      })
    }

  }
}
