import { Component, OnInit } from '@angular/core';
import { ServiesService } from './servies.service';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private https:ServiesService, private f:FormBuilder){}
  ngOnInit(): void {
    
  }
  myForm=this.f.group({
    id:['',],
    name:['',],
    loc:['']
  })
  edit(x){
    this.myForm.patchValue({
      id:x.id,
      name:x.name,
      loc:x.loc
    })
  }
  
  fetch(){
 return this.https.gets().subscribe(res=>{console.log(res);
   this.data=res; 
})
  }

  create(){
    this.https.get1(this.myForm.value).subscribe(res=>this.fetch());
    this.myForm.reset();
  }
  update(){
    this.https.get2(this.myForm.value).subscribe(res=>this.fetch());
    this.myForm.reset();
  }
  delete(c){
    confirm('are you sure want to delete this data') ;{
    this.https.get3(this.myForm.value).subscribe(res=>this.fetch());
    this.myForm.reset();
  }
}
}
