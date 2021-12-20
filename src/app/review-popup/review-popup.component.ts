import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.scss']
})
export class ReviewPopupComponent implements OnInit {
  @Output() reviewValue = new EventEmitter<any>();

  placeHolder = "Tell us more (Please) what you love and how can we improve"
  inputValue = ""
  emotionData: string = ""
  title = "How would you rate this fundamental course?"

  emojObject = [
    {emoj1 : "dissatisfied"},
    {emoj2: "okey"},
    {emoj3: "satisfied"},
    {emoj4: "veryhappy"},
  ]

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  cancelFunc() {
    this.modalService.closePopup();
  }

  saveFunc() {
    const reviewData = {
      emotion: "",
      description: ""
    }
    reviewData.emotion = this.emotionData
    reviewData.description = this.inputValue
    console.log(reviewData)

    this.modalService.closePopup(reviewData);
  }

  onClick(data: any) {
    this.emotionData = data
  }

}
