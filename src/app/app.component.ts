import { Component, Input, OnChanges, OnInit, VERSION, NgZone } from '@angular/core';
import { appInitialize } from '@ionic/angular/app-initialize';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill'
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
// import * as QuillNamespace from 'quill';
// let Quill: any = QuillNamespace;
import Quill from 'quill';
import { CRUDoperationService } from './crudoperation.service';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { ClientSecretCredential } from '@azure/identity'
// import {Client}from '@microsoft/microsoft-graph-client'
// const { Client } = require("@microsoft/microsoft-graph-client");
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider, TokenCredentialAuthenticationProviderOptions } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import { course } from './card/models/course';
// import SwiperCore from 'swiper';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination, Navigation, Swiper } from "swiper";
import swiper from 'swiper';
import { ModalService } from './modal.service';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { ReviewPopupComponent } from './review-popup/review-popup.component';
import { ViewModalPopupComponent } from './mandatory-training/view-modal-popup.component';
SwiperCore.use([Pagination, Navigation]);
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);


// const swiper = this.Swiper;
// swiper.loopDestroy();
// swiper.loopCreate();

// Create an instance of the TokenCredential class that is imported
const tokenCredential = new ClientSecretCredential("your_tenantId", "your_clientId", "your_clientSecret");

// Set your scopes and options for TokenCredential.getToken (Check the ` interface GetTokenOptions` in (TokenCredential Implementation)[https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/core/core-auth/src/tokenCredential.ts])

// const options: TokenCredentialAuthenticationProviderOptions = { scopes: [scopes], getTokenOptions };

// Create an instance of the TokenCredentialAuthenticationProvider by passing the tokenCredential instance and options to the constructor
// const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, options);
// const client = Client.initWithMiddleware({
// 	debugLogging: true,
// 	authProvider: authProvider,
// });
// const res = await client.api("/users/").get();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit, OnChanges {
  slide1 = "slide1"
  slide2 = "slide2"
  course1 = [
    {
      progress: "InProgress",
      collapse: false,
      expand: true,
      key: 2,
      imageSrc: 'https://source.unsplash.com/800x600/?car',
      title: "Information Security: An gghdgvhcbjc2",
      description: "This course introduces the <mark> fundamentals </mark> of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021",
      linked: [
        {
          imageSrc: 'https://source.unsplash.com/800x600/?moto',
          title: "expand Course 2.1",
          description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
          time: "~45 Mins",
          due: "Past due 23 Sep 2021"
        },
        {
          imageSrc: 'https://source.unsplash.com/800x600/?fantasy',
          title: "expand Course 2.2",
          description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
          time: "~45 Mins",
          due: "Past due 23 Sep 2021"
        },
      ]
    },
    {
      progress: "InProgress",
      key: 5,
      imageSrc: 'https://source.unsplash.com/800x600/?car5',
      title: "Information ewdxdcxcx: An dddddd5",
      description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021",
    },
    {
      progress: "InProgress",
      key: 6,
      imageSrc: 'https://source.unsplash.com/800x600/?moto6',
      title: "Information ewdxdcxcx: An dddddd6",
      description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021"
    },

  ]
  datValuedata: any
  linkedValue: any = []
  name = 'Angular ' + VERSION.major;
  key: any
  course =
    [
      {
        images: [
          { path: 'https://source.unsplash.com/800x600/?nature' },
          { path: 'https://source.unsplash.com/800x600/?car' },
          // { path: 'https://source.unsplash.com/800x600/?moto' },
          { path: 'https://source.unsplash.com/800x600/?fantasy' },
          { path: 'https://source.unsplash.com/800x600/?car' },
          // {path: 'https://source.unsplash.com/800x600/?moto'},
          // {path: 'https://source.unsplash.com/800x600/?fantasy'},
        ],
        courseName: [
          { courseData: "Information Security: An path" },
          { courseData: "Information reste: An Overview" },
          { courseData: "Information dynamic: An cogdtgd" },
          { courseData: "Information ramngerrd: An Overview" },
          { courseData: "Information varttsy: An Overview" }
        ],
        courseDescription: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
        time: "~45 Mins",
        due: "Past due 23 Sep 2021"
      }
    ]

  //  course1 = new course('https://source.unsplash.com/800x600/?nature',"Information Security: An path", "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.", "~45 Mins",  "Past due 23 Sep 2021")
  //  course2 = new course('https://source.unsplash.com/800x600/?nature',"Information Security: An path", "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.", "~45 Mins",  "Past due 23 Sep 2021")
  //  course3 = new course('https://source.unsplash.com/800x600/?nature',"Information Security: An path", "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.", "~45 Mins",  "Past due 23 Sep 2021")
  //  course4 = new course('https://source.unsplash.com/800x600/?nature',"Information Security: An path", "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.", "~45 Mins",  "Past due 23 Sep 2021")
  //  course5 = new course('https://source.unsplash.com/800x600/?nature',"Information Security: An path", "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.", "~45 Mins",  "Past due 23 Sep 2021")

  maincourse = []
  courses = [
    {
      key: 1,
      imageSrc: 'https://source.unsplash.com/800x600/?nature',
      title: "Information Security: An path1",
      description: "This course introduces the  <mark> Muthu </mark>  of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021",
      progress: "InProgress"
    },
    {
      progress: "InProgress",
      collapse: false,
      expand: true,
      key: 2,
      imageSrc: 'https://source.unsplash.com/800x600/?car',
      title: "Information Security: An gghdgvhcbjc2",
      description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021",
      linked: [
        {
          imageSrc: 'https://source.unsplash.com/800x600/?moto',
          title: "expand Course 2.1",
          description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
          time: "~45 Mins",
          due: "Past due 23 Sep 2021"
        },
        {
          imageSrc: 'https://source.unsplash.com/800x600/?fantasy',
          title: "expand Course 2.2",
          description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
          time: "~45 Mins",
          due: "Past due 23 Sep 2021"
        },
      ]
    },
    {
      key: 3,
      imageSrc: 'https://source.unsplash.com/800x600/?moto',
      title: "Information gdtss: An yrrevd3",
      description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021"
    },
    {
      progress: "InProgress",
      collapse: false,
      expand: true,
      key: 4,
      imageSrc: 'https://source.unsplash.com/800x600/?fantasy',
      title: "Information ddddd: An paccdsth4",
      description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021",
      linked: [
        {
          imageSrc: 'https://source.unsplash.com/800x600/?moto',
          title: "expand Course 4.1",
          description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
          time: "~45 Mins",
          due: "Past due 23 Sep 2021"
        }
      ]
    },
    {
      key: 5,
      imageSrc: 'https://source.unsplash.com/800x600/?car5',
      title: "Information ewdxdcxcx: An dddddd5",
      description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021",
    },
    {
      key: 6,
      imageSrc: 'https://source.unsplash.com/800x600/?moto6',
      title: "Information ewdxdcxcx: An dddddd6",
      description: "This course introduces the fundamentals of information security, best practices for keeping information safe, and what to do in the event of a breach.",
      time: "~45 Mins",
      due: "Past due 23 Sep 2021"
    },

  ]


  currentSlide = 1;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: true,
    // slidesPerView: this.windowService.screenWidth/100, //dynamic value not working
    zoom: false,
    grabCursor: true,
    spaceBetween: 10,
    //freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  };


  editorModel = ""
  content = 'dhsdsjchdhjs'
  editorContent = "text"
  HeaderTitle = "Thus We Want To Edit Text As Per The Instructions"
  headerTamil = "தமிழில் சிறு சிறு வாக்கியங்களை பேச பயிற்சி எடுத்து வரும் பிரதமர் நரேந்திர மோடி.. எதுக்கு தெரியுமா?"
  headerArabic = "بي بي سي العربية هي شبكة لنقل الأخبار والمعلومات ومقاطع الفيديو إلى العالم عبر عدة وسائط، تشمل الإنترنت ومواقع التواصل الاجتماعي والراديو والتلفزيون ..."
  changedValue = ""
  popup = false
  popup1 = false
  quillConfiguration: any
  config: any
  editorStyle = {
    height: '200px'
  };
  htmlContent: any
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '1-12',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
      // {class: 'SF Pro Display', name: SF Pro Display}
    ],
    // fontSize: [],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      // ['fontSize']
    ]
  };
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline',],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      // [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'size': ['10px', '20px', '80px'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': ['Arial', 'Arial Black', 'Calibri', 'Futura'] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      // ['link', 'image', 'video']                         // link and image, video
    ]
  };
  //  quill = new Quill('#editor', {
  //   modules: {
  //     toolbar: true    
  //   },
  //   theme: 'snow'
  // });
  // var ColorClass = Quill.import('attributors/class/color');
  //  SizeStyle = Quill.import('attributors/style/size');
  // Quill.register(ColorClass, true);
  // fontSize = Quill.register(this.SizeStyle, true);
  // configs = {
  //   theme: 'snow',
  //   modules: {
  //       'toolbar': { container: '#toolbar' },
  //     'image-tooltip': true
  //   }
  // };
  //  quill = new Quill('#editor', this.configs);


  Font = Quill.import('formats/font');
  private _swiper: SwiperCore | undefined;


  constructor(private data: CRUDoperationService, private modalService: ModalService) {


    //   var swiper = new Swiper('.container-fluid', {
    //     slidesPerView: 3,
    //     spaceBetween: 0,
    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false,
    //     },
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //         },
    //         767: {
    //             slidesPerView: 1,
    //         },
    //     },
    //     pagination: {
    //         el: '.campaign-pagination',
    //         clickable: true,
    //     },
    //     loop: true,
    // });






    var BackgroundClass = Quill.import('attributors/class/background');
    var ColorClass = Quill.import('attributors/class/color');
    var SizeStyle = Quill.import('attributors/style/size');
    Quill.register(BackgroundClass, true);
    Quill.register(ColorClass, true);
    Quill.register(SizeStyle, true);

  }

  // onPreviousClick() {
  //   const previous = this.currentSlide - 3;
  //   this.currentSlide = previous < 0 ? this.images.length - 1 : previous;
  //   console.log("previous clicked, new current slide is: ", this.currentSlide);
  // }

  // onNextClick() {
  //   const next = this.currentSlide + 1;
  //   this.currentSlide = next === this.images.length ? 0 : next;
  //   console.log("next clicked, new current slide is: ", this.currentSlide);
  // }

  appInitialize() {

  }
  async ngOnInit() {

    let height = screen.height;
    console.log(height);
    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height1 = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
      var height2 = document.body;
      console.log(height2);
      console.log(height1);


    // const swiper = await new Swiper('.swiper-container ', {
    //   observer: true,
    //   observeParents: true,
    //   observeSlideChildren: true,
    //   parallax: true,
    //   direction: 'horizontal',
    //   loop: true,
    //   effect: 'coverflow',
    //   grabCursor: true,
    //   slidesPerView: 4,
    //   initialSlide: 0,
    //   coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   navigation: {
    //     prevEl: ".prev",
    //     nextEl: ".next"
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },

    // });
    // swiper.loopCreate();
    // swiper.loopDestroy()
    // this._swiper = swiper;

    // this.maincourse.push({this.course1})
    // set1

    // var Font = await Quill.import('formats/font');
    // // We do not add Aref Ruqaa since it is the default
    // Font.whitelist = ['mirza', 'roboto'];
    // Quill.register(Font, true);


    // var quill = new Quill('#editor-container', {
    //   modules: {
    //     toolbar: '#toolbar-container'
    //   },
    //   theme: 'snow'
    // });



    // set2

    let Font = await Quill.import('formats/font');
    // We do not add Sans Serif since it is the default
    // Font.whitelist = ['inconsolata', 'roboto', 'mirza', 'arial', 'pacifico'];
    Font.whitelist = ['mirza', 'roboto', 'anton'];
    Quill.register(Font, true);
    // We can now initialize Quill with something like this:
    let quillObj = new Quill('#quilljs-container', {
      modules: {
        toolbar: '#toolbar-container'
      },
      placeholder: 'This is a font test...',
      theme: 'snow'
    });



    // set3
    // const font = await Quill.import('attributors/class/font')
    // // We do not add Aref Ruqaa since it is the default
    // font.whitelist = ['Arial', 'Arial Black', 'Calibri', 'Futura']
    // console.log(font)
    // Quill.register(font, true)


    // var quill = new Quill('#editor-container', {
    //   modules: {
    //     toolbar: this.modules
    //   },
    //   placeholder: 'Compose an epic...',
    //   theme: 'snow'
    // });

  }


  ngOnChanges() {

  }
  onClick() {
    this.popup = true
  }
  onClickPopup() {
    this.popup1 = true
  }
  changedEditor(event: any) {
    if (event.editor.container.innerText == "\n") {
      console.log("test11")
      // this.editorModel = this.headerTamil
      this.editorModel = this.headerArabic
      // event.editor.container.isContentEditable = true
      // EditorChangeContent | EditorChangeSelection
    }
    console.log('changedEditor' + event.editor.container.innerText)
    this.changedValue = event.editor.container.innerText
    // this.changedValue = event.editor.container.innerHTML
  }
  blur(event: any) {
    console.log('blur' + event)
  }
  created(event: any) {
    console.log('created' + event)
    // event.container.innerText = this.HeaderTitle
  }
  savedata() {
    this.HeaderTitle = this.HeaderTitle + ' ' + this.changedValue
  }



  /**  Add calender Functionality For Google  */


  createEvent() {
    // this.data.createEvent()
    // this.authenticate()
    // this.initClient()
  }
  authenticate() {
    //   window.onLoadCallback = function(){
    //     gapi.auth2.init({
    //         client_id: "MY_ID_HERE.apps.googleusercontent.com"
    //     });
    // }
    // var authenticate = gapi.auth2.getAuthInstance()
    // .signIn({ scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events" })
    // .then(function () { console.log("Sign-in successful"); },
    //   function (err) { console.error("Error signing in", err); });
    // console.log(authenticate);

  }


  // initClient() {
  //   var GoogleAuth; // Google Auth object.
  //   gapi.client.init({
  //     'apiKey': 'AIzaSyCvdcM66qxdlRIAKGhB1VotyUW9qKzMIBU',
  //     'clientId': '746746677237-2pgct7kieo80i18igrgsk1ddmka1b646.apps.googleusercontent.com',
  //     'scope': "https://www.googleapis.com/auth/calendar ",
  //     // 'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  //   }).then(() => {
  //     GoogleAuth = gapi.auth2.getAuthInstance()
  //       .signIn({ scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events" })
  //       .then(() => {
  //         console.log("Sign-in successful", this.loadCalendarApi());
  //       },
  //         function (err: any) { console.error("Error signing in", err); })
  //     console.log(GoogleAuth)
  //     // Listen for sign-in state changes.
  //     // GoogleAuth.isSignedIn.listen(updateSigninStatus);
  //   });

  // }
  /** Not in use ...*/
  // loadClient() {
  //   gapi.client.setApiKey("AIzaSyCvdcM66qxdlRIAKGhB1VotyUW9qKzMIBU");
  //   return gapi.client.load("oauth2", "https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
  //     .then(function () { console.log("GAPI client loaded for API"); },
  //       function (err: any) { console.error("Error loading GAPI client for API", err); });
  // }

  // loadCalendarApi() {
  //   var loadCalender = gapi.client.load('calendar', 'v3', this.execute);
  //   console.log(loadCalender)
  // }

  execute() {
    var event = {
      'summary': 'Google I/O 2017',
      'location': '800 Howard St., San Francisco, CA 94103',
      'description': 'A chance to hear more about Google\'s developer products.',
      'start': {
        'dateTime': '2021-11-10T09:00:00-09:00',
        'timeZone': 'America/Los_Angeles'
      },
      'end': {
        'dateTime': '2021-11-10T17:00:00-09:00',
        'timeZone': 'America/Los_Angeles'
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
      ],
      'attendees': [
        { 'email': 'abc@gmail.com' },
        { 'email': 'def@gmail.com' }
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          { 'method': 'email', 'minutes': 24 * 60 },
          { 'method': 'popup', 'minutes': 10 }
        ]
      }
    };
    // var request = gapi.client.calendar.events.insert({
    //   'calendarId': 'primary',
    //   'resource': event
    // }).then(function (response: any) {
    //   // appendPre("Event created: " + response.result.htmlLink);
    //   console.log(response);
    // });
    // console.log(request)

  }

  async onSubmit(): Promise<void> {
    //   const timeZone = this.authService.user?.timeZone ?? 'UTC';
    //   const graphEvent = this.model.getGraphEvent(timeZone);

    //   try {
    //     await this.graphService.addEventToCalendar(graphEvent);
    //     this.alertsService.addSuccess('Event created.');
    //   } catch (error) {
    //     this.alertsService.addError('Error creating event.', error.message);
    //   }
  }

  // async addEventToCalendar(newEvent: MicrosoftGraph.Event): Promise<void> {
  //   if (!this.authService.graphClient) {
  //     this.alertsService.addError('Graph client is not initialized.');
  //     return undefined;
  //   }

  //   try {
  //     // POST /me/events
  //     await this.authService.graphClient
  //       .api('/me/events')
  //       .post(newEvent);
  //   } catch (error) {
  //     throw Error(JSON.stringify(error, null, 2));
  //   }
  // }


  async createOutlookEvent() {
    await this.data.createOutlookEvent()
    // this.data.createEvent()

    var tenantId = "f8cdef31-a31e-4b4a-93e4-5f571e91255a"
    var clientId = "1ff76dca-cbef-4278-8b49-7bbfb43ec134"
    // var  clientSecret = "ACP7Q~AhL_1Yryo_0IYmgwTWiqtUq~Fh5HMhR"
    var clientSecret = "RmD7Q~Ta0jXsA~wEmhMzr.oygepFBQpzA1zdZ"

    // var tenantId = "f8cdef31-a31e-4b4a-93e4-5f571e91255a"
    // var clientId = "80d45fca-1dcb-4d83-a6c5-d03d785b5ac4"
    // // var clientSecret = "666462f2-e497-44c3-be61-cb42f4897944" 
    // var  clientSecret ="ZLF7Q~qrSTBRWuyrvjZqHwXCGm.N.W1dkyHUh"
    // var scopes = [
    //   "user.read",
    //   "mailboxsettings.read",
    //   "calendars.readwrite"
    // ]
    // var scopes = ["api://80d45fca-1dcb-4d83-a6c5-d03d785b5ac4/Employees.Write.All api://80d45fca-1dcb-4d83-a6c5-d03d785b5ac4/Employees.Read.All"]

    // var scopes = ["https://outlook.office.com https://graph.windows.net https://graph.microsoft.com"]
    // const { Client } = require("@microsoft/microsoft-graph-client");

    // const { ClientSecretCredential } = require("@azure/identity");

    var scopes = ["https://graph.microsoft.com/.default"]
    const { TokenCredentialAuthenticationProvider } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
    const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: scopes
    });
    console.log(authProvider)

    // await this.getInnerWare(authProvider)
    const client = await Client.initWithMiddleware({
      debugLogging: true,
      authProvider
    });

    // const options = {
    //   authProvider,
    // };
    // const client = Client.init(options);

    const event = {
      subject: 'Let\'s go for lunch',
      body: {
        contentType: 'HTML',
        content: 'Does noon work for you?'
      },
      start: {
        dateTime: '2021-12-08T12:00:00',
        timeZone: 'Pacific Standard Time'
      },
      end: {
        dateTime: '2021-12-08T14:00:00',
        timeZone: 'Pacific Standard Time'
      },
      location: {
        displayName: 'Harry\'s Bar'
      },
      attendees: [
        {
          emailAddress: {
            address: 'samanthab@contoso.onmicrosoft.com',
            name: 'Samantha Booth'
          },
          type: 'required'
        }
      ],
      allowNewTimeProposals: true,
      // transactionId: '7E163156-7762-4BEB-A1C6-729EA81755A7'
    };

    await client.api('/me/events')
      .post(event);
  }


  addItem(data: any) {


    var indexData = this.courses.findIndex(dat => {
      return dat.key == data
    })

    console.log(this.courses)
    this.courses.map(dat => {
      if (dat.key == data) {
        this.datValuedata = dat.linked
      }
    })
    //   this._swiper?.addSlide(data+1, `<app-card (isExpand)="addItem($event)" [courseModel]="datValuedata[0]" class="appCardContainer"
    //   (isCollapse)=collapseItem($event)>
    // </app-card>` );
    this.courses.splice(indexData + 1, 0, ...this.datValuedata)

    let editedCourse = []
    editedCourse = this.courses.slice(0, indexData)
    this.courses.push(...editedCourse)
    this.courses.splice(0, indexData)
    console.log(this.courses)

  }

  collapseItem(data: any) {
    var indexData = this.courses.findIndex(dat => {
      return dat.key == data
    })

    this.courses.splice(indexData + 1, 2)
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  async onClickModal() {
    const noticationValue = await this.modalService.createPopup({
      backdropDismiss: true,
      cssClass: 'popup-modal-css-notification',
      componentProps: {
        header: "Set Disclosures Label and Data Points",
        Component: NotificationPopupComponent
      }
    })

    noticationValue.onDidDismiss().then((response) => {
      console.log(response)
      if (response?.data === "modified") {
        // this.iFetchCategories();
        console.log(response)
      }
    });
  }


  async reviewPopup() {
    const reviewValue = await this.modalService.createPopup({
      backdropDismiss: true,
      cssClass: 'popup-modal-css-review ',
      componentProps: {
        header: "Rate And Review",
        Component: ReviewPopupComponent
      }
    })
    reviewValue.onDidDismiss().then((response) => {
      console.log(response)
      if (response?.data === "modified") {
        // this.iFetchCategories();
        console.log(response)
      }
    });
  }

  async mandatoryPopup() {
    const mandatoryValue = await this.modalService.createPopup({
      backdropDismiss: true,
      cssClass: 'popup-modal-css-admin',
      componentProps: {
        header: "Set mandatory training label and Data points",
        Component: ViewModalPopupComponent
      }
    })
  }
}


