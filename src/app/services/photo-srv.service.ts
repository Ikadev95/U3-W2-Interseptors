import { iPhoto } from './../interfaces/i-photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoSrvService {

  myUrl:string = 'https://jsonplaceholder.typicode.com/photos'

  likes$ = new ReplaySubject<iPhoto>()
  constructor(private http: HttpClient) { }

  getAllPhotos(){
    return this.http.get<iPhoto[]>(this.myUrl).pipe(
      map(photos  => photos.slice(0,20))
    )
  }

  DeletePhoto(id:number){
    return this.http.delete<any>(`${this.myUrl}/${id}`)
  }

  addLikes(photo: iPhoto){
    this.likes$.next(photo)
  }
}
