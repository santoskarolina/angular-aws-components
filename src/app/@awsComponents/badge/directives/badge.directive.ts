import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef  } from '@angular/core';

@Directive({
  selector: "[awsBadge]"
})
export class AwsBadgeLabel implements OnInit, OnDestroy {

  @Input() public awsBadgeLabel: string = '';
  @Input() public awsBadgePosition: string = '';
  @Input() public awsBadgeColor: string = "#eee"
  @Input() public awsBadgeSize: string = 'medium';

  badgeElement: HTMLElement;

  constructor(private renderer: Renderer2, private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.createBadge()
  }

  createBadge(): void {
    this.badgeElement = this.renderer.createElement('div');
    this.badgeElement.textContent = this.awsBadgeLabel

    this.addStyleToBadgeElement()

    this.renderer.appendChild(this.elementRef.nativeElement, this.badgeElement);
  }

  addStyleToBadgeElement(){
    this.renderer.setStyle(this.badgeElement, 'background-color', this.awsBadgeColor);
    this.renderer.addClass(this.badgeElement, 'bagde__container');
    this.renderer.addClass(this.elementRef.nativeElement, 'badge-parent');
    this.renderer.addClass(this.badgeElement, "badge");
    this.renderer.addClass(this.badgeElement, this.awsBadgePosition);
    this.renderer.addClass(this.badgeElement, this.awsBadgeSize);
  }

  ngOnDestroy() {
    if (this.badgeElement) this.renderer.destroyNode!(this.badgeElement);
  }
}
