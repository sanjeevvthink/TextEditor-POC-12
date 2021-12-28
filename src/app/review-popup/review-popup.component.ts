import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss']
})
export class ReviewPopupComponent {
  @Output() reviewValue = new EventEmitter<any>();

  placeHolder = "Tell us more (Please) what you love and how can we improve";
  inputValue = "";
  emotionData: string = "";
  title = "How would you rate this fundamental course?";
  clickedData: any;
  image1: boolean = false;
  image2: boolean = false;
  image3: boolean = false;
  image4: boolean = false;

  constructor(private modalService: ModalService) { }

  cancelFunc() {
    this.modalService.closePopup();
  }

  saveFunc() {
    const reviewData = {
      emotion: this.emotionData,
      description: this.inputValue
    }
    this.modalService.closePopup(reviewData);
  }

  onClick(data: any) {
      this.image1 =  (data === "dissatisfied");
      this.image2 =  (data === "okey");
      this.image3 =  (data === "satisfied");
      this.image4 =  (data === "veryhappy");
  }
}

