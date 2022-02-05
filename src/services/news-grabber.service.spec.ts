import { TestBed } from '@angular/core/testing';

import { NewsGrabberService } from './news-grabber.service';

describe('NewsGrabberService', () => {
  let service: NewsGrabberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsGrabberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
