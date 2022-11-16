import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController , LoadingController} from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-makanan-tambah',
  templateUrl: './makanan-tambah.page.html',
  styleUrls: ['./makanan-tambah.page.scss'],
})
export class MakananTambahPage implements OnInit {

  nama_makanan: any;
  harga: any;
  id_kategori: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController

  ) { }

  ngOnInit() {
  }

  addMakanan(){
    let url = this._apiService.apiURL() + "/tambah_makanan";
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json'},
      data: {
        nama_makanan: this.nama_makanan,
        harga: this.harga,
        id_kategori: this.id_kategori
      },
    }).then((data)=>{
      this.nama_makanan = "";
      this.harga = "";
      this.id_kategori = "";
      this.alertController.create({
        header: 'Notif',
        message: 'Berhasil tambah daftar makanan',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/');
    }, (error) => {
      this.alertController.create({
        header: 'Notif',
        message: 'Gagal input data',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
