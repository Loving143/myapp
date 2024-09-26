import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component';
import {ToastrModule} from 'ngx-toastr';
import {ReactiveFormsModule} from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations : 
    [
        AppComponent
    ],
    imports :[
        BrowserModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule
    ]
})

export class AppModule {}