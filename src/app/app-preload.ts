import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs/index';
import { Observable } from 'rxjs';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any>  {
    return route.data && route.data.preload ? fn() : of(null);
  }
}
