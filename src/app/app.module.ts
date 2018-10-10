import { ServerComponent } from './Server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersNewComponent } from './servers-new/servers-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
