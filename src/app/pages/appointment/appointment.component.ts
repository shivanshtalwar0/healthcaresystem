import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import{fader} from 'src/app/route-animations';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  animations:[
    fader
  ]
})
export class AppointmentComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
        {
            label:"Make Appointment",
            link: './makeappointment',
            index: 0
        }, {
            label:"View Appointment",
            link: './viewappointment',
            index: 1},
        // }, {
        //     label: 'Third',
        //     link: './third',
        //     index: 2
        // },
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
prepareRoute(outlet:RouterOutlet){
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}
