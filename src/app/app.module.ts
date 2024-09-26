import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
    declarations : 
    [
        AppComponent
    ],
    imports :[
        BrowserModule,
        ToastrModule.forRoot()
    ]
})

export class AppModule {}