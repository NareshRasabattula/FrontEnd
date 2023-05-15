import { ComponentRef, Injectable, Injector } from "@angular/core";
import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, PortalInjector } from "@angular/cdk/portal";
import { ThrobberComponent } from "../_modules/account-nature/throbber/throbber.component";

export class ThrobberOverlayRef{
    constructor(private overlayRef: OverlayRef){}

    close():void{
        this.overlayRef.dispose();
    }
    }
    @Injectable({providedIn: "root"})
    export class ThobberService {
     constructor(private injector: Injector, private overlay: Overlay){}

     open(): ThrobberOverlayRef{
        const overlayRef = this.createOverlay();
        const dislogRef = new ThrobberOverlayRef(overlayRef);
        this.attachedDialogContainer(overlayRef,dislogRef);
        return dislogRef;
     }
        
        private createOverlay(): any {
            const positionStrategy = this.overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically()

        const overlayConfig = new OverlayConfig({
            hasBackdrop:true,
            backdropClass:"thobber",
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        return this.overlay.create(overlayConfig);
        }

        private attachedDialogContainer(
            overlayRef: OverlayRef, 
            dislogRef: ThrobberOverlayRef
            ): ThrobberComponent {
          const injector = this.createInjector(dislogRef);
          const containerPortal = new ComponentPortal(
            ThrobberComponent,
            null,
            injector
          );
          const containerRef : ComponentRef<ThrobberComponent> = overlayRef.attach(
            containerPortal
          );
          return containerRef.instance;

        }

        private createInjector(dislogRef: ThrobberOverlayRef): PortalInjector{
            const injectionTokens = new WeakMap();
            injectionTokens.set(ThrobberOverlayRef, dislogRef);
            return new PortalInjector(this.injector, injectionTokens);
        }
    }
