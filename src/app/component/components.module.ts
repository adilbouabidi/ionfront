import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { IonicModule, IonRouterOutlet } from '@ionic/angular';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from './menu/menu.component';


@NgModule({
    declarations:[HeaderComponent, MenuComponent],
    imports:[
        CommonModule,
        IonicModule,
        RouterModule ,
        FormsModule               
    ],
    exports:[HeaderComponent, MenuComponent]
})

export class ComponentsModule {}