import { TestBed } from '@angular/core/testing';
import { MySelectionService } from './my-selection.service';
// import statemnts

describe('MySelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySelectionService = TestBed.get(MySelectionService);
    expect(service).toBeTruthy();
  });
});
