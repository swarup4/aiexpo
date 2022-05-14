import { MediaMatcher, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component,OnDestroy,AfterViewInit, OnInit} from '@angular/core';
// import { MenuItems } from '../common/sidebar/menu-items';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // mobileQuery: MediaQueryList;

  // private _mobileQueryListener: () => void;

  search: boolean = false;

  

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
    // public menuItems: MenuItems
  ) {
    // this.mobileQuery = media.matchMedia('(min-width: 768px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }

  

  ngOnInit(): void {
  }

}
