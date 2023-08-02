import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import Glide from "@glidejs/glide";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements AfterViewInit, OnDestroy {

  ngAfterViewInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("sections-page");

    // Pastikan elemen .testimonial-glide ada sebelum mencoba menggunakan Glide.js
    var testimonialGlide = document.querySelector('.testimonial-glide');
    if (testimonialGlide) {
      new Glide(testimonialGlide, {
        type: 'carousel',
        startAt: 0,
        focusAt: 2,
        perTouch: 1,
        perView: 4
      }).mount();
    }
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("sections-page");
  }
}