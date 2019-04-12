import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Quiz } from '../model/Quiz'
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {

  }

  private apiurl = 'https://localhost:44304/api/Quiz';


  PostQuizDetails(quiz : Quiz) : Observable<any>
  {
   return this.http.post('https://localhost:44304/api/Quiz/createQuiz/', quiz);   
  }
 
//   getUser() {
//     return this.http.get(this.apiurl)
//   }
//   name:string
//   description:string
//   startDate:Date
//   endDate:Date
//   numberOfQuestion:number
//  setUser(name: string, description: string,startDate:Date,endDate:Date,numberOfQuestion:number) {

//     this.http.post(this.apiurl, {
//       "userId": id,
//       "username": name,
//       "email": email,
//       "timeStamp": Date.now,
//       "roleId": 2
     
//   }).subscribe(res => console.log(res));
 // }

}
