import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  async getLanguageData(data: any): Promise<any> {

    const thanglish = {
      content:"உங்கள் மன மற்றும் உடல் நலனை ஆதரிக்கும் ஆரோக்கியமான பழக்கவழக்கங்களை நீங்களே முதன்மைப்படுத்தி, உருவாக்குகிறீர்களா",
      content1:'நீங்கள் உணர்ச்சிவசப்படாமல் உணர்ந்தால்,',
      content3:'வேண்டும் அதாவது உங்கள் வாழ்க்கையைப் ',
      name : "isLanguageஅதிகமாக",
      content4:" உறவைப் பற்றிய உங்கள் தீர்க்கப்படாத உணர்வுகளை ஆராய்வது முக்கியம். உங்கள் முன்னாள்",
      segment1:"உங்கள் முன்னாள் காதல்",
      segment2:"அடுத்த உறவு",
      content5:" உங்கள் முன்னாள் காதல் நபருடன் நீங்கள் முரண்பட்ட அல்லது முரண்பட்ட குறிப்பிட்ட நிகழ்வுகளைப் பற்றி சிந்தியுங்கள்",
      content6:'உங்கள் தூண்டுதல்களைக் கண்டறிந்து, அவை கடந்த கால',
    }

    console.log("successs api")

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (thanglish) {
          resolve(thanglish);
        }else {
          reject("Failed Response");
        }
      }, 3000);

    })
  }
}
