import { Injectable } from '@angular/core';
import { Card } from '../models/Card.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebcameraService {

  private url = `https://vision.googleapis.com/v1/images:annotate?key=${environment.cloudVision}`;
  businessCard: Card;

  constructor(private http: HttpClient) { }

  getTextDetection(imageBase64) {
    const parsedImage = imageBase64.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    return this.http.post(this.url,
      {
        requests: [{
          image: {
            content: parsedImage
          },
          features: [{
            type: 'TEXT_DETECTION'
          }]
        }]
      });
  }
}
