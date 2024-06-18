import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>home works!</p>
    <ng-container #remoteWidget></ng-container>
  `,
  styles: ``,
})
export class HomePage implements AfterViewInit {
  @ViewChild('remoteWidget', { read: ViewContainerRef, static: true })
  remoteWidget!: ViewContainerRef;

  async ngAfterViewInit() {
    const module = await loadRemoteModule('mfe1', './Component');
    const component = module.AppComponent;
    this.remoteWidget.createComponent(component);
  }
}
