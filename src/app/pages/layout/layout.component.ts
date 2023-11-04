import { Component, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [NgbCarouselConfig]
})
export class LayoutComponent {

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;

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
