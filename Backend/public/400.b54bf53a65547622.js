"use strict";(self.webpackChunkMigracion=self.webpackChunkMigracion||[]).push([[400],{4752:(v,r,i)=>{i.r(r),i.d(r,{MainModule:()=>m});var d=i(6814),l=i(3403),p=i(4116),M=i(8645),u=i(4664),n=i(5879),C=i(304),O=i(3934),P=i(6992);let f=(()=>{var e;class a{constructor(o,t){this.authService=o,this.userService=t,this.maskLoad=new M.x}ngOnInit(){if(window.innerWidth>764){const c=document.querySelector(".sidebar"),x=document.querySelector("#btn");c.classList.add("open"),x.classList.replace("bx-menu","bx-menu-alt-right")}const t=this.authService.getAuth();this.user=t.user,this.userService.userProfile.pipe((0,u.w)(()=>this.userService.getProfile())).subscribe(c=>{this.user=c})}menuToggle(o=!1){const t=document.querySelector(".sidebar");o?t.classList.add("open"):t.classList.toggle("open"),this.menuBtnChange(),o||this.removeAnalytics()}menuBtnChange(){const o=document.querySelector(".sidebar"),t=document.querySelector("#btn");o.classList.contains("open")?t.classList.replace("bx-menu","bx-menu-alt-right"):t.classList.replace("bx-menu-alt-right","bx-menu")}logout(){this.maskLoad.next(!0),setTimeout(()=>{p.Z.info("Goodbye!",""),this.maskLoad.next(!1),this.authService.logout()},1e3)}collapseAnalitycs(){this.menuToggle(!0);const o=document.querySelector(".collapse-analytics"),t=document.querySelector(".bxs-chevron-down");o.classList.contains("collapse")?(t.classList.remove("collapseIcon"),t.classList.add("collapseIconBack")):(t.classList.add("collapseIcon"),t.classList.remove("collapseIconBack")),o.classList.toggle("collapse")}removeAnalytics(){const o=document.querySelector(".collapse-analytics"),t=document.querySelector(".bxs-chevron-down");t.classList.remove("collapseIcon"),t.classList.remove("collapseIconBack"),o.classList.remove("collapse")}}return(e=a).\u0275fac=function(o){return new(o||e)(n.Y36(C.e),n.Y36(O.K))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-main"]],decls:66,vars:6,consts:[[1,"sidebar"],[1,"logo-details"],[1,"fa-solid","fa-cloud-arrow-up","icon"],[1,"logo_name"],["id","btn",1,"bx","bx-menu",3,"click"],[1,"nav-list"],["routerLink","/"],[1,"bx","bx-grid-alt"],[1,"links_name"],[1,"tooltip"],["routerLink","/folders"],[1,"bx","bx-folder"],["routerLink","/files"],[1,"bx","bx-file"],[1,"analitycs",3,"click"],[1,"bx","bx-pie-chart-alt-2"],[1,"bx","bxs-chevron-down"],[1,"collapse-analytics"],[1,"analytic"],[1,"title"],[1,"title","last"],["routerLink","/settings"],[1,"bx","bx-cog"],[1,"profile"],[1,"profile-details"],[1,"name"],["id","log_out",1,"bx","bx-log-out",3,"click"],[1,"home-section"],[3,"showEvent"]],template:function(o,t){1&o&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"i",2),n.TgZ(3,"div",3),n._uU(4,"SenntCloud"),n.qZA(),n.TgZ(5,"i",4),n.NdJ("click",function(){return t.menuToggle()}),n.qZA()(),n.TgZ(6,"ul",5)(7,"li")(8,"a",6),n._UZ(9,"i",7),n.TgZ(10,"span",8),n._uU(11,"Dashboard"),n.qZA()(),n.TgZ(12,"span",9),n._uU(13,"Dashboard"),n.qZA()(),n.TgZ(14,"li")(15,"a",10),n._UZ(16,"i",11),n.TgZ(17,"span",8),n._uU(18,"All Folders"),n.qZA()(),n.TgZ(19,"span",9),n._uU(20,"All Folders"),n.qZA()(),n.TgZ(21,"li")(22,"a",12),n._UZ(23,"i",13),n.TgZ(24,"span",8),n._uU(25,"All Files"),n.qZA()(),n.TgZ(26,"span",9),n._uU(27,"All Files"),n.qZA()(),n.TgZ(28,"li")(29,"a",14),n.NdJ("click",function(){return t.collapseAnalitycs()}),n._UZ(30,"i",15),n.TgZ(31,"span",8),n._uU(32,"Analytics"),n.qZA(),n._UZ(33,"i",16),n.qZA(),n.TgZ(34,"span",9),n._uU(35,"Analytics"),n.qZA()(),n.TgZ(36,"div",17)(37,"div",18)(38,"p",19),n._uU(39),n.qZA()(),n.TgZ(40,"div",18)(41,"p",19),n._uU(42),n.qZA()(),n.TgZ(43,"div",18)(44,"p",19),n._uU(45),n.qZA()(),n.TgZ(46,"div",18)(47,"p",20),n._uU(48),n.qZA()()(),n.TgZ(49,"li")(50,"a",21),n._UZ(51,"i",22),n.TgZ(52,"span",8),n._uU(53,"Settings"),n.qZA()(),n.TgZ(54,"span",9),n._uU(55,"Settings"),n.qZA()(),n.TgZ(56,"li",23)(57,"div",24)(58,"div",25),n._uU(59),n.qZA()(),n.TgZ(60,"i",26),n.NdJ("click",function(){return t.logout()}),n.qZA(),n.TgZ(61,"span",9),n._uU(62,"Logout"),n.qZA()()()(),n.TgZ(63,"section",27),n._UZ(64,"router-outlet"),n.qZA(),n._UZ(65,"app-loading",28)),2&o&&(n.xp6(39),n.hij("Space avaible: ",t.user.analytics.maxCloudSize,""),n.xp6(3),n.hij("Space used: ",t.user.analytics.totalSize,""),n.xp6(3),n.hij("Folders: ",t.user.analytics.folders,""),n.xp6(3),n.hij("Files: ",t.user.analytics.files,""),n.xp6(11),n.Oqu(t.user.username),n.xp6(6),n.Q6J("showEvent",t.maskLoad))},dependencies:[l.lC,l.rH,P.N],styles:[".sidebar[_ngcontent-%COMP%]{position:fixed;left:0;top:0;height:100%;width:78px;background:#11101D;padding:6px 14px;z-index:99;transition:all .5s ease}.sidebar.open[_ngcontent-%COMP%]{width:250px}.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]{height:60px;display:flex;align-items:center;position:relative}.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{opacity:0;transition:all .5s ease}.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:600;opacity:0;transition:all .5s ease}.sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   .logo_name[_ngcontent-%COMP%]{opacity:1}.sidebar[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%]{position:absolute;top:50%;right:0;transform:translateY(-50%);font-size:22px;transition:all .4s ease;font-size:23px;text-align:center;cursor:pointer;transition:all .5s ease}.sidebar.open[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   #btn[_ngcontent-%COMP%]{text-align:right}.sidebar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;height:60px;min-width:50px;font-size:28px;text-align:center;line-height:60px}.sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.bxs-chevron-down[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.bxs-chevron-down[_ngcontent-%COMP%]{margin-left:auto;opacity:0;pointer-events:none}.sidebar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{margin-top:20px;height:100%;padding-left:0}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;margin:8px 0;list-style:none}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{position:absolute;top:-20px;left:calc(100% + 15px);z-index:3;background:#fff;box-shadow:0 5px 10px #0000004d;padding:6px 12px;border-radius:4px;font-size:15px;font-weight:400;opacity:0;white-space:nowrap;pointer-events:none;transition:0s}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]{opacity:1;pointer-events:auto;transition:all .4s ease;top:50%;transform:translateY(-50%)}.sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{display:none}.sidebar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:15px;color:#fff;font-weight:400;outline:none;height:50px;width:100%;width:50px;border:none;border-radius:12px;transition:all .5s ease;background:#1d1b31}.sidebar.open[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:0 20px 0 50px;width:100%}.sidebar[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;transform:translateY(-50%);font-size:22px;background:#1d1b31;color:#fff}.sidebar.open[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%]:hover{background:#1d1b31;color:#fff}.sidebar[_ngcontent-%COMP%]   .bx-search[_ngcontent-%COMP%]:hover{background:#FFF;color:#11101d}.sidebar[_ngcontent-%COMP%]   .analitycs[_ngcontent-%COMP%]{cursor:pointer}.sidebar[_ngcontent-%COMP%]   .collapse-analytics[_ngcontent-%COMP%]{color:#fff;padding:0 35px;display:none;opacity:0;transform:translateY(-20px);animation:_ngcontent-%COMP%_fadeInFromTop .5s forwards}.sidebar[_ngcontent-%COMP%]   .collapse-analytics.collapse[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_fadeInFromTop{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.bxs-chevron-down.collapseIcon[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotate180 .5s forwards}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.bxs-chevron-down.collapseIconBack[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_rotateBack .5s forwards}@keyframes _ngcontent-%COMP%_rotate180{0%{transform:rotate(0)}to{transform:rotate(180deg)}}@keyframes _ngcontent-%COMP%_rotateBack{0%{transform:rotate(180deg)}to{transform:rotate(0)}}.sidebar[_ngcontent-%COMP%]   .collapse-analytics[_ngcontent-%COMP%]   .analytic[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;padding-bottom:5px;margin-bottom:5px}.sidebar[_ngcontent-%COMP%]   .collapse-analytics[_ngcontent-%COMP%]   .analytic[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.last){border-bottom:1px solid #fff}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;border-radius:12px;align-items:center;text-decoration:none;transition:all .4s ease;background:#11101D}.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   i#log_out[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#FFF}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-weight:400;white-space:nowrap;opacity:0;pointer-events:none;transition:.4s}.sidebar.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .links_name[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .links_name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transition:all .5s ease;color:#11101d}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{height:50px;line-height:50px;font-size:18px;border-radius:12px}.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]{position:fixed;height:60px;width:78px;left:0;bottom:-8px;padding:10px 14px;background:#1d1b31;transition:all .5s ease}.sidebar.open[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]{width:250px}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .profile-details[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:nowrap}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:45px;width:45px;object-fit:cover;border-radius:6px;margin-right:10px}.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]{display:flex}.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]{font-size:15px;font-weight:400;color:#fff;white-space:nowrap}.sidebar[_ngcontent-%COMP%]   li.profile[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]{font-size:12px}.sidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%]{position:absolute;top:50%;right:0;transform:translateY(-50%);background:#1d1b31;width:100%;height:60px;line-height:60px;border-radius:0;transition:all .5s ease;cursor:pointer}.sidebar.open[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   #log_out[_ngcontent-%COMP%]{width:50px;background:none}.home-section[_ngcontent-%COMP%]{position:relative;background:#E4E9F7;min-height:100vh;top:0;left:78px;width:calc(100% - 78px);transition:all .5s ease;z-index:2}.sidebar.open[_ngcontent-%COMP%] ~ .home-section[_ngcontent-%COMP%]{left:250px;width:calc(100% - 250px)}.home-section[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:inline-block;color:#11101d;font-size:25px;font-weight:500;margin:18px}@media (max-width: 420px){.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{display:none}}"]}),a})();var g=i(2096);const h=[{path:"",component:f,children:[{path:"settings",loadChildren:()=>i.e(162).then(i.bind(i,4162)).then(e=>e.SettingsModule)},{path:"**",loadChildren:()=>i.e(674).then(i.bind(i,9674)).then(e=>e.DashboardModule),canActivate:[(e,a)=>{const s=(0,n.f3M)(l.F0);return"/"==a.url||("r"==a.url.split("/")[1]&&a.url.split("/").length<=2?(s.navigate(["/"]),(0,g.of)(!1)):"r"==a.url.split("/")[1]||(s.navigate([`/r${a.url}`]),(0,g.of)(!1)))}]}]}];let b=(()=>{var e;class a{}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.Bz.forChild(h),l.Bz]}),a})();var _=i(4477);let m=(()=>{var e;class a{}return(e=a).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.ez,b,_.m]}),a})()}}]);