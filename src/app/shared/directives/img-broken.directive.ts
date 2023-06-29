import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement;
    console.log('😢 -->esta imagen revento-->', this.elHost);
    elNative.src = this.customImg;
    // elNative.src = '../../../assets/images/BlueNight-broken.png';
  }
//host host host
  constructor(private elHost: ElementRef) {
    console.log('😎 -->esta imagen esta bien-->', this.elHost);
   }

}
