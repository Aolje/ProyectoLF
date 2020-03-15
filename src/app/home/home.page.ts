import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { Router, RouterEvent } from "@angular/router";
import { FBservicesService } from "../fbservices.service";
import { SpeechRecognition } from "@ionic-native/speech-recognition/ngx";
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  valorIngreso;
  mostrarTotalI;
  sumaI;
  sumaE;
  sumaIE;
  sumaEE;
  isRecord: boolean = false;
  // maches: String [];

  //  pages: [{
  //    title: 'firs page',
  //    url:'/home'
  //  }];
  //  selectedPath = '';
  constructor(
    private menu: MenuController,
    private router: Router,
    public FB: FBservicesService
    // public sp: SpeechRecognition,
    // public ch: ChangeDetectorRef
  ) {
    // this.router.events.subscribe((event:RouterEvent) =>{
    //   this.selectedPath = event.url;
    // })
  }
  irIngresos() {
    this.router.navigate(["ingresos"]);
  }
  irGastos() {
    this.router.navigate(["gastos"]);
  }
  cerrarSesion() {
    this.FB.cerrarSesion();
  }
  openCustom() {
    this.menu.enable(true, "custom");
    this.menu.open("custom");
  }
  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }
  // pararGrabar(){
  //   this.sp.stopListening().then(() => {
  //   this.isRecord = false;
  //   });
  //   }

  //   grabar(){
  //   let options={
  //   language : 'wn-US'
  //   }

  //   this.sp.startListening().subscribe(maches => {
  //   this.maches = maches;
  //   this.ch.detectChanges();
  //   });
  //   }

  //   darPermiso(){
  //   this.sp.hasPermission().then((hasPermission : boolean) => {
  //   if(!hasPermission){
  //   this.sp.requestPermission();
  //   }
  //   });
  //   }
}
