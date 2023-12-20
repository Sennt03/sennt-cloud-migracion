import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';

export const pathGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  if(state.url == '/'){
    return true
  }else if(state.url.split('/')[1] == 'r' && state.url.split('/').length <= 2){
    router.navigate(['/'])
    return of(false)
  }else if(state.url.split('/')[1] == 'r'){
    return true
  }else{
    router.navigate([`/r${state.url}`])
    return of(false)
  }
  
};
