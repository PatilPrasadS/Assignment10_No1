import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompfailure]',
  standalone: true
})
export class CompfailureDirective {

  constructor(private obj : ElementRef) { 

  }

  @HostListener('mouseenter') onmouseenter () 
  {
    this.obj.nativeElement.style.color = "red";
  }

  @HostListener('mouseleave') onmouseleave () 
  {
    this.obj.nativeElement.style.color = "black";
  }

}
