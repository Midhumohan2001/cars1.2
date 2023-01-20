import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css']
})
export class RentedComponent implements OnInit {
  rentedcardata:any=[];

  constructor(private ds:DataService,private route:Router){
   
    
  }

  ngOnInit(): void {
    this.ds.getrentedcar().subscribe((result:any)=>{
      this.rentedcardata=result.message
    })
   
  }

  deletecarrented(name:any){
    this.ds.deletecar(name).subscribe((result:any)=>{

      window.location.reload();
    },result=>{
      alert(result.error.message)
    })

  
    
  }

}
