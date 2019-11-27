import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../models/Card.model';
import { BusinesscardsService } from '../service/businesscards.service';
import { WebcameraService } from '../service/webcamera.service';

// For the Webcamera
import { Subject, Observable, Subscription } from 'rxjs';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-newbusinesscard',
  templateUrl: './newbusinesscard.component.html',
  styleUrls: ['./newbusinesscard.component.css']
})
export class NewBusinesscardComponent implements OnInit, OnDestroy {

  // toggle webcam on/off
  public showWebcam = true;
  public errors: WebcamInitError[] = [];
  // latest snapshot
  public webcamImage: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // computation state
  pageLoaded: boolean;
  subscription: Subscription;  // holds the processed data
  imageBase64 = new EventEmitter();
  textDetection = new EventEmitter();

  constructor(private service: BusinesscardsService, private webcamService: WebcameraService) { }

  ngOnInit() {
    // computation state
    this.pageLoaded = false;
    this.subscription = new Subscription();
  }

  ngOnDestroy() {
    // clean up
    this.subscription.unsubscribe();
    console.log('ngOnDestroy unsubed');
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

  convertToBase64() {
    let result;
    this.pageLoaded = true;
    const imageSnapshot = document.getElementById('image');
    // console.log(imgNode);
    domtoimage.toPng(imageSnapshot)
      .then((dataUrl: string) => {
        console.log('converting base64...');
        this.imageBase64.emit(dataUrl);
        result = this.webcamService.getTextDetection(dataUrl)
          .subscribe(res => {
            this.textDetection.emit(res);
            this.pageLoaded = false;
          },
            (err) => {
              console.log(err);
              this.pageLoaded = false;
            });

      }).catch((e: any) => {
        console.log('SELECTED IMAGE BASE64 SOMETHING WENT WRONG');
        // console.log(e);
        this.pageLoaded = false;
      });

    this.subscription.add(result);
  }

}
