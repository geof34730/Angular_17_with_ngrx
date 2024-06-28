import {Directive, ElementRef, HostListener, Input} from '@angular/core';



@Directive({
  selector: '[appBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private defaultBorderColor: string = "green";
  private defaultOverBorderColor: string = "red";

  private defaultHeight: number = 440;


  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorderColor(this.defaultBorderColor);
  }


  @Input('borderCard') borderColor: string;

  @HostListener('mouseover') onMouseOver() {
    this.setBorderColor(this.borderColor || this.defaultOverBorderColor);
  }

  @HostListener("mouseleave") onMouseLeave(){
      this.setBorderColor(this.defaultBorderColor );
  }

  setHeight(height : number){
      this.el.nativeElement.style.height = `${height}px`
  }

  setBorderColor(color : string){
    this.el.nativeElement.style.border = `solid 2px ${color}`;
  }

}
