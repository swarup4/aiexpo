import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
// import { MenuItems } from './menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  mobileQuery: MediaQueryList;

  MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
    { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5' },
    { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' },
    { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' },
    { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
    { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
    { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
    { state: 'expansion', type: 'link', name: 'Expansion Panel', icon: 'vertical_align_center' },
    { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
    { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
    { state: 'progress-snipper', type: 'link', name: 'Progress snipper', icon: 'border_horizontal' },
    { state: 'progress', type: 'link', name: 'Progress Bar', icon: 'blur_circular' },
    { state: 'dialog', type: 'link', name: 'Dialog', icon: 'assignment_turned_in' },
    { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
    { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
    { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
    { state: 'slide-toggle', type: 'link', name: 'Slide Toggle', icon: 'all_inclusive' }
  ];


  private _mobileQueryListener: () => void;

  constructor(public changeDetectorRef: ChangeDetectorRef, public media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

