import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { PicService } from '~/services/pic.service';

import { ListRoutes } from './list.routes';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule.forChild(ListRoutes)
    ],
    declarations: [
        ListComponent
    ],
    providers: [
        PicService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListModule { }
