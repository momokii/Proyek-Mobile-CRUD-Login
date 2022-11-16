import { Component, OnInit } from '@angular/core';
// tambahan
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

const USERNAME = 'usernamesatu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public nama = '';

  constructor(private authService: AuthenticationService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.cekSesi();
    console.log(this.nama);
  }

  async cekSesi() {
    const ambilNama = await Preferences.get({key : USERNAME});
    if (ambilNama && ambilNama.value) {
      let namauser = ambilNama.value;
      this.nama = namauser;
    } else {

    }
  }

  logout() {
    this.alertController.create({
      header: 'Notif',
      subHeader: 'Yakin Logout?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            // jika yakin
            this.authService.logout();
            this.router.navigateByUrl('/', { replaceUrl: true });
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}
