import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LsOpenDir, extensionToIcon } from '@models/dashboard.models';
import { DashboardService } from '@services/dashboard.service';
import toastr from '@shared/utils/toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  maskLoad = new Subject<boolean>()
  loading = true
  path: string

  paths: {
    path: string,
    link: string
  }[] = []

  data: LsOpenDir = {
    path: '',
    content: {
      directories: [],
      files: []
    }
  }

  constructor(
    private router: Router,
    private dashBoardService: DashboardService
  ){
  }

  ngOnInit(): void {
    this.processURL()
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.processURL();
      }
    });
  }

  processURL() {
    const data = []
    const details = this.router.url.split('/').slice(2)
    details.forEach((path, i) => {
      const ruta = details.slice(0, i + 1).join('/')
      const detail = {
        path,
        link: `/r/${ruta}`
      }
      
      data.push(detail)
    });
    this.paths = this.router.url.split('/').length > 2 ? data : [];
    this.path = details.join('/')
    this.openDir()
  }

  getIcon(name: string){
    const parts = name.split('.');
    const ext = parts[parts.length - 1];

    return extensionToIcon[ext] ?? extensionToIcon['default']
  }

  navigateFolder(path: string){
    const newPath = this.path + '/' + path
    this.router.navigate([`/r/${newPath}`])
  }

  openDir(){
    this.maskLoad.next(true)
    this.dashBoardService.openDir(this.path).subscribe({
      next: (res) => {
        this.data = res
      },
      error: (err) => {
        toastr.error('Forbidden.', '')
        this.router.navigate([`/`])
      },
      complete: () => {
        this.loading = false
        this.maskLoad.next(false)
      }
    })
  }

  detailFile(path: string){
    const newPath = this.path + '/' + path
    console.log('Detail: ', newPath)
  }

}
