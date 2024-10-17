import { PhotoSrvService } from '../../services/photo-srv.service';
import { iPhoto } from './../../interfaces/i-photo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  photos: iPhoto[] = []
  likes: iPhoto[] =[]

  constructor(private photoSrv: PhotoSrvService){}
  onPhotoDeleted(id: number) {
    this.photos = this.photos.filter(photo => photo.id !== id);
  }

  ngOnInit(): void {
    this.photoSrv.getAllPhotos().subscribe((photos:iPhoto[]) => this.photos = photos)
    this.photoSrv.likes$.subscribe( el => {
      if(!(this.likes.some(photo => photo.id === el.id)))
      this.likes.push(el)})
  }

}
