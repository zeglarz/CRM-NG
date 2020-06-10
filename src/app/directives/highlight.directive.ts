import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() public appHighlight = 'red';

  constructor(public elementRef: ElementRef) {
  }

  public get element(): HTMLElement {
    return this.elementRef.nativeElement as HTMLElement;
  }

  @HostListener('mouseover', ['$event'])
  public onMouseOver(): void {
    this.element.style.backgroundColor = this.appHighlight;
  }


  @HostListener('mouseout', ['$event'])
  public onMouseOut(): void {
    this.element.style.backgroundColor = 'transparent';
  }
}
