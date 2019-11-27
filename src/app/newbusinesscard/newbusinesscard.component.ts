import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';

// For the Webcamera
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';


@Component({
  selector: 'app-newbusinesscard',
  templateUrl: './newbusinesscard.component.html',
  styleUrls: ['./newbusinesscard.component.css']
})
export class NewBusinesscardComponent implements OnInit {

  // toggle webcam on/off
  public showWebcam = true;
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  constructor(private service: BusinesscardsService) { }

  ngOnInit() {
    // Use if you had multiple web cameras
  }

  submit(
    firstname: HTMLInputElement, lastname: HTMLInputElement,
    company: HTMLInputElement, email: HTMLInputElement, phone: HTMLInputElement): void {

    const freshCard = new Card(firstname.value, lastname.value, company.value, email.value, phone.value);
    this.service.addCard(freshCard);
    // clear text fields
    firstname.value = '';
    lastname.value = '';
    company.value = '';
    email.value = '';
    phone.value = '';
  }

  /****** WEBCAMERA METHODS *******/
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public clearSnapshot(): void {
    this.webcamImage = null;
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  // public showNextWebcam(directionOrDeviceId: boolean | string): void

  public handleImage(webcamImage: WebcamImage): void {
    // tslint:disable-next-line:no-console
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  // public cameraWasSwitched(deviceId: string): void

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  // public get nextWebcamObservable(): Observable<boolean | string>

}
