import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Am2AppComponent } from '../app/am2.component';

beforeEachProviders(() => [Am2AppComponent]);

describe('App: Am2', () => {
  it('should create the app',
      inject([Am2AppComponent], (app: Am2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'am2 works!\'',
      inject([Am2AppComponent], (app: Am2AppComponent) => {
    expect(app.title).toEqual('am2 works!');
  }));
});
