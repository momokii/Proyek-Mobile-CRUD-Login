import { Injectable } from '@angular/core';
import { CanLoad, Router, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// tambahan
import { filter, map, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  // tambahan
  constructor(private authService: AuthenticationService, private router: Router){}


  canLoad(): Observable<boolean>{
    return this.authService.isAuthenticated.pipe(
      filter((val) => val !== null), // filter data auth
      take(1), // ambil data auth
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigateByUrl('/');
          console.log('anda harus login dulu');
          return false;
        }
      })
    );

  }

  /* canLoad Bawaan
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */


}
