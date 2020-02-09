import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

$(window).scroll(function() {
  var x = $(window).scrollTop();
  if (x > 100) {
    $(".navbar").css({
      backgroundColor: "rgba(0,0,0,0.88)",
      transition: "all 1s"
    });
  } else {
    $(".navbar").css("backgroundColor", "transparent");
  }
});
