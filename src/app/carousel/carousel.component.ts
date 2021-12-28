import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, AfterViewInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation, Swiper } from "swiper";
import swiper from 'swiper';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() courses: any
  @Input() multipleData: any
  @Input() className: any

  multipleSlide = true
  data = "swiper-container"
  datValuedata: any
  linkedValueLength: any
  slideLength: any

  constructor() {
    this.ngOnInit()
  }

  async ngOnInit() {
    const swiperCarousels = document.querySelectorAll(".swiper-container");
    const numberOfWrapers = document.querySelectorAll('.swiper-wrapper')
    var dara = numberOfWrapers.forEach((dat) => {
      dat.children
    })
    console.log(dara)
    var numberOfChild = numberOfWrapers.forEach((dat: any) => {
      if (dat.children.length >= 4) {
        this.slideLength = dat.children
      }
    })
    console.log(numberOfWrapers)


    if (swiperCarousels.length) {
      await swiperCarousels.forEach((carouselContainer: any) => {

        const carouselPrevButton =
          carouselContainer.querySelector(".prev") ||
          carouselContainer.parentElement.querySelector(
            ".prev"
          );

        const carouselNextButton =
          carouselContainer.querySelector(".next") ||
          carouselContainer.parentElement.querySelector(
            ".next"
          );

        const swiperInstance = new Swiper(".swiper-container", {
          setWrapperSize: true,
          scrollbar: false,
          observer: true,
          // observeParents: true,
          // observeSlideChildren: true,
          zoom: true,
          watchOverflow: false,
          parallax: true,
          direction: 'horizontal',
          loop: true,
          effect: 'coverflow',
          grabCursor: true,
          slidesPerView: 3,
          slidesPerGroup: 3,
          initialSlide: 0,
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          },
          // allowSlidePrev: numberOfSlides === 3 ? false : true,
          // allowSlideNext: numberOfSlides === 1 ? false : true,
          pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
          navigation: {
            nextEl: ".next",
            prevEl: ".prev",
            disabledClass: 'disabled_swiper_button'
          },
          breakpoints: {
            1200: {
              slidesPerView: 3,
              // loopedSlides: 4,
              // spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              // loopedSlides: 3,
              // spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              // loopedSlides: 2,
              // spaceBetween: 10
            },
            675: {
              slidesPerView: 1,
              // loopedSlides: 1,
              // spaceBetween: 20
            }
          },
          on: {
            init: function () {
              checkArrow();
            },
            resize: function () {
              checkArrow();
            }
          }
        });
        // swiperInstance.loopCreate()
        function checkArrow() {
          var numberOfChild = numberOfWrapers.forEach((dat: any) => {
            let slideLength
            // if (dat.children.length  <= 3) {
            //   slideLength = dat.children.length
            //   carouselPrevButton.style.display = 'none';
            //   carouselNextButton.style.display = 'none';
            //   console.log(slideLength)
            // }else {
            //   slideLength = dat.children.length
            //   carouselPrevButton.style.display = 'block';
            //   carouselNextButton.style.display = 'block';
            // }
          //   // if (slideLength <= 4) {
          //   //   carouselPrevButton.style.display = 'none';
          //   //   carouselNextButton.style.display = 'none';
          //   // } else {
          //   //   carouselPrevButton.style.display = 'block';
          //   //   carouselNextButton.style.display = 'block';
          //   // }
          })
          // if ( window.innerWidth < 1700  ) {
          //   console.log('Success', window.innerWidth);
          //   carouselPrevButton.style.display = 'block';
          //   carouselNextButton.style.display = 'block';
          // } else {
          //   carouselPrevButton.style.display = 'none';
          //   carouselNextButton.style.display = 'none';
          // }
        }
        // swiper.loopCreate();
        // swiper.loopDestroy()
        // this._swiper = swiper;


        // var arrow = document.querySelectorAll('.prev')[0];
        // swiperInstance.on('slideChange', () => {
        //   var realIndex = swiper.realIndex;
        //   if (realIndex == 0) {
        //     console.log(realIndex + " - hide arrow");
        //     arrow.style.display = 'none';
        //   } else {
        //     console.log(realIndex + " - show arrow");
        //     arrow.style.display = 'block';
        //   }
        // });


      })
    }

  }

  async ngOnDestroy() {
  }

  async ngAfterViewInit() {

  }

  addItem(data: any) {
    var indexData = this.courses.findIndex((dat: any) => {
      console.log(dat.key)
      return dat.key == data
    })
    console.log(this.courses)

    this.courses.map((dat: any) => {
      if (dat.key == data) {
        this.datValuedata = dat.linked
        this.linkedValueLength = dat.linked.length
      }
    })

    if (indexData != 0) {
      this.courses.splice(indexData + 1, 0, ...this.datValuedata)

      // let editedCourse = []
      // editedCourse = this.courses.slice(0, indexData)
      // this.courses.push(...editedCourse)
      // this.courses.splice(0, indexData)
      // console.log(this.courses)
    } else {
      this.courses.splice(indexData + 1, 0, ...this.datValuedata)
    }
  }

  dataUnitTesting() {
    var data = 1
    const value = data + 1
  }

  collapseItem(data: any) {
    var indexData = this.courses.findIndex((dat: any) => {
      return dat.key == data
    })

    this.courses.splice(indexData + 1, this.linkedValueLength)
  }
}
