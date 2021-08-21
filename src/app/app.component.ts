import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservation-app';

  constructor (private reservationService: ReservationService) {
    this.rooms = [];
  }

  rooms: Room[]
  roomSearchForm: FormGroup
  currentCheckInVal: string
  currentCheckOutVal: string
  currentPrice: number
  currentRoomNumber: number


  ngOnInit() {
    this.roomSearchForm = new FormGroup({
      checkIn: new FormControl(''),
      checkOut: new FormControl(''),
      roomNumber: new FormControl(''),
    })

    this.roomSearchForm.valueChanges.subscribe(form => {
      
      this.currentCheckInVal = form.checkIn
      this.currentCheckOutVal = form.checkOut

      if (form.roomNumber) {
        let roomValues: string[] = form.roomNumber.split('|')
        this.currentRoomNumber = Number(roomValues[0])
        this.currentPrice = Number(roomValues[1])
      }
      


    })

    this.rooms = [
      new Room("123", "123", "150"),
      new Room("135", "145", "180"),
      new Room("254", "254", "200"),
    ];
  }
}

export class Room {
  id: string;
  roomNumber: string;
  price: string;

  constructor(id: string, roomNumber: string, price:string) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.price = price;
  }
}