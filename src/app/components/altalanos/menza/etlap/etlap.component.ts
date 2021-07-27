import { Component, OnInit, EventEmitter, OnDestroy  } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-etlap',
  templateUrl: './etlap.component.html',
  styleUrls: ['./etlap.component.css']
})
export class EtlapComponent implements OnInit, OnDestroy {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  today = new Date();
  validDataSubscription: Subscription;
  validDataFoundEvent = new EventEmitter();
  validData = false;
  isSupportedBrowser: boolean = false; 

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('menza');
    this.items = this.itemsCollection.valueChanges(); 

  }

  ngOnInit(){
    this.validDataSubscription = this.validDataFoundEvent.subscribe( () => {
      this.validData = true;}
    );
    this.detectBrowser();
  }

  ngOnDestroy(){
    this.validDataSubscription.unsubscribe();
  }

  validator(nap){
    nap = (nap.split(','))[0];
    var day = new Date(nap);
    day.setHours(day.getHours()+20);
    console.log('today: ' + this.today);
    console.log('day: ' + day);
    if (this.today < day) {
      this.validDataFoundEvent.emit();
      return true;
    } else return false;
  }

  detectBrowser() {
    console.log('detecting browser');
    console.log(window.navigator.userAgent);
    console.log(window.navigator.userAgent.includes('firefox'));
    if ((window.navigator.userAgent.includes('Chrome')) || (window.navigator.userAgent.includes('Edg')) || (window.navigator.userAgent.includes('Opera')))
      this.isSupportedBrowser = true;
  }
}
