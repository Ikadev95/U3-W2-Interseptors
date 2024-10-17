import { TestBed } from '@angular/core/testing';

import { PhotoSrvService } from './photo-srv.service';

describe('PhotoSrvService', () => {
  let service: PhotoSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
