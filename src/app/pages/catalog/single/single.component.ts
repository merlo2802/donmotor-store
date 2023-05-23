import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { apartments, latestCar } from './single.model';
import { apartmentsData, latestCarData } from './data';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})

/**
 * Single Component
 */
export class SingleComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  apartmentsData!: apartments[];
  latestCarData!: latestCar[];
  public firstColleaps = true;
  public msgColleaps = true;

  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Used cars', link:'' },
      { label: 'Mercedes-Benz E 400 Cabriolet', active: true }
    ];

    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    // Data Get Function
    this._fetchData();
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Data Fetch
  private _fetchData() {
    this.apartmentsData = apartmentsData;
    this.latestCarData = latestCarData;
  }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true
  };

  /**
   * Latest Car Swiper setting
   */
   LatestCar = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: true,
    navigation: true,
    loop: true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 3,
      }
    }
  };

   /**
  * Bootsrap validation form submit method
  */
    validSubmit() {
      this.submit = true;
    }

    /**
   * Returns form
   */
   get form() {
    return this.validationform.controls;
  }
}
