import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user: Observable<firebase.User>;
id: any;
userobj: any;
fname: any;


     constructor(public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
         this.user = afAuth.authState;
         console.log("Log in page");
     }

     ngOnInit() {

     }


     login(email, password) {

         this.afAuth.auth.signInWithEmailAndPassword(email,password).then((data) => {

           var db = firebase.firestore();
           var user = firebase.auth().currentUser;
           var uid = user.uid;
           console.log(uid);

           var docRef = db.collection("users").doc(uid);

            var age = 'wewew';

           docRef.get().then((doc) => {
             if (doc.data().role == 'admin') {


               //console.log("Document data:", doc.data().fname);
               // this.router.navigate(['products'], { queryParams: {
               //      "firstname": doc.data().fname
               //  }});
               console.log("admin");
               this.router.navigate(['admin']);
              } else if (doc.data().role == 'unit_head') {
                console.log("unit_head");
                this.router.navigate(['unit_head']);
              } else if (doc.data().role == 'originator') {
                console.log("originator");
                this.router.navigate(['originator']);
              }
              else {
                console.log("No such document!");
                }
                }).catch(function(error) {
          console.log("Error getting document:", error);
              });

         })
         .catch(err => {

        alert('Wrong Credentials!');
      });

     }



}
