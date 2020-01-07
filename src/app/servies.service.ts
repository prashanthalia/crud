import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiesService {

  constructor(private http:HttpClient) { }
  create;
  update;
  gets(){
    return this.http.get('http://localhost:3000/DETAILS')
  }
  get1(c){
    return this.http.post('http://localhost:3000/DETAILS/',c)
  }
  get2(c){
    return this.http.put('http://localhost:3000/DETAILS/'+c.id,c)
  }
  get3(c){
    return this.http.delete('http://localhost:3000/DETAILS/'+c.id)
  }
}
