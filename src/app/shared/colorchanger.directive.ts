import {Directive, Renderer, ElementRef, HostListener, HostBinding} from '@angular/core'

@Directive({
    selector: '[cc]'
})

export class ColorChanger{
    // constructor(ef:ElementRef, ren:Renderer){
        
        // ren.setElementStyle(ef.nativeElement, 'backgroundColor', 'pink')
        // ren.setElementStyle(ef.nativeElement,'background-image','linear-gradient(magenta,blue,cyan,green,yellow,red)')
    // }

    private defaultColor='white'
    @HostListener('mouseenter')
    addColor(){
        this.defaultColor='pink'
    }

    @HostListener('mouseleave')
    removeColor(){
        this.defaultColor='white'
    }

    @HostBinding('style.backgroundColor')
    get applyStyle(){
        return this.defaultColor;
    }


}
