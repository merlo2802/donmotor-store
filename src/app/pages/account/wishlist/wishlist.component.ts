import { Component, OnInit } from '@angular/core';

import { List } from './wishlist.model';
import { listData } from './data';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

/**
 * Wishlist Component
 */
export class WishlistComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  listData!: List[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/info' },
      { label: 'Wishlist', active: true }
    ];

    // Chat Data Get Function
    this._fetchData();

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Chat Data Fetch
  private _fetchData() {
    this.listData = listData;
  }

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop:true
  };

}
