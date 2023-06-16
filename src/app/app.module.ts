import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { MockDataComponent } from './components/mock-data/mock-data.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { DataParcelaComponent } from './components/data-parcela/data-parcela.component';
import { PopupComponent } from './components/popup/popup.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MockDataComponent,
    DataDisplayComponent,
    DataParcelaComponent,
    PopupComponent,
    ConfirmationPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
