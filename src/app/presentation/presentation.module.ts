import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PresentationComponent } from "./presentation.component";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { LayananComponent } from "../components/layanan/layanan.component";
import { PricingComponent } from "../components/pricing/pricing.component";
import { TestimonialComponent } from "../components/testimonial/testimonial.component";
@NgModule({
  declarations: [PresentationComponent, LayananComponent, PricingComponent, TestimonialComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  exports: [PresentationComponent]
})
export class PresentationModule {}
