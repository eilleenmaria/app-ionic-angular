import {  Component,  ElementRef, Input, OnInit, ViewChild, HostListener } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Productos',
      icon: 'list',
      path: '/productos'
    },
    {
      title: 'categorias',
      children: [
        {
          title: 'Deportivos',
          icon: 'list',
          path: '/deportivo'
        }
      ]
    }
    
  ];

  title = '';
  dropdown = false;
  @ViewChild('productbtn', { read: ElementRef })productbtn!: ElementRef;

  constructor(private menuCtrl: MenuController, private plt: Platform) { }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }
  @HostListener('window:resize', ['$event'])
  private onResize(event:any) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth);
  }

  toggleMenu(width:any) {
    if (width > 768) {
      this.menuCtrl.enable(false, 'myMenu');
    } else {
      this.menuCtrl.enable(true, 'myMenu');
    }
  }

  setTitle(title:string) {
    this.title = title
  }
  hideDropdown(event:any) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top+2;
    const leftBoundary = rect.left+2;
    const rightBoundary = rect.right-2;

    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }


}
