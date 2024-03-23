import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogintemplateComponent } from './logintemplate/logintemplate.component';
import { LoginreactiveComponent } from './loginreactive/loginreactive.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RegisterService } from './services/register.service';
import { AppConfigProvider } from './services/product.service';
import { HighlightDirective } from './directives/highlight.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { InnerComponent } from './inner/inner.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './ngrxcomponent/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { CounterButtonsComponent } from './ngrxcomponent/counter-buttons/counter-buttons.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostsListComponent } from './ngrxcomponent/posts/posts-list/posts-list.component';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    LogintemplateComponent,
    LoginreactiveComponent,
    HighlightDirective,
    ChildComponent,
    InnerComponent,
    CounterComponent,
    CounterButtonsComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: true
    })
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CommonInterceptor,
    //   multi: true
    // },
    
    {
        provide: RegisterService,
        useValue: {"key": 222222, "key2":() => {
          return ()=>{
            return "hello";
          };
        }}
    }
    // { provide: ProductService, useExisting: NewProductService },
    // { provide: NewProductService, useClass: NewProductService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
