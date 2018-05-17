import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('appHighlight')
    highlightColor: string;

    // 把第二个属性绑定到指令中
    @Input()
    defaultColor: string;

    constructor(private ref: ElementRef) { }

    // 响应用户事件
    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.ref.nativeElement.style.backgroundColor = color;
    }
}
