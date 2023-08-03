import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PresentationComponent } from "./presentation/presentation.component";
import { SectionsComponent } from "./sections/sections.component";
import { TentangkamiComponent } from "./tentangkami/tentangkami.component";

const routes: Routes = [
  { path: "", redirectTo: "presentation", pathMatch: "full" },
  { path: "presentation", component: PresentationComponent },
  { path: "tentangkami", component: TentangkamiComponent },
  { path: "sections", component: SectionsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
