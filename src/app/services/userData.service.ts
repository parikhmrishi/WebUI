import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUserDetails } from '../model/IUserDetail'

//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  private data;
  private apiurl = 'https://localhost:44304/api/user';
  response: IUserDetails

 
  getUser() {
    return this.http.get(this.apiurl)
  }

  setUser(id: any, name: string, email: string) {

    return this.http.post(this.apiurl, {
      "Id": id,
      "Name": name,
      "Email": email,
      "roleId": 2
     
  }).subscribe(res => console.log(res)),
  (err: any) => alert("Bad Request");
  }

}
