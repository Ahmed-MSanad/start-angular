import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  img_src:string = "";
  getImage(eventInfo:MouseEvent):void{
    let htmlElement = eventInfo.target as HTMLElement;
    let parentElement = htmlElement.closest(".group");
    const imgElement = parentElement?.querySelector('img');
    this.img_src = (imgElement && imgElement.src ? imgElement.src : "");
  }
  showImage():void{
    let image_overlay = document.querySelector(".overlay");
    image_overlay?.classList.remove("hidden");
    image_overlay?.classList.add("flex");
  }
  exit_overlay(eventInfo:MouseEvent):void{
    if(!(eventInfo.target instanceof HTMLImageElement)){
      let image_overlay = document.querySelector(".overlay");
      image_overlay?.classList.remove("flex");
      image_overlay?.classList.add("hidden");
    }
  }
}
