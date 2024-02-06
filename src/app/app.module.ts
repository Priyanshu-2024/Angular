import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from "/home/priyanshu/Desktop/Angular/Angular-YT/src/app/user-auth/user-auth.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummycompComponent } from './dummycomp/dummycomp.component';
import { InlinestyleComponent } from './inlinestyle/inlinestyle.component';
import { InlinetemplateComponent } from './inlinetemplate/inlinetemplate.component';
import { BothComponent } from './both/both.component';
import { FormsModule} from "@angular/forms";
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { User2Component } from './user2/user2.component';
import { UsdInrPipe } from './Pipes/usd-inr.pipe';
import { ReactiveFormsModule } from "@angular/forms";
import { Rede1Directive } from './rede1.directive';

@NgModule({
  declarations: [
    AppComponent,
    DummycompComponent,
    InlinestyleComponent,
    InlinetemplateComponent,
    BothComponent,
    ChildComponent,
    UserDetailsComponent,
    User2Component,
    UsdInrPipe,
    Rede1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
