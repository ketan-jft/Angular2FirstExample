import { Component, Input, Output } from '@angular/core';   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  urlEntered:string;
  @Input()
  url:string;

  result:any;
  title : string;
  validate : any;
  myIframe:any;
  
  constructor() {
    this.title = 'AngularJS 2.0 URL Validator ';
    this.validate = function(){
      this.result=this.url;     
    }
  }
  onLoadSync(myIframe){
    var iframeDoc = (myIframe.contentWindow || myIframe.contentDocument)
    if(iframeDoc)
    {
      alert("Valid URL. You can use it");
      return;
    }
    else if(!iframeDoc)
    {
      alert("Invalid URL");
      return false;
    }
    window.setTimeout('onLoadSync();', 100);
  }

  copyValue(){
    this.urlEntered=this.url;
  }

}
