(self.webpackChunkMigracion=self.webpackChunkMigracion||[]).push([[2],{3002:(q,F,c)=>{"use strict";c.r(F),c.d(F,{DashboardModule:()=>ht});var _=c(6814),b=c(3403);const A={default:"fa-file",txt:"fa-file-alt",doc:"fa-file-word",docx:"fa-file-word",xls:"fa-file-excel",xlsx:"fa-file-excel",ppt:"fa-file-powerpoint",pptx:"fa-file-powerpoint",pdf:"fa-file-pdf",zip:"fa-file-archive",rar:"fa-file-archive","7z":"fa-file-archive",jpg:"fa-file-image",jpeg:"fa-file-image",png:"fa-file-image",gif:"fa-file-image",mp3:"fa-file-audio",wav:"fa-file-audio",mp4:"fa-file-video",avi:"fa-file-video",mkv:"fa-file-video"};var m=c(4116),w=c(8645),t=c(5879),h=c(6306),D=c(8504),T=c(6982),d=c(304),l=c(9862);let f=(()=>{var n;class r{constructor(e,o){this.authService=e,this.http=o,this.url=`${T.N.url_api}/cloud`,this.reloadDashboardSubject=new w.x,this.reloadDashboard$=this.reloadDashboardSubject.asObservable()}openDir(e){return this.http.get(`${this.url}/openDir/${e}`).pipe((0,h.K)(o=>this.handleError(o)))}reloadDashboard(e){this.reloadDashboardSubject.next(e)}handleError(e){return 401===e.status?(this.authService.logout(),(0,D._)("Unauthorized")):(0,D._)("Error unexpected")}}return(n=r).\u0275fac=function(e){return new(e||n)(t.LFG(d.e),t.LFG(l.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),r})();var p=c(3934),g=c(6992),k=c(3566),y=c(2599),v=c(6223),P=c(217),O=c(2939),C=c(6007);let I=(()=>{var n;class r{constructor(e){this.snackBarRef=e,this.downloadingText="Downloading..."}closeSnackBar(){this.snackBarRef.dismiss()}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(O.OX))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-download-snack-bar"]],inputs:{progressDownload:"progressDownload",downloadingText:"downloadingText"},decls:8,vars:3,consts:[[1,"snack-bar-container"],[1,"downloadText"],["mode","determinate",3,"value"],[1,"progressText"],[1,"icon-close",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2),t.qZA(),t._UZ(3,"mat-progress-bar",2),t.TgZ(4,"span",3),t._uU(5),t.qZA(),t.TgZ(6,"span",4),t.NdJ("click",function(){return o.closeSnackBar()}),t._uU(7,"\u2716"),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(o.downloadingText),t.xp6(1),t.Q6J("value",o.progressDownload),t.xp6(2),t.hij("",o.progressDownload,"%"))},dependencies:[C.pW],styles:[".snack-bar-container[_ngcontent-%COMP%]{display:flex;align-items:center;background-color:#fff;color:#000;border-radius:4px}.icon-close[_ngcontent-%COMP%]{font-size:20px;margin-left:15px;cursor:pointer}mat-progress-bar[_ngcontent-%COMP%]{flex-grow:1;margin-left:10px}.downloadText[_ngcontent-%COMP%]{font-weight:500;margin-right:10px}.progressText[_ngcontent-%COMP%]{margin-left:10px}"]}),r})();var x=c(9347),S=c(2296);let R=(()=>{var n;class r{constructor(e,o){this.dialogRef=e,this.data=o}closeDialog(){this.dialogRef.close()}confirm(){this.dialogRef.close({confirmed:!0,additionalData:"por si quieres pasar data a futuro"})}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(x.so),t.Y36(x.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-modal"]],decls:14,vars:2,consts:[["id","modal-container",1,"modal-container"],[1,"modal-header"],[1,"button-close",3,"click"],[1,"modal-body"],[1,"modal-footer"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return o.closeDialog()}),t._uU(5,"\xd7"),t.qZA()(),t.TgZ(6,"div",3)(7,"p"),t._uU(8),t.qZA()(),t.TgZ(9,"div",4)(10,"button",5),t.NdJ("click",function(){return o.closeDialog()}),t._uU(11,"Close"),t.qZA(),t.TgZ(12,"button",6),t.NdJ("click",function(){return o.confirm()}),t._uU(13,"Confirm"),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(o.data.title),t.xp6(5),t.Oqu(o.data.message))},dependencies:[S.lW],styles:["[_nghost-%COMP%]{height:100%;position:relative}.modal-container[_ngcontent-%COMP%]{padding-bottom:10px;box-shadow:0 0 6px #ccc}.modal-header[_ngcontent-%COMP%]{background-color:#fff;padding:10px;display:flex;align-items:center;justify-content:space-between}.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;border:none;background-color:transparent}.modal-body[_ngcontent-%COMP%]{background-color:#fff;padding:20px}.button-close[_ngcontent-%COMP%]{font-size:25px}.modal-footer[_ngcontent-%COMP%]{gap:10px;margin-right:10px}"]}),r})(),L=(()=>{var n;class r{constructor(e,o){this.http=e,this.authService=o,this.url=`${T.N.url_api}/cloud`,this.$newFolder=new t.vpe}uploadFile(e,o){const i=new FormData;for(const u in e)e.hasOwnProperty(u)&&i.append("files",e[u]);i.append("path",o);const s=new w.x;return this.http.post(`${this.url}/uploadFile/${o}`,i,{reportProgress:!0,observe:"events"}).subscribe(u=>{switch(u.type){case l.dt.UploadProgress:const M=u.total?Math.round(100*u.loaded/u.total):0;s.next({progress:M});break;case l.dt.Response:s.next({progress:100,event:u.body}),s.complete()}}),s.asObservable()}createFolder(e,o){return this.http.post(`${this.url}/createDir/${o}`,{name:e})}downloadFile(e){const o=new w.x;return this.http.get(`${this.url}/downloadFile/${e}`,{responseType:"blob",reportProgress:!0,observe:"events"}).subscribe(i=>{switch(i.type){case l.dt.DownloadProgress:const s=i.total?Math.round(100*i.loaded/i.total):0;o.next({progress:s});break;case l.dt.Response:o.next({progress:100,file:i.body}),o.complete()}}),o.asObservable()}deleteFile(e){return this.http.delete(`${this.url}/delete/${e}`)}}return(n=r).\u0275fac=function(e){return new(e||n)(t.LFG(l.eN),t.LFG(d.e))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),r})();var N=c(617),J=c(6311);function Y(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(a);const o=t.oxw();return t.KtG(o.download())}),t.TgZ(1,"mat-icon"),t._uU(2,"download"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Download"),t.qZA()()}}let $=(()=>{var n;class r{constructor(e,o,i,s){this.cloudService=e,this._snackBar=o,this.dialog=i,this.dashBoardService=s,this.isFile=!1,this.progressDownload=0}download(){const e=this._snackBar.openFromComponent(I,{duration:0,horizontalPosition:"right",verticalPosition:"top",panelClass:["white-snack-bar"],data:{progressDownload:this.progressDownload,downloadingText:"Downloading..."}});this.cloudService.downloadFile(this.path+"/"+this.name).subscribe({next:i=>{this.progressDownload=i.progress;const s=e.instance;if(s.progressDownload=this.progressDownload,i.file){const u=new Blob([i.file]);(0,P.saveAs)(u,this.name),s.downloadingText="Downloaded",setTimeout(()=>{e.dismiss()},3e3)}},error:i=>{alert("Error downloading file, please report.")},complete:()=>{this.progressDownload=0}})}deleteFile(){const e=this.path+"/"+this.name;this.dialog.open(R,{width:"250px",data:{title:"Delete",message:`Confirm deleting "${this.name}"`}}).afterClosed().subscribe(i=>{i?.confirmed&&(m.Z.setOption("timeOut","0"),m.Z.info("Deleting...",""),this.maskLoad.next(!0),this.cloudService.deleteFile(e).subscribe({next:s=>{this.maskLoad.next(!1),m.Z.setDefaultsOptions(),m.Z.clear(),m.Z.success(s.message,""),this.dashBoardService.reloadDashboard(!0)},error:()=>{this.maskLoad.next(!1),m.Z.clear(),m.Z.error("Error unexpected","")}}))})}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(L),t.Y36(O.ux),t.Y36(x.uw),t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-actions"]],inputs:{isFile:"isFile",path:"path",name:"name",maskLoad:"maskLoad"},decls:26,vars:2,consts:[["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item",""],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"]],template:function(e,o){if(1&e&&(t.TgZ(0,"button",0)(1,"mat-icon"),t._uU(2,"more_vert"),t.qZA()(),t.TgZ(3,"mat-menu",null,1)(5,"button",2)(6,"mat-icon"),t._uU(7,"edit"),t.qZA(),t.TgZ(8,"span"),t._uU(9,"Rename"),t.qZA()(),t.TgZ(10,"button",2)(11,"mat-icon"),t._uU(12,"drive_file_move"),t.qZA(),t.TgZ(13,"span"),t._uU(14,"Move"),t.qZA()(),t.TgZ(15,"button",2)(16,"mat-icon"),t._uU(17,"file_copy"),t.qZA(),t.TgZ(18,"span"),t._uU(19,"Copy"),t.qZA()(),t.TgZ(20,"button",3),t.NdJ("click",function(){return o.deleteFile()}),t.TgZ(21,"mat-icon"),t._uU(22,"delete"),t.qZA(),t.TgZ(23,"span"),t._uU(24,"Delete"),t.qZA()(),t.YNc(25,Y,5,0,"button",4),t.qZA()),2&e){const i=t.MAs(4);t.Q6J("matMenuTriggerFor",i),t.xp6(25),t.Q6J("ngIf",o.isFile)}},dependencies:[_.O5,N.Hw,J.VK,J.OP,J.p6,S.RK],styles:[".actions[_ngcontent-%COMP%]{width:25px;display:flex;justify-content:center;cursor:pointer;border-radius:20px;height:25px;align-items:center}.actions[_ngcontent-%COMP%]:hover{background:#ccc}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f1f1f1;min-width:160px;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;padding:12px 16px;text-decoration:none;display:block}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ddd}.show[_ngcontent-%COMP%]{display:block}"]}),r})();var E=c(8005),Z=c(1919);let Q=(()=>{var n;class r{constructor(e,o){this._bottomSheetRef=e,this.cloudService=o}openLink(e,o){this[o]()}folder(){this.cloudService.$newFolder.emit(!0),this._bottomSheetRef.dismiss()}file(){document.getElementById("file").click(),this._bottomSheetRef.dismiss()}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(E.oL),t.Y36(L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bottom-sheet"]],decls:11,vars:0,consts:[["mat-list-item","",3,"click"],["matListItemTitle",""],["matLine",""]],template:function(e,o){1&e&&(t.TgZ(0,"mat-nav-list")(1,"a",0),t.NdJ("click",function(s){return o.openLink(s,"folder")}),t.TgZ(2,"span",1),t._uU(3,"Folder"),t.qZA(),t.TgZ(4,"span",2),t._uU(5,"Create a new folder"),t.qZA()(),t.TgZ(6,"a",0),t.NdJ("click",function(s){return o.openLink(s,"file")}),t.TgZ(7,"span",1),t._uU(8,"File"),t.qZA(),t.TgZ(9,"span",2),t._uU(10,"Upload new file"),t.qZA()()())},dependencies:[Z.Hk,Z.Tg,Z.sL]}),r})();var z=c(2032);let j=(()=>{var n;class r{constructor(e,o){this.dialogRef=e,this.data=o}close(){this.dialogRef.close()}create(){if(!this.data.name.trim()||""==this.data.name.trim())return m.Z.error("Enter a name",""),void(this.data.name="");document.getElementById("create").click()}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(x.so),t.Y36(x.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-modal-folder"]],decls:13,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["cdkFocusInitial","","matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","id","create",2,"display","none",3,"mat-dialog-close"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Create new folder"),t.qZA(),t.TgZ(2,"div",1)(3,"p"),t._uU(4,"Enter folder name"),t.qZA(),t.TgZ(5,"input",2),t.NdJ("ngModelChange",function(s){return o.data.name=s}),t.qZA()(),t.TgZ(6,"div",3)(7,"button",4),t.NdJ("click",function(){return o.close()}),t._uU(8,"Cancel"),t.qZA(),t.TgZ(9,"button",4),t.NdJ("click",function(){return o.create()}),t._uU(10,"Create"),t.qZA(),t.TgZ(11,"button",5),t._uU(12,"Create"),t.qZA()()),2&e&&(t.xp6(5),t.Q6J("ngModel",o.data.name),t.xp6(6),t.Q6J("mat-dialog-close",o.data.name))},dependencies:[S.lW,x.ZT,x.uh,x.xY,x.H8,z.Nt,v.Fj,v.JJ,v.On]}),r})();var U=c(3305);const G=["expansionPanel"];function K(n,r){if(1&n&&t._UZ(0,"mat-progress-bar",10),2&n){const a=t.oxw();t.Q6J("value",a.progressUpload.value)}}function H(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"mat-icon",11),t.NdJ("click",function(){t.CHM(a);const o=t.oxw();return t.KtG(o.closeAccordion())}),t._uU(1,"close"),t.qZA()}}function W(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"Uploading files, please wait a moment"),t.qZA())}const X=function(n){return{color:n}};function V(n,r){if(1&n&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",12),t._uU(2),t.qZA(),t.TgZ(3,"div",13),t._uU(4),t.qZA(),t.TgZ(5,"div",14),t._uU(6),t.qZA()()),2&n){const a=r.$implicit;t.xp6(1),t.Q6J("ngStyle",t.VKq(4,X,200==a.status?"#0f9b0f":"#af1313")),t.xp6(1),t.Oqu(200==a.status?"check":"close"),t.xp6(2),t.Oqu(a.name),t.xp6(2),t.Oqu(a.message)}}let tt=(()=>{var n;class r{constructor(e,o,i,s){this._bottomSheet=e,this.cloudService=o,this.dialog=i,this.dashBoardService=s,this.$newActionReload=new t.vpe,this.panelOpenState=!1,this.progressUpload={text:"Uploading...",value:0,loading:!0,uploaded:[]}}ngOnInit(){this.$newFolder=this.cloudService.$newFolder.subscribe(()=>this.newFolderModal())}ngOnDestroy(){this.$newFolder.unsubscribe()}openBottomSheet(){this._bottomSheet.open(Q)}newFolderModal(){this.dialog.open(j,{data:{name:""}}).afterClosed().subscribe(o=>{o&&""!=o.trim()&&this.createFolder(o)})}createFolder(e){this.cloudService.createFolder(e.trim(),this.path).subscribe({next:o=>{m.Z.success(o.message,"Successful"),this.dashBoardService.reloadDashboard(!0)},error:o=>{m.Z.error(o.error.message,"Error"),this.maskLoad.next(!1)}})}uploadFile(e){const o=e.target.files;this.progressUpload.loading=!0,this.progressUpload.value=0,this.progressUpload.text="Uploading...",this.progressUpload.uploaded=[],this.expansionPanel.close(),document.getElementById("accordion-uploading").classList.add("show"),this.cloudService.uploadFile(o,this.path).subscribe({next:i=>{i?.event?(this.progressUpload.uploaded=i.event.responses,this.progressUpload.text="Finished",this.expansionPanel.open(),this.progressUpload.loading=!1,this.dashBoardService.reloadDashboard(!0)):this.progressUpload.value=i.progress},error:i=>{m.Z.error(i.error.message,"Error uploading files")},complete:()=>{document.getElementById("file").value=""}})}closeAccordion(){document.getElementById("accordion-uploading").classList.remove("show")}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(E.ch),t.Y36(L),t.Y36(x.uw),t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-upload"]],viewQuery:function(e,o){if(1&e&&t.Gf(G,7),2&e){let i;t.iGM(i=t.CRH())&&(o.expansionPanel=i.first)}},inputs:{path:"path",maskLoad:"maskLoad"},outputs:{$newActionReload:"$newActionReload"},decls:17,vars:5,consts:[[1,"button-container"],["mat-fab","","color","primary",1,"button_upload",3,"click"],["id","accordion-uploading"],[3,"opened","closed"],["expansionPanel",""],["mode","determinate",3,"value",4,"ngIf"],["class","icon-close-upload",3,"click",4,"ngIf"],[4,"ngIf"],[4,"ngFor","ngForOf"],["type","file","name","file","id","file","multiple","true",3,"change"],["mode","determinate",3,"value"],[1,"icon-close-upload",3,"click"],["matListItemIcon","",3,"ngStyle"],["matListItemTitle",""],["matListItemLine","",1,"message-uploaded"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.openBottomSheet()}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA()(),t.TgZ(4,"mat-accordion",2)(5,"mat-expansion-panel",3,4),t.NdJ("opened",function(){return o.panelOpenState=!0})("closed",function(){return o.panelOpenState=!1}),t.TgZ(7,"mat-expansion-panel-header")(8,"mat-panel-title"),t._uU(9),t.qZA(),t.TgZ(10,"mat-panel-description"),t.YNc(11,K,1,1,"mat-progress-bar",5),t.YNc(12,H,2,0,"mat-icon",6),t.qZA()(),t.YNc(13,W,2,0,"p",7),t.TgZ(14,"mat-list"),t.YNc(15,V,7,6,"mat-list-item",8),t.qZA()()()(),t.TgZ(16,"input",9),t.NdJ("change",function(s){return o.uploadFile(s)}),t.qZA()),2&e&&(t.xp6(9),t.hij(" ",o.progressUpload.text," "),t.xp6(2),t.Q6J("ngIf",o.progressUpload.loading),t.xp6(1),t.Q6J("ngIf",!o.progressUpload.loading),t.xp6(1),t.Q6J("ngIf",o.progressUpload.loading),t.xp6(2),t.Q6J("ngForOf",o.progressUpload.uploaded))},dependencies:[_.sg,_.O5,_.PC,N.Hw,S.cs,Z.i$,Z.Tg,Z.Yt,Z.WW,Z.sL,U.pp,U.ib,U.yz,U.yK,U.u4,C.pW],styles:[".button-container[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:10px;display:flex;flex-direction:column;align-items:end;gap:10px}.button_upload[_ngcontent-%COMP%]{background:#2d2c2c;color:#fff}#accordion-uploading[_ngcontent-%COMP%]{display:none;max-height:300px;max-width:250px;overflow:auto;box-shadow:0 0 6px #bdbdbd}#accordion-uploading.show[_ngcontent-%COMP%]{display:block}#file[_ngcontent-%COMP%]{opacity:0;position:absolute;top:-100px}.icon-close-upload[_ngcontent-%COMP%]{margin-left:auto}.message-uploaded[_ngcontent-%COMP%]{overflow-x:auto;text-overflow:unset}@media (min-width: 768px){#accordion-uploading[_ngcontent-%COMP%]{max-height:400px;max-width:350px}}"]}),r})();function et(n,r){if(1&n&&(t.TgZ(0,"div")(1,"span"),t._uU(2,"/ "),t.qZA(),t.TgZ(3,"a",12),t._uU(4),t.qZA()()),2&n){const a=r.$implicit;t.xp6(3),t.Q6J("routerLink",a.link),t.xp6(1),t.Oqu(a.path)}}function ot(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"div",20)(1,"div",21),t.NdJ("click",function(){const i=t.CHM(a).$implicit,s=t.oxw(2);return t.KtG(s.navigateFolder(i.name))}),t.TgZ(2,"span",22),t._UZ(3,"i",23),t.qZA(),t.TgZ(4,"p",24),t._uU(5),t.qZA()(),t._UZ(6,"app-actions",25),t.qZA()}if(2&n){const a=r.$implicit,e=t.oxw(2);t.xp6(1),t.s9C("title",a),t.xp6(4),t.Oqu(a.name),t.xp6(1),t.s9C("name",a.name),t.s9C("path",e.path),t.Q6J("maskLoad",e.maskLoad)}}function nt(n,r){if(1&n&&(t.TgZ(0,"div",26)(1,"div",27)(2,"span",22),t._UZ(3,"i"),t.qZA(),t.TgZ(4,"p",24),t._uU(5),t.qZA()(),t._UZ(6,"app-actions",28),t.qZA()),2&n){const a=r.$implicit,e=t.oxw(2);t.xp6(1),t.s9C("title",a),t.xp6(2),t.Gre("fas ",e.getIcon(a.name),""),t.xp6(2),t.Oqu(a.name),t.xp6(1),t.s9C("name",a.name),t.s9C("path",e.path),t.Q6J("maskLoad",e.maskLoad)("isFile",!0)}}function at(n,r){if(1&n&&(t.TgZ(0,"div",13)(1,"div",14)(2,"div",15),t.YNc(3,ot,7,5,"div",16),t.qZA()(),t.TgZ(4,"div",17)(5,"div",18),t.YNc(6,nt,7,9,"div",19),t.qZA()()()),2&n){const a=t.oxw();t.xp6(3),t.Q6J("ngForOf",a.data.content.directories),t.xp6(3),t.Q6J("ngForOf",a.data.content.files)}}function it(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"tr",37)(1,"td",38),t.NdJ("click",function(){const i=t.CHM(a).$implicit,s=t.oxw(3);return t.KtG(s.navigateFolder(i.name))}),t.TgZ(2,"span",22),t._UZ(3,"i",23),t.qZA()(),t.TgZ(4,"td",38),t.NdJ("click",function(){const i=t.CHM(a).$implicit,s=t.oxw(3);return t.KtG(s.navigateFolder(i.name))}),t._uU(5),t.qZA(),t.TgZ(6,"td",38),t.NdJ("click",function(){const i=t.CHM(a).$implicit,s=t.oxw(3);return t.KtG(s.navigateFolder(i.name))}),t._uU(7," \u2014 "),t.qZA(),t.TgZ(8,"td",38),t.NdJ("click",function(){const i=t.CHM(a).$implicit,s=t.oxw(3);return t.KtG(s.navigateFolder(i.name))}),t._uU(9),t.qZA(),t.TgZ(10,"td",39),t._UZ(11,"app-actions",25),t.qZA()()}if(2&n){const a=r.$implicit,e=t.oxw(3);t.xp6(5),t.Oqu(a.name),t.xp6(4),t.Oqu(e.getDate(a.createdAt)),t.xp6(2),t.s9C("name",a.name),t.s9C("path",e.path),t.Q6J("maskLoad",e.maskLoad)}}function rt(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"table",30),t.NdJ("matSortChange",function(o){t.CHM(a);const i=t.oxw(2);return t.KtG(i.sortDirectories(o))}),t.TgZ(1,"tr"),t._UZ(2,"th",31),t.TgZ(3,"th",32),t._uU(4,"Name"),t.qZA(),t.TgZ(5,"th",33),t._uU(6,"Size"),t.qZA(),t.TgZ(7,"th",34),t._uU(8,"Date"),t.qZA(),t.TgZ(9,"th",35),t._uU(10,"Actions"),t.qZA()(),t.YNc(11,it,12,5,"tr",36),t.qZA()}if(2&n){const a=t.oxw(2);t.xp6(11),t.Q6J("ngForOf",a.sortedDirectories)}}function st(n,r){if(1&n&&(t.TgZ(0,"tr",42)(1,"td")(2,"span",22),t._UZ(3,"i"),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._UZ(11,"app-actions",28),t.qZA()()),2&n){const a=r.$implicit,e=t.oxw(3);t.xp6(3),t.Gre("fas ",e.getIcon(a.name),""),t.xp6(2),t.Oqu(a.name),t.xp6(2),t.Oqu(e.getSize(a.size)),t.xp6(2),t.Oqu(e.getDate(a.createdAt)),t.xp6(2),t.s9C("name",a.name),t.s9C("path",e.path),t.Q6J("maskLoad",e.maskLoad)("isFile",!0)}}function lt(n,r){if(1&n){const a=t.EpF();t.TgZ(0,"table",30),t.NdJ("matSortChange",function(o){t.CHM(a);const i=t.oxw(2);return t.KtG(i.sortFiles(o))}),t.TgZ(1,"tr"),t._UZ(2,"th",31),t.TgZ(3,"th",32),t._uU(4,"Name"),t.qZA(),t.TgZ(5,"th",40),t._uU(6,"Size"),t.qZA(),t.TgZ(7,"th",34),t._uU(8,"Date"),t.qZA(),t.TgZ(9,"th",35),t._uU(10,"Actions"),t.qZA()(),t.YNc(11,st,12,10,"tr",41),t.qZA()}if(2&n){const a=t.oxw(2);t.xp6(11),t.Q6J("ngForOf",a.sortedFiles)}}function ct(n,r){if(1&n&&(t.TgZ(0,"div",13),t.YNc(1,rt,12,1,"table",29),t.YNc(2,lt,12,1,"table",29),t.qZA()),2&n){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.data.content.directories.length>0||a.loading),t.xp6(1),t.Q6J("ngIf",a.data.content.files.length>0||a.loading)}}function dt(n,r){1&n&&(t.TgZ(0,"div",43),t._uU(1," This folder is empty "),t.qZA())}function pt(n,r){1&n&&(t.TgZ(0,"div",43),t._uU(1," Your drive is empty "),t.qZA())}function ut(n,r){if(1&n&&(t.TgZ(0,"div",43),t.YNc(1,dt,2,0,"div",9),t.YNc(2,pt,2,0,"div",9),t.qZA()),2&n){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.data.path),t.xp6(1),t.Q6J("ngIf",""==a.data.path)}}const mt=[{path:"",component:(()=>{var n;class r{constructor(e,o,i){this.router=e,this.dashBoardService=o,this.userService=i,this.viewTable=!0,this.maskLoad=new w.x,this.loading=!0,this.paths=[],this.data={path:"",content:{directories:[],files:[]}},this.sortedDirectories=[],this.sortedFiles=[],window.innerWidth<768&&(this.viewTable=!1)}ngOnInit(){this.processURL(),this.urlSubscription=this.router.events.subscribe(e=>{e instanceof b.m2&&this.processURL()}),this.dashBoardService.reloadDashboard$.subscribe(e=>{this.newActionReload()})}ngOnDestroy(){this.urlSubscription.unsubscribe()}processURL(){const e=[],o=this.router.url.split("/").slice(2);o.forEach((i,s)=>{const u=o.slice(0,s+1).join("/");e.push({path:i,link:`/r/${u}`})}),this.paths=this.router.url.split("/").length>2?e:[],this.path=o.join("/"),this.openDir()}getIcon(e){const o=e.split(".");return A[o[o.length-1]]??A.default}navigateFolder(e){this.router.navigate(["/r/"+(this.path+"/"+e)])}newActionReload(){this.openDir(),this.userService.userProfile.emit(!0)}compare(e,o,i){if("string"==typeof e&&"string"==typeof o){const s=new Date(e),u=new Date(o);!isNaN(s.getTime())&&!isNaN(u.getTime())&&(e=s,o=u)}else e instanceof Date&&o instanceof Date&&(e=e.getTime(),o=o.getTime());return(e<o?-1:1)*(i?1:-1)}getDate(e){const i=new Date(e);return new Intl.DateTimeFormat("es-ES",{day:"2-digit",month:"short",year:"numeric"}).format(i)}getSize(e){if(0==e)return"0 MB";const o=(e/1024).toFixed(0);return o>=1048576?`${(o/1048576).toFixed(2)} GB`:o>=1024?`${(o/1024).toFixed(2)} MB`:`${o} KB`}sortDirectories(e){this.sortData(e,"directories")}sortFiles(e){this.sortData(e,"files")}sortData(e,o){const i=this.data.content[o].slice();this["files"==o?"sortedFiles":"sortedDirectories"]=e&&e.active&&""!==e.direction?i.sort((u,M)=>{const B="asc"===e.direction;switch(e.active){case"name":return this.compare(u.name,M.name,B);case"size":return this.compare(u.size,M.size,B);case"date":return this.compare(u.createdAt,M.createdAt,B);default:return 0}}):i}openDir(){this.maskLoad.next(!0),this.dashBoardService.openDir(this.path).subscribe({next:e=>{this.data=e,this.sortDirectories(null),this.sortFiles(null)},error:e=>{m.Z.error(`/${this.path} - Forbidden.`,""),this.router.navigate(["/"])},complete:()=>{this.loading=!1,this.maskLoad.next(!1)}})}}return(n=r).\u0275fac=function(e){return new(e||n)(t.Y36(b.F0),t.Y36(f),t.Y36(p.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:16,vars:8,consts:[[1,"dashboard"],[1,"pathDiv"],[1,"path"],["routerLink","/"],[1,"fas","fa-home"],[4,"ngFor","ngForOf"],[1,"data"],[3,"ngModel","ngModelChange"],["class","data-container",4,"ngIf"],["class","empty",4,"ngIf"],[3,"path","maskLoad"],[3,"showEvent"],[1,"detail",3,"routerLink"],[1,"data-container"],[1,"folders-container"],[1,"folders"],["class","folder",4,"ngFor","ngForOf"],[1,"files-container"],[1,"files"],["class","file",4,"ngFor","ngForOf"],[1,"folder"],["data-toggle","tooltip","data-placement","bottom",1,"folder-name",3,"title","click"],[1,"icon"],[1,"fas","fa-folder"],[1,"name"],[3,"maskLoad","name","path"],[1,"file"],["data-toggle","tooltip","data-placement","bottom",1,"file-name",3,"title"],[3,"maskLoad","name","path","isFile"],["matSort","","class","table",3,"matSortChange",4,"ngIf"],["matSort","",1,"table",3,"matSortChange"],["width","5%"],["width","45%","mat-sort-header","name"],["width","15%"],["width","15%","mat-sort-header","date"],["width","20%"],["class","containerDir",4,"ngFor","ngForOf"],[1,"containerDir"],[1,"open",3,"click"],[1,"no-open"],["width","15%","mat-sort-header","size"],["class","containerFiles",4,"ngFor","ngForOf"],[1,"containerFiles"],[1,"empty"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t._UZ(4,"i",4),t.qZA()(),t.YNc(5,et,5,2,"div",5),t.qZA(),t.TgZ(6,"div",6)(7,"h2"),t._uU(8," My unit "),t.TgZ(9,"mat-slide-toggle",7),t.NdJ("ngModelChange",function(s){return o.viewTable=s}),t._uU(10,"View Table"),t.qZA()(),t.YNc(11,at,7,2,"div",8),t.YNc(12,ct,3,2,"div",8),t.qZA(),t.YNc(13,ut,3,2,"div",9),t._UZ(14,"app-upload",10)(15,"app-loading",11),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngForOf",o.paths),t.xp6(4),t.Q6J("ngModel",o.viewTable),t.xp6(2),t.Q6J("ngIf",!o.viewTable),t.xp6(1),t.Q6J("ngIf",o.viewTable),t.xp6(1),t.Q6J("ngIf",o.data.content.directories.length<1&&o.data.content.files.length<1&&!o.loading),t.xp6(1),t.Q6J("path",o.path)("maskLoad",o.maskLoad),t.xp6(1),t.Q6J("showEvent",o.maskLoad))},dependencies:[_.sg,_.O5,b.rH,g.N,k.YE,k.nU,y.Rr,v.JJ,v.On,$,tt],styles:[".dashboard[_ngcontent-%COMP%]{width:90%;height:92vh;background:#FFF;margin:0 auto;padding:20px;position:relative;top:20px;border-radius:5px;overflow:hidden;display:grid;grid-template-rows:auto auto 1fr}.data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding-bottom:10px;margin-bottom:10px}.data-container[_ngcontent-%COMP%]{height:calc(92vh - 100px);width:calc(100vw - 150px);overflow:auto}.data-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;color:#757575}.pathDiv[_ngcontent-%COMP%]{display:flex;gap:0 5px;font-size:17px}.files-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .folders-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:10px 0}.files[_ngcontent-%COMP%], .folders[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.file[_ngcontent-%COMP%], .folder[_ngcontent-%COMP%], .pathDiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0000008a}.file-name[_ngcontent-%COMP%]:hover, .folder-name[_ngcontent-%COMP%]:hover, .pathDiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#00000061}.containerDir[_ngcontent-%COMP%]:hover{background:rgba(212,212,212,.3803921569);cursor:pointer}.containerDir[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{background:transparent}.no-open[_ngcontent-%COMP%]{background:#fff}.file[_ngcontent-%COMP%], .folder[_ngcontent-%COMP%]{display:grid;grid-template-columns:70% 1fr;width:200px;align-items:center;padding:0 12px;font-size:19px;height:50px;margin:0 5px 10px;border-radius:5px;overflow:hidden}.folder[_ngcontent-%COMP%]{cursor:pointer}.file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .folder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:19px;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.file-name[_ngcontent-%COMP%], .folder-name[_ngcontent-%COMP%]{display:flex;max-width:100%;height:100%;align-items:center;gap:15px}.empty[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:18px;position:absolute;top:50%;width:100%}.table[_ngcontent-%COMP%]{width:100%;font-size:15px}@media (min-width: 600px){.data-container[_ngcontent-%COMP%]{width:100%}}"]}),r})()}];let gt=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[b.Bz.forChild(mt),b.Bz]}),r})();var ft=c(4477);let ht=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.ez,gt,ft.m,v.u5]}),r})()},217:function(q,F){var c,b;void 0!==(b="function"==typeof(c=function(){"use strict";function m(d,l,f){var p=new XMLHttpRequest;p.open("GET",d),p.responseType="blob",p.onload=function(){T(p.response,l,f)},p.onerror=function(){console.error("could not download file")},p.send()}function w(d){var l=new XMLHttpRequest;l.open("HEAD",d,!1);try{l.send()}catch{}return 200<=l.status&&299>=l.status}function t(d){try{d.dispatchEvent(new MouseEvent("click"))}catch{var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),d.dispatchEvent(l)}}var h="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,D=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),T=h.saveAs||("object"!=typeof window||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!D?function(d,l,f){var p=h.URL||h.webkitURL,g=document.createElement("a");g.download=l=l||d.name||"download",g.rel="noopener","string"==typeof d?(g.href=d,g.origin===location.origin?t(g):w(g.href)?m(d,l,f):t(g,g.target="_blank")):(g.href=p.createObjectURL(d),setTimeout(function(){p.revokeObjectURL(g.href)},4e4),setTimeout(function(){t(g)},0))}:"msSaveOrOpenBlob"in navigator?function(d,l,f){if(l=l||d.name||"download","string"!=typeof d)navigator.msSaveOrOpenBlob(function A(d,l){return typeof l>"u"?l={autoBom:!1}:"object"!=typeof l&&(console.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type)?new Blob(["\ufeff",d],{type:d.type}):d}(d,f),l);else if(w(d))m(d,l,f);else{var p=document.createElement("a");p.href=d,p.target="_blank",setTimeout(function(){t(p)})}}:function(d,l,f,p){if((p=p||open("","_blank"))&&(p.document.title=p.document.body.innerText="downloading..."),"string"==typeof d)return m(d,l,f);var g="application/octet-stream"===d.type,k=/constructor/i.test(h.HTMLElement)||h.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||g&&k||D)&&typeof FileReader<"u"){var v=new FileReader;v.onloadend=function(){var C=v.result;C=y?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=C:location=C,p=null},v.readAsDataURL(d)}else{var P=h.URL||h.webkitURL,O=P.createObjectURL(d);p?p.location=O:location.href=O,p=null,setTimeout(function(){P.revokeObjectURL(O)},4e4)}});h.saveAs=T.saveAs=T,q.exports=T})?c.apply(F,[]):c)&&(q.exports=b)}}]);