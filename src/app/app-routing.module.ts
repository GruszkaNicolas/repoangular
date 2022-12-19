import { MasonComponent } from './componentes/paginas/mason/mason.component';
import { BlogComponent } from './componentes/paginas/blog/blog.component';
import { MainComponent } from './componentes/paginas/main/main.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./componentes/paginas/about/about.component";

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'main', component: MainComponent},
    { path: 'blog', component: BlogComponent },
    { path: 'mason', component: MasonComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'main'}


]

@NgModule({
imports: [RouterModule.forRoot(routes, { useHash: true , scrollPositionRestoration: 'enabled'})],
exports: [RouterModule]
})

export class AppRoutingModule {

}