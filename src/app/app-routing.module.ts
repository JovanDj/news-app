import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "headlines",
    loadChildren: () =>
      import("./headlines/headlines.module").then((m) => m.HeadlinesModule)
  },

  // {
  //   path: 'everything',
  //   loadChildren: () => import('./everything/everything.module').then(m => m.EverythingModule)
  // },
  {
    path: "sources",
    loadChildren: () =>
      import("./sources/sources.module").then((m) => m.SourcesModule)
  },

  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: "reload",
    anchorScrolling: "enabled",
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
