/**
 * Created by hsuanlee on 2017/4/4.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreadPage } from './tread';

@NgModule({
    declarations: [
        TreadPage,
    ],
    imports: [
        IonicPageModule.forChild(TreadPage),
    ],
    exports: [
        TreadPage
    ]
})
export class TreadPageModule {}
