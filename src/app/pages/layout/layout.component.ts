import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { UtilsService } from '../services/utils.service';
import { environment } from'../../../environments/environment'


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [NgbCarouselConfig]
})
export class LayoutComponent implements OnInit {

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  bannerImage:any = [];
  categories:any = [];
  topRecipies:any = [];

  constructor(
      config: NgbCarouselConfig,
      private utilsService: UtilsService
    ) {
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}

  ngOnInit(): void {
    this.getBanners();
    this.getCategories();
    this.getCTopRecipies();
  }

  getBanners(){
    this.utilsService.getCarrusel().subscribe((data: any) => {
      if(data.code == 200){
        data.banners.forEach((element: any[]) => {
          element[1] = `${environment.s3_bucketURL}${element[1]}`
          this.bannerImage.push(element);
        });
      } else {
        console.log(data);
      }
    });
  }

  getCategories(){
    this.utilsService.getCategories().subscribe((data: any) => {
      if(data.code == 200){
        data.categorias.forEach((element: any[]) => {
          element[2] = `${environment.s3_bucketURL}${element[2]}`
          this.categories.push(element);
        });
      } else {
        console.log(data);
      }
    });
  }

  getCTopRecipies(){
    this.utilsService.getCTopRecipies().subscribe((data: any) => {
      if(data.code == 200){
        data.toprecetas.forEach((element: any[]) => {
          element[3] = `${environment.s3_bucketURL}${element[3]}`
          this.topRecipies.push(element);
          console.log(this.topRecipies);
        });
      } else {
        console.log(data);
      }
    });
  }


  onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

  togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}
}
