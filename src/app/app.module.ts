import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { Comp0Component } from './comp0/comp0.component';
import { Comp7Component } from './comp7/comp7.component';
import { Comp8Component } from './comp8/comp8.component';
import { Comp9Component } from './comp9/comp9.component';
import { TusuComponent } from './tusu/tusu.component';
import { TsuComponent } from './tsu/tsu.component';
import { TusComponent } from './tus/tus.component';
import { TsComponent } from './ts/ts.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiverComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Comp0Component,
    Comp7Component,
    Comp8Component,
    Comp9Component,
    TusuComponent,
    TsuComponent,
    TusComponent,
    TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
