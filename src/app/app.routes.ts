import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DocumentComponent } from "./pages/document/document.component";
import { ChartsComponent } from "./pages/charts/charts.component";

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'document', component: DocumentComponent},
    {path: 'charts', component: ChartsComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
