import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { InformationsComponent } from './informations/informations.component';
import { DesarrolloPersonalComponent } from './desarrollo-personal/desarrollo-personal.component';

export const routes: Routes = [
    {path: 'Header', component: HeaderComponent },
    {path: 'Hero', component:HeroComponent},
    {path: 'Informations', component: InformationsComponent},
    {path: 'DesarrolloPersonal',component:DesarrolloPersonalComponent}

];
