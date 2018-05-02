import { Component } from '@angular/core';

@Component({
  selector: 'website-header',
  templateUrl: './website.directives.header.html',
  styleUrls: ['./website.directives.header.css']
})
export class WebsiteHeader {
    navItemList = [];
    constructor() {
        this.navItemList = [{name: 'About Us', class: 'nav-link active'},{name: 'Admissions', class: 'nav-link active'},{name: 'Academics', class: 'nav-link active'},{name: 'Blog', class: 'nav-link active'},{name: 'Research', class: 'nav-link active'},{name: 'Contact Us', class: 'nav-link active'}];
    }
    changeBackGround () {
        document.getElementById('header').style.backgroundImage = '../../../brand.png';
    }
    
}
