
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MainComponent } from './componentes/paginas/main/main.component';
import { AboutComponent } from './componentes/paginas/about/about.component';
import { BlogComponent } from './componentes/paginas/blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { MasonComponent } from './componentes/paginas/mason/mason.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    BlogComponent,
    MasonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
