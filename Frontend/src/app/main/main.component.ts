import { Component, OnInit } from '@angular/core';
import { LsResAuth } from '@models/auth.models';
import { LsUser } from '@models/user.models';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import toastr from '@shared/utils/toastr';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  maskLoad = new Subject<boolean>()
  user: LsUser

  constructor(
    private authService: AuthService,
    private userService: UserService
  ){}

  ngOnInit(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth > 764) {
      const sidebar = document.querySelector('.sidebar');
      const closeBtn = document.querySelector("#btn");

      sidebar.classList.add('open');
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }

    const auth = this.authService.getAuth() as LsResAuth
    this.user = auth.user

    this.userService.userProfile.pipe(
      switchMap(() => this.userService.getProfile()),
    ).subscribe(res => {
      this.user = res
    });
  }

  menuToggle(open = false){
    const sidebar = document.querySelector('.sidebar');
    if(open){
      sidebar.classList.add('open');
    }else{
      sidebar.classList.toggle('open');
    }

    this.menuBtnChange();
    if(!open) this.removeAnalytics()
  }

  menuBtnChange() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");

    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }else{
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
  }

  logout(){
    this.maskLoad.next(true)
    setTimeout(() => {
      toastr.info('Goodbye!', '')
      this.maskLoad.next(false)
      this.authService.logout()
    }, 1000);
  }

  collapseAnalitycs(){
    this.menuToggle(true)

    const menuItem = document.querySelector('.collapse-analytics');
    const iconItem = document.querySelector('.bxs-chevron-down');
    if(menuItem.classList.contains('collapse')){
      iconItem.classList.remove('collapseIcon')
      iconItem.classList.add('collapseIconBack')
    }else{
      iconItem.classList.add('collapseIcon')
      iconItem.classList.remove('collapseIconBack')
    }
    menuItem.classList.toggle('collapse')
  }

  removeAnalytics(){
    const menuItem = document.querySelector('.collapse-analytics');
    const iconItem = document.querySelector('.bxs-chevron-down');
    iconItem.classList.remove('collapseIcon')
    iconItem.classList.remove('collapseIconBack')
    menuItem.classList.remove('collapse')
  }

}
