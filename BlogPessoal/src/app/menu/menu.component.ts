import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppService } from 'src/service/app.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

@Injectable()
export class MenuComponent implements OnInit {
  show: boolean = true
  title: String;
  route: String;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService) { }

  ngOnInit() {
    this.appService.getTitle().subscribe(appTitle => this.title = appTitle);
  }

  clear() {
    this.route = "";
    this.show = false;
  }
}
