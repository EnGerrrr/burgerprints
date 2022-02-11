import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
  selector: "app-front-edit",
  templateUrl: "./front-edit.component.html",
  styleUrls: ["./front-edit.component.css"],
})
export class FrontEditComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  htmlContent = "";

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    defaultParagraphSeparator: "p",
    defaultFontName: "Arial",
    toolbarHiddenButtons: [
      [
        "undo",
        "redo",
        "subscript",
        "superscript",
        "indent",
        "outdent",
        "insertUnorderedList",
        "insertOrderedList",
        "heading",
        "fontName",
      ],
      [
        "customClasses",
        "unlink",
        "insertVideo",
        "insertHorizontalRule",
        "removeFormat",
        "toggleEditorMode",
      ],
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: "redText",
        class: "redText",
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
  };
  // toolbarHiddenButtons: [
  //   [
  //     'undo',
  //     'redo',
  //     'bold',
  //     'italic',
  //     'underline',
  //     'strikeThrough',
  //     'subscript',
  //     'superscript',
  //     'justifyLeft',
  //     'justifyCenter',
  //     'justifyRight',
  //     'justifyFull',
  //     'indent',
  //     'outdent',
  //     'insertUnorderedList',
  //     'insertOrderedList',
  //     'heading',
  //     'fontName'
  //   ],
  //   [
  //     'fontSize',
  //     'textColor',
  //     'backgroundColor',
  //     'customClasses',
  //     'link',
  //     'unlink',
  //     'insertImage',
  //     'insertVideo',
  //     'insertHorizontalRule',
  //     'removeFormat',
  //     'toggleEditorMode'
  //   ]
  // ]

  fileToUpload: any;
  imageUrl: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
