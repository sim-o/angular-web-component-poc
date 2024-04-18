import { createApplication } from "@angular/platform-browser"
import { createCustomElement } from '@angular/elements'
import { MyButtonComponent } from "../my-button/my-button.component"

(async () => {
  const app = await createApplication({
    providers: []
  })

  const element = createCustomElement(MyButtonComponent, {
    injector: app.injector
  })

  customElements.define('my-button', element)
})()
