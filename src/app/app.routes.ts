import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { InformationsComponent } from './informations/informations.component';
import { DesarrolloPersonalComponent } from './desarrollo-personal/desarrollo-personal.component';
import { Informacion2Component } from './informacion2/informacion2.component';

export const routes: Routes = [
    {path: 'Header', component: HeaderComponent },
    {path: 'Hero', component:HeroComponent},
    {path: 'Informations', component: InformationsComponent},
    {path: 'DesarrolloPersonal',component:DesarrolloPersonalComponent},
    {path: 'Informacion2', component: Informacion2Component}

];
