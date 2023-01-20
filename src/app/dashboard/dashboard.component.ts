import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  cardata:any=[];

  constructor(private ds:DataService){
    
    this.ds.getcar().subscribe((result:any)=>{
      this.cardata=result.message})
      console.log(this.cardata)
  }

 ngOnInit(): void {
 
 }


 rentcar(day:any,name:any,price:any,image:any){
  this.ds.rentcar(day,name,price,image).subscribe((result:any)=>{

    alert(result.message)
  },result=>{
    alert(result.error.message)
  })
 }
  }

