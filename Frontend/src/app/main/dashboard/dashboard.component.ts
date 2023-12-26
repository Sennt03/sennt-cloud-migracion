import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { extensionToIcon } from '@models/dashboard.models';
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

  folders: string[] = []
  files: string[] = []

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

  detailOrNavigate(path: string, folder = true){
    const newPath = this.path + '/' + path
    console.log('entro', newPath)
    if(!folder) this.detailFile()
    else this.router.navigate([`/r/${newPath}`])
  }

  openDir(){
    this.maskLoad.next(true)
    this.dashBoardService.openDir(this.path).subscribe({
      next: (res) => {
        console.log(res)
        this.folders = res.content.directories
        this.files = res.content.files
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

  detailFile(){
    console.log('detail')
  }

}
