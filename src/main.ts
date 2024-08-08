import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


let navbar = document.querySelector("nav");
window.addEventListener("scroll",function(){
  if(window.scrollY == 0){
    navbar?.classList.add("py-5");
    navbar?.classList.remove("py-2");
  }
  else{
    navbar?.classList.add("py-2");
    navbar?.classList.remove("py-5");
  }
})

