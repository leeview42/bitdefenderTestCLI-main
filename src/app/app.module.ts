import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateReportModalComponent } from './components/create-report-modal/create-report-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, CreateReportModalComponent],
  entryComponents: [CreateReportModalComponent],
  imports: [BrowserModule, NgbModule],
  providers: [NgbModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
