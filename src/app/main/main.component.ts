import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItems } from './menu-items';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  search: boolean = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private breakpointObserver: BreakpointObserver
    // public menuItems: MenuItems
  ) {
    // this.mobileQuery = media.matchMedia('(min-width: 768px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  routerActive: string = "activelink";

  sidebarMenu = MenuItems

}
