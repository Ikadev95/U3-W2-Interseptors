import { iPhoto } from './../interfaces/i-photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoSrvService {

  myUrl:string = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http: HttpClient) { }

  getAllPhotos(){
    return this.http.get<iPhoto[]>(this.myUrl).pipe(
      map(photos  => photos.slice(0,20))
    )
  }
}
