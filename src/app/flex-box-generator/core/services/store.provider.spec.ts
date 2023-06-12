import { TestBed } from '@angular/core/testing';
import { mergeMap, tap } from 'rxjs';
import { StoreProvider } from './store.provider';

fdescribe('StoreService', () => {
  let service: StoreProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreProvider],
    });
    service = TestBed.inject(StoreProvider);
  });

  afterEach(() => {
    service = {} as StoreProvider;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#set should set slice(s) of state', () => {
    const slice1 = { a: [{}] };
    const slice2 = { z: [{ x: 'y' }] };

    service.set('a', [{}]);
    expect(service.value).toEqual(slice1);

    service.set('z', [{ x: 'y' }]);
    expect(service.value).toEqual({ ...slice1, ...slice2 });
  });

  it('#select should return slices of state', () => {
    const slice = { a: [{}], z: [{ x: 'y' }] };

    service.set('a', [{}]);
    service.select('a').subscribe((s) => expect(s).toEqual(slice.a));

    service.set('z', [{ x: 'y' }]);
    service.select('z').subscribe((s) => expect(s).toEqual(slice.z));
  });

  it('#set should update slices of state', () => {
    const slice = { a: [{}], z: [{ x: 'y' }] };

    service.set('a', [{}]);
    service
      .select('a')
      .pipe(
        // tap((s) => expect(s).toEqual(slice.a)),
        mergeMap((s) => {
          service.set('a', [{ x: 'y' }]);
          console.log(s, service.value);
          expect(service.value).toEqual({ a: [{ x: 'y' }] });
          return service.select('a');
        }),
        mergeMap((s) => {
          service.set('z', [{ x: 'y' }]);
          console.log(s, service.value);
          expect(service.value).toEqual({ z: [{ x: 'y' }] });
          return service.select('z');
        }),
        // tap((s) => expect(s).toEqual(slice.z))
      )
      .subscribe((s) => {
        console.log(s);
        expect(s).toEqual([{ x: 'y' }])
      });

    // service.set('a', [{ x: 'y' }]);
    // service.select('a').subscribe((s) => {
    //   console.log(s);
    //   expect(s).toEqual([{ x: 'y' }]);
    // });

    // service.set('z', [{}]);
    // service.select('z').subscribe((s) => expect(s).toEqual(slice.a));

    // service.set('z', [{ x: 'y' }]);
    // service.select('z').subscribe((s) => expect(s).toEqual(slice.a));
  });
});
