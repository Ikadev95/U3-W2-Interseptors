import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iPhoto } from '../../interfaces/i-photo';
import { PhotoSrvService } from '../../services/photo-srv.service';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrl: './card-photo.component.scss'
})
export class CardPhotoComponent implements OnInit{
  constructor(private photoSrv: PhotoSrvService){}
  @Input() photo!:iPhoto
  @Output() photoDeleted = new EventEmitter<number>();

  deletePhoto(id: number) {
    if (confirm('Sei sicuro/a di voler eliminare?')) {
      this.photoSrv.DeletePhoto(id).subscribe({
        next: () => {
          alert('Foto eliminata con successo');
          this.photoDeleted.emit(id);
        },
        error: (err) => {
          console.error('Errore durante l\'eliminazione della foto:', err);
        }
      });
    }
  }

  addToPref(photo:iPhoto){
    this.photoSrv.addLikes(photo)
    }
  ngOnInit(): void {

  }

}
