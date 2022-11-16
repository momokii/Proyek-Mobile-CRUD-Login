import { Injectable } from '@angular/core';
import { CanLoad, Router ,Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// tambahan
import { AuthenticationService } from '../services/authentication.service';
import { filter, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor (private authService: AuthenticationService, private router: Router) {}

  canLoad(): Observable<boolean>{
    console.log('cek sesi login');
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null),
      take(1),
      map((isAuthenticated) => {
        if (isAuthenticated) {
          console.log('Anda sesi login, redirect ke dashboard');
          // jika ada sesi login
          this.router.navigateByUrl('/dashboard', {replaceUrl: true});
        } else {
          console.log('Anda sesi login');
          return true;
        }
      })
    )
  }

  /* canLoad bawaan
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */

}
