import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlatformStore } from '@stk/srv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, JsonPipe],
  template: `
    <h1 routerLink="/">Welcome to {{ title }}!</h1>
    <nav>
      <p><a routerLink="remote/alfa">Remote alfa</a></p>
      <p>
        <a routerLink="remote/beta" [queryParams]="{ q: 'Curso de softtek' }"
          >Remote beta</a
        >
      </p>
    </nav>
    <router-outlet />
    <hr />
    <p>Platform data:</p>
    <pre>{{ data() | json }}</pre>
  `,
  styles: [],
})
export class AppComponent {
  title = 'lab-host';
  #platform = inject(PlatformStore);
  data = this.#platform.data;
}
