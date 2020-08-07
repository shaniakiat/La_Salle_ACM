import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 20,
      typeColor: 'white',
    });

    writer
      .strings(
        400,
        'La Salle University',
        'Association of Computing Machinery',
        'Fall 2020 - Spring 2021'
      )
      .start();
  }
}
