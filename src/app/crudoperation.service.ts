import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDoperationService {

  constructor(private http: HttpClient) { }



  async createOutlookEvent(): Promise<any> {
    console.log("data")

    const token = "EwBwA8l6BAAUwihrrCrmQ4wuIJX5mbj7rQla6TUAAV0lmWfjrBOh4Bc41sDZ0SR+2cmZC/R+qmzXnAR0ppyf1+8Prbi2rBqOkTXttXkf18CtiVBTwkfU3hnCBVwx+TVrerRfhVAQCmUazd0em/HTHOq8oTDge3PV4PAzyBJ11bvuZNUprRD7EzbHPOB1R51VHMUHxU4Lo4t7oHnNhadQCo9VMKrGmt4FwBu9AJVmIbcASMmA4pjrT9ioR1tWot2A4YGSTeC8AcGiK1rb3L5bSExDecVX7dkXBOOankW2SBLNSFoHOkTmLbDOgaTbnh1gFDX9GX43LLT4R/a6N1BUbH5YxdhP14PjVcpkqeWdNwXLGZhcpqYCSqj2om+MRjYDZgAACCJpzi3VUNHBQAJPMPuMSWOHS8Et8e3QsNMXti04JiMk7PrnAPK7ndc3idc5AQn2M+j9CovroS5wre3ysgxpUcgo8iHiD/pN8iTkAH6iT/+/t5BA/Nk1HEO12bXKZTPVvMnk46vFd7QqUOb0E0bMPZUTTSVJufTOU0lOKx1cnNNftEQMZyIxXAYm+A/WZm3kXKgMYiMzl9BeJx3gLNSlcjuMcI9gc3ajlclIP3XKOIAwMSZRch67u+zAofrf6NB2K2+RzdVVVdZKZ+PV9zwKtdwBiB8QJ1/E/kBDlXlV52Ng16ipWe8ZeM8AGbed/B6c+4oU45eslQka8RhclMHLKYt6ad1heh5/mGBqJX1ENPC+luijxjPOgXmXChhxfDFuvkKkGWyxweNzYP3Vg3Bn6LckZCtTWj7IvkZ9mG5dpArrxuVzQkdMDKlcU++opK0lZVAx/XsL1mJ5/fsBddPKw0nIF2pGR85ehUZvauaWw1hgPFdEClovjaaemEJLUN0gGqp6lEzOzyCeOEEeTmoADjx70yMwZm+PtLxNsEzjD6RRjkBAz96j3At/RQejsHozOtGiAZTUvW+RN+fhfh+Nnq9kG6q0nCD5yZNliSe5qEx5hKGeKXm6W1GPhN1UFPMbyADSv17LsCHwC3LhLOkEOwP0v4oOROoD1JN9Wwi6YR3uEHThg/ynrv/enjVo8XLWKd3mHs9aGOm9Bpt+xa97+h6fhS888c5oB/I2KE3PVoMlURFkw1M+h9dZK95hhXM7/vb+ZlsAKaijZUyCAg=="
    const body = {
      "subject": "Let's go for lunch",
      "body": {
        "contentType": "HTML",
        "content": "Does noon work for you?"
      },
      "start": {
        "dateTime": "2021-12-18T12:00:00",
        "timeZone": "Pacific Standard Time"
      },
      "end": {
        "dateTime": "2021-12-18T14:00:00",
        "timeZone": "Pacific Standard Time"
      },
      "location": {
        "displayName": "Harry's Bar"
      },
      "attendees": [
        {
          "emailAddress": {
            "address": "samanthab@contoso.onmicrosoft.com",
            "name": "Samantha Booth"
          },
          "type": "required"
        }
      ],
      "allowNewTimeProposals": true,
    }
    let url = 'https://graph.microsoft.com/v1.0/me/events'
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new Headers(headerDict),
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    console.log("starting")
    let options = { headers: headers };
    /**...................POST METHOD............... */
    return new Promise((resolve, reject) => {
      this.http.post(url, body, options).subscribe((response: any) => {
        console.log(response)
        if (response) {
          resolve(response);
        }
      }, (error) => {
        reject(error);
      })
    })
  }

  

  async storeDataToSS(data: any): Promise<any> {
    // let url = `https://sheetdb.io/api/v1/k51nunaa3p829`
    let url = 'https://sheetdb.io/api/v1/5moxtsuaefwg3'
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    console.log(data)
    const daata = { data }
    /**...................POST METHOD............... */
    return new Promise((resolve, reject) => {
      this.http.post(url, daata).subscribe((response: any) => {
        console.log(response)
        if (response) {
          resolve(response);
        }
      }, (error) => {
        reject(error);
      })
    })
  }



}

