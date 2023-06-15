import { TestBed } from '@angular/core/testing';
import { catchError, mergeMap, of, startWith, tap } from 'rxjs';
import { Slice, StoreProvider } from './store.provider';

fdescribe('StoreProvider', () => {
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
    service
      .select('a')
      .subscribe((s) => expect(s).toEqual(slice.a))
      .unsubscribe();

    service.set('z', [{ x: 'y' }]);
    service
      .select('z')
      .subscribe((s) => expect(s).toEqual(slice.z))
      .unsubscribe();
  });

  it('#set should update slices of state', () => {
    const testA = (s: Slice<any>) => {
      service.set('a', [{ b: 'c' }]);
      expect(service.value).toEqual({ a: [{ b: 'c' }] });

      return service.select('a');
    };

    const testB = (s: Slice<any>) => {
      service.set('z', [{ x: 'y' }]);
      expect(service.value).toEqual({ z: [{ x: 'y' }] });

      return service.select('z');
    };

    service
      .select('a')
      .pipe(
        mergeMap(testA),
        tap((s) => expect(s).toEqual([{ a: { b: 'c' } }])),
        mergeMap(testB),
        tap((s) => expect(s).toEqual([{ z: { x: 'y' } }]))
      )
      .subscribe((s) => expect(s).toEqual([{ x: 'y' }]))
      .unsubscribe();
  });
});
