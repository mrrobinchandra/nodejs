import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private appUrl = environment.baseUrl+'v1';
  constructor(private httpClient:HttpClient) { }

  signin(data){
    return this.httpClient.post(this.appUrl +'/signin', data);
  }

  Add(data){
    return this.httpClient.post(this.appUrl +'/employee/add', data);
  }

  allemployee(){
    return this.httpClient.get(this.appUrl +'/employee/allemployee');
  }

  search(){
    return this.httpClient.get(this.appUrl +'/employee/search');
  }

  // deletebook(data){
  //   return this.httpClient.post(this.appUrl +'/book/bookdelete', data);
  // }

  // findbook(data){
  //   return this.httpClient.post(this.appUrl +'/book/findbook', data);
  // }

  // updatebook(data,id){
  //  let userdata={
  //   form:data,
  //   _id:id
  //   }
  //   return this.httpClient.post(this.appUrl +'/book/updatebook', userdata)
  // }

  // lendbook(id){
  //   return this.httpClient.post(this.appUrl +'/book/lendbook', id)

  // }
}
