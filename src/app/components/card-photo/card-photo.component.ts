import { Component, Input, OnInit } from '@angular/core';
import { iPhoto } from '../../interfaces/i-photo';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrl: './card-photo.component.scss'
})
export class CardPhotoComponent implements OnInit{
  ngOnInit(): void {

  }
  @Input() photo!:iPhoto
}
