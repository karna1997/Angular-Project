import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { StringinterpollationComponent } from './stringinterpollation/stringinterpollation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { FormsModule } from '@angular/forms';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CustomPipe } from './summery.pipe';
import { CustomServiceComponent } from './custom-service/custom-service.component';
import { CustomService } from './course.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpServiceComponent } from './http-service/http-service.component';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { QueryparamComponent } from './queryparam/queryparam.component';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StringinterpollationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventBindingComponent,
    Eventbinding2Component,
    IfDirectiveComponent,
    ForDirectiveComponent,
    SwitchdirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    AssignmentComponent,
    InbuildPipeComponent,
    CustomPipeComponent,
    CustomPipe,
    CustomServiceComponent,
    HttpServiceComponent,
    FollowerComponent,
    HomeComponent,
    MyfollowerComponent,
    NotfoundComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    QueryparamComponent,
    BootstrapDemoComponent,
    TdfDemoComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
