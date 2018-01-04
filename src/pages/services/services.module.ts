/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesPage } from './services';

@NgModule({
    declarations: [
        ServicesPage,
    ],
    imports: [
        IonicPageModule.forChild(ServicesPage),
    ],
    exports: [
        ServicesPage
    ]
})
export class ServicesPageModule {}
