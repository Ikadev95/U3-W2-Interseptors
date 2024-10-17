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

  constructor(private photoSrv: PhotoSrvService){}
  ngOnInit(): void {

    this.photoSrv.getAllPhotos().subscribe((photos:iPhoto[]) => this.photos = photos)
  }

}
