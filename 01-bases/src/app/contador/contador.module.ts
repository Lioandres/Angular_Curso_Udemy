import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.components';
 
@NgModule({
declarations: [
    ContadorComponent
    ],
exports:[
    ContadorComponent
]
 
})
export class ContadorModule{}
