import { Component, OnChanges, OnInit } from '@angular/core';
import { appInitialize } from '@ionic/angular/app-initialize';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill'
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
// import * as QuillNamespace from 'quill';
// let Quill: any = QuillNamespace;
import Quill from 'quill';



// const font = Quill.import('formats/font')



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnChanges {

  editorModel = ""
  content = 'dhsdsjchdhjs'
  editorContent = "text"
  HeaderTitle = "Thus We Want To Edit Text As Per The Instructions"
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


  constructor() {
    var BackgroundClass = Quill.import('attributors/class/background');
    var ColorClass = Quill.import('attributors/class/color');
    var SizeStyle = Quill.import('attributors/style/size');
    Quill.register(BackgroundClass, true);
    Quill.register(ColorClass, true);
    Quill.register(SizeStyle, true);

  }


  appInitialize() {

  }
  async ngOnInit() {
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
    Font.whitelist = ['mirza', 'roboto','anton'];
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
      this.editorModel = this.HeaderTitle
      // event.editor.container.isContentEditable = true
      // EditorChangeContent | EditorChangeSelection
    }
    console.log('changedEditor' + event.editor.container.innerText)
    this.changedValue = event.editor.container.innerText
    this.changedValue = event.editor.container.innerHTML
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
}

