import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { ApiInMemoryService } from "./api-in-memory.service";

describe('ApiInMemoryService', () => {
  let service: ApiInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
