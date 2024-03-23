import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit{

  @Input() appHighlight: string = 'yellow';
  @HostListener('mouseenter') onMouseEnter() {
    this.blue();
  }

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.elRef.nativeElement.addEventListener('keypress',e=>{
    this.elRef.nativeElement.style.backgroundColor = this.appHighlight;
    })
  }

  blue() {
    this.elRef.nativeElement.style.backgroundColor = this.appHighlight;
    
  }

}
