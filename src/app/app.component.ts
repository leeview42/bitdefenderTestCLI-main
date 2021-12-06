import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateReportModalComponent } from './components/create-report-modal/create-report-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(protected modalService: NgbModal) {}

  onClick(): void {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  onOpen() {
    this.modalService.open(CreateReportModalComponent, {
      windowClass: 'custom-class',
      centered: true,
    });
  }
}
