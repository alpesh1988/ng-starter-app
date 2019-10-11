import { Component, OnInit, ViewChild } from '@angular/core';
import { APP_CONSTANTS } from '../../app.constant';
import { MatSidenav } from '@angular/material';
import { NavigationItem } from '../../app.interfaces';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component( {
  selector: 'real-sidebar',
  templateUrl: './sidebar.component.html'
} )
export class SidebarComponent implements OnInit {

  @ViewChild( 'matSidenav' ) sidebar: MatSidenav;

  public showScrollToTopButton = false;
  public activeNavItem: NavigationItem;
  public navigationItems: Array<NavigationItem>;

  constructor( private router: Router ) {
  }

  public ngOnInit(): void {
    this.initializeNavItems();

    this.activeNavItem = this.navigationItems.find( item => this.router.url.includes( item.url ) );

    this.router.events.pipe( filter( event => event instanceof NavigationEnd ) )
      .subscribe( ( event: NavigationEnd ) => {
        for ( const item of this.navigationItems ) {
          if ( event.urlAfterRedirects.includes( item.url ) ) {
            this.activeNavItem = item;
          }
        }
      } );
  }

  public scrollHandler(): void {
    const currentScrollPosition = document.querySelector( 'mat-sidenav-content' ).scrollTop;
    this.showScrollToTopButton = currentScrollPosition > APP_CONSTANTS.SHOW_SCROLL_TO_TOP_BUTTON_POSITION;
  }

  public scrollToTop(): void {
    document.querySelector( 'mat-sidenav-content' ).scroll( { top: 0, left: 0, behavior: 'smooth' } );
  }

  public toggleSidebar(): void {
    this.sidebar.opened = !this.sidebar.opened;
  }

  public navigateToPage( index: number ): void {
    this.sidebar.opened = false;
    this.activeNavItem = this.navigationItems[ index ];
    this.router.navigate( [ {
      outlets: { primary: [ this.navigationItems[ index ].url ] }
    } ] )
      .then();
  }

  private initializeNavItems(): void {

    this.navigationItems = [];

    const dashboardItem: NavigationItem = {
      name: APP_CONSTANTS.PAGES.DASHBOARD.NAME,
      url: APP_CONSTANTS.PAGES.DASHBOARD.URL,
      icon: 'dashboard'
    };

    const dashboard1Item: NavigationItem = {
      name: 'PAGE_2',
      url: 'PAGE_2',
      icon: 'refresh'
    };

    this.navigationItems.push( dashboardItem, dashboard1Item );
  }
}
