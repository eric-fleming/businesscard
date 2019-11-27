import { Injectable } from '@angular/core';
import { Card } from '../models/Card.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebcameraService {

  private url = `https://vision.googleapis.com/v1/images:annotate?key=${environment.cloudVision}`;
  photoBusinessCard: Card;

  constructor(private http: HttpClient) { }

  // requestTextDetection
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

  // getDataFields
  extractCardFields(cloudVisionResponse): Card {
    // compose
    const response = cloudVisionResponse.responses[0].textAnnotations;
    const size = response.length;

    // Regex tests
    const numbers = /\d/;
    const letters = /^[a-zA-Z]$/;
    const phone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    // Simple assumptions
    for (let i = 1; i < size; i++) {
      const word = response[i].description;
      if (word.includes('@')) {
        this.photoBusinessCard.email = word;
      } else if (phone.test(word)) {
        this.photoBusinessCard.phone = word;
      } else if (i === 1) {
        this.photoBusinessCard.firstname = word;
      } else if (i === 2) {
        this.photoBusinessCard.lastname = word;
      }
    }

    return this.photoBusinessCard;

  }
}
