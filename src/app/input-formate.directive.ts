import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[InputFormate]'
})
export class InputFormateDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('formate') formate ;
  @HostListener('focus') onFocus(){
    console.log('focus');
  }

 @HostListener('blur') onBlur(){
    const valueget: string = this.ref.nativeElement.value ;
    if ( this.formate === 'touppercase')
    {
      this.ref.nativeElement.value = valueget.toUpperCase();
    }else if (this.formate === 'tolowercase') {
      this.ref.nativeElement.value = valueget.toLowerCase();
    }else{
      this.ref.nativeElement.value = valueget.toUpperCase();
    }
  }

  constructor(private ref: ElementRef) { }

}
