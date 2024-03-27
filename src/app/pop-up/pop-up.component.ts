import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { PopUpService } from './pop-up.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<PopUpComponent>,
    private popUpService: PopUpService) {}

    openLink(event: MouseEvent): void {
      window.location.href = this.popUpService.getWhatsAppLink();
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }

}
