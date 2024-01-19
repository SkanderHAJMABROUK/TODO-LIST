import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTodo]'
})
export class TodoDirective {

  constructor(private element:ElementRef) { 

   }
  //  En résumé, cette directive Angular permet d'ajouter une ombre portée à un
  // élément du DOM lorsqu'un utilisateur survole cet élément avec la souris,
  // et cette ombre portée disparaît lorsque l'utilisateur quitte l'élément. 
  //La directive est appliquée en ajoutant l'attribut appTodo à un élément dans le template.

  @HostListener('mouseenter') onMouseEnter()
  {
    this.setShadow('5px 5px 10px 2px rgba(0,0,0,.5);')
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.setShadow('none;')
  }

  setShadow(shadow:string){
    this.element.nativeElement.setAttribute('style',`box-shadow:${shadow}`)
  }
}
