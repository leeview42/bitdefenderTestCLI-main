import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateReportModalComponent } from '../create-report-modal/create-report-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
