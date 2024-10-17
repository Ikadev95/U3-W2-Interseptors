import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoSrvService {

  myUrl:string = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http: HttpClient) { }

  getAllPhotos(){
    this.http.get(this.myUrl)
  }
}
