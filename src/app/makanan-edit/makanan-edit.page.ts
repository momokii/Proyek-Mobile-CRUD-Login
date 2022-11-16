import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { AlertController , LoadingController} from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';


@Component({
  selector: 'app-makanan-edit',
  templateUrl: './makanan-edit.page.html',
  styleUrls: ['./makanan-edit.page.scss'],
})
export class MakananEditPage implements OnInit {

  id_makanan: any;
  nama_makanan: any;
  harga: any;
  id_kategori: any;



  constructor(

    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,

  ) {
    this.route.params.subscribe((params: any) => {
      this.id_makanan = params.id;
      console.log(this.id_makanan);
      this.ambilMakanan(this.id_makanan);
    })
   }

  ngOnInit() {
  }



  ambilMakanan(id){
    this._apiService.ambilMakanan(id).subscribe((res: any) => {
      console.log('sukses', res);
      let makanan = res;
      this.nama_makanan = makanan.nama;
      this.harga = makanan.harga;
      this.id_makanan = makanan.id;
      this.id_kategori = makanan.kategori;
    },(error: any) => {
      console.log('eror', error);
      alert('gagal');
    })
  }


  editMakanan(){
    let url = this._apiService.apiURL()+'/edit_makanan';
    Http.request({
      method : 'POST',
      url : url,
      headers : { "Content-Type" : "application/json" },
      data : {
        id_makanan : this.id_makanan,
        nama_baru : this.nama_makanan,
        harga_baru : this.harga,
        kategori_id : this.id_kategori,
      },
    }).then((data) => {
      this.alertController.create({
        header : 'Notif',
        message : 'berhasil ubah',
        buttons : ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/');
    }, (err)=>{
      this.alertController.create({
        header: 'Notif',
        message: 'Gagal Edit',
        buttons : ['OK']
      }).then( res => {
        res.present();
      });

    })
  }

}
