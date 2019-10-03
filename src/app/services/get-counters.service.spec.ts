import { TestBed } from "@angular/core/testing";

import { GetCountersService } from "./get-counters.service";

describe("GetCountersService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GetCountersService = TestBed.get(GetCountersService);
    expect(service).toBeTruthy();
  });
});
