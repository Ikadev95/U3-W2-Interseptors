import { iPhoto } from './../interfaces/i-photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, ReplaySubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoSrvService {
  myUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  likes$ = new ReplaySubject<iPhoto>();

  constructor(private http: HttpClient) {}

  getAllPhotos() {
    return this.http.get<iPhoto[]>(this.myUrl).pipe(
      map(photos => photos.slice(0, 20)),
      catchError(error => {
        let messaggio = '';
        if (error.status === 404) {
          messaggio = 'Errore 404: non trovato';
        } else if (error.status === 500) {
          messaggio = 'Problemi al server';
        } else {
          messaggio = 'Errore sconosciuto';
        }
        return of([]); // Ritorna un array vuoto per continuare senza interrompere l'Observable
      })
    );
  }

  DeletePhoto(id: number) {
    return this.http.delete<any>(`${this.myUrl}/${id}`);
  }

  addLikes(photo: iPhoto) {
    this.likes$.next(photo);
  }
}
