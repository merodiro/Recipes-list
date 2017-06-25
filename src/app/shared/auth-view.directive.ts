import { AuthService } from '../auth/auth.service';

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAuthView]'
})
export class AuthViewDirective {

  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef,
              private authService: AuthService) { }

  @Input() set appAuthView(auth) {
    this.authService.user
      .subscribe(authenticated => {
        const condition = auth ? authenticated : !authenticated
        if (condition) {
          this.vcRef.createEmbeddedView(this.templateRef);
        } else {
          this.vcRef.clear();
        }
      })
  }

}
