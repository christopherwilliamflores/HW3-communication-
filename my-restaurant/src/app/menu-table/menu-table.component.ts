import { Component, OnInit } from '@angular/core';
import {MenuService} from '../_services/menu.service';
@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {

  members = [
    {
      nombreplato: "Francisco Vilchez",
      precio: "1991/05/26",
    },
    {
      nombreplato: "Zlatan Ibrahimovic",
      precio: "1981/10/03",
    }
  ]

constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(data => {
      this.members = data;
    })
  }
}