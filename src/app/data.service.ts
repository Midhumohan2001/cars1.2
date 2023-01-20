import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getcar(){

    const body={}
    return this.http.post("http://localhost:3001/getcar",body)
  }

  rentcar(days:any,name:any,price:any,image:any){

    const body={
      days,name,price,image
    }

     return this.http.post('http://localhost:3001/rentcar',body)
  }




  getrentedcar(){

    const body={}
    return this.http.post("http://localhost:3001/getrentedcar",body)
  }


  deletecar(name:any){

    const body={
      name
    }

    return this.http.post('http://localhost:3001/delete',body)
  }


}
