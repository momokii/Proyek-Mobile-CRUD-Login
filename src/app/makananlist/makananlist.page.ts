import { Component, OnInit } from '@angular/core';

import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-makananlist',
  templateUrl: './makananlist.page.html',
  styleUrls: ['./makananlist.page.scss'],
})
export class MakananlistPage {

  nama: any;
  harga: any;
  kategori: any;
  makananlist: any[];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {

    this.getMakanan();

  }

  ngOnInit() {
    console.log("cek fungsi halaman event");
  }


  ionViewDidLoad() {
    console.log("Jika selesai loading");
    this.getMakanan();
  }


  getMakanan(){
    this._apiService.getMakanan().subscribe((res: any)=> {
      console.log('sukses', res);
      this.makananlist = res;
    }, (error: any) => {
      console.log('gagal', error);
      this.alertController.create({
        header: 'Notif',
        message: 'Gagal',
        buttons: ['OK']
      }).then( res => {
        res.present();
      })
    }
    )
  }

  deleteMakanan(id){
    this.alertController.create({
      header : 'Hapus data',
      message: 'Yakin hapus data makanan?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan')
          }
        },
        {
          text: 'Hapus Gas',
          handler: (data: any) => {
            // jika ditekan
            this._apiService.deleteMakanan(id).subscribe((res: any) => {
              console.log('berheasil', res);
              this.getMakanan();
            }, (error: any) => {
              console.log('Gagal', error);
              this.alertController.create({
                header: 'Notif',
                message: 'gagal muat data',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }

      ]
    }).then(res => {
      res.present();
    })
  }

}
