import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { InformationsComponent } from './informations/informations.component';
import { DesarrolloPersonalComponent } from "./desarrollo-personal/desarrollo-personal.component";
import { Informacion2Component } from './informacion2/informacion2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, InformationsComponent,DesarrolloPersonalComponent,Informacion2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LuminaGrowth';
}
