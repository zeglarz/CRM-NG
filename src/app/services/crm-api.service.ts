import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction
} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {Customer} from '../interfaces/customer';
import DocumentReference = firebase.firestore.DocumentReference;
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CrmApiService {
  public customers: AngularFirestoreCollection<Customer>;

  constructor(private firestore: AngularFirestore) {
    this.customers = this.firestore.collection<Customer>('customers');
  }

  public saveCustomer(customer: Customer): Promise<DocumentReference> {
    return this.customers.add(customer);
  }

  public getCustomers(): Observable<Customer[]> {
    return this.customers.snapshotChanges().pipe(
      map((documents: DocumentChangeAction<Customer>[]) => {
        return documents.map((doc: DocumentChangeAction<Customer>) => {
          const data: Customer = doc.payload.doc.data() as Customer;
          const id: string = doc.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  public getCustomerById(id: string): Observable<Customer> {
    const customerDoc: AngularFirestoreDocument<Customer> = this.firestore.doc(`customers/${id}`);
    return customerDoc.valueChanges();
  }
}
