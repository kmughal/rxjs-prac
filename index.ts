

import {take, multicast, refCount, publish,share, publishBehavior, tap, observeOn} from "rxjs/operators";
import {
	Observable,
	Subscriber,
	concat,
	from,
	of,
	fromEvent,
	interval,
	observable,
	Subject,
	queueScheduler,
	asapScheduler,
	asyncScheduler,
	merge
} from "rxjs";
import { books } from "./sample/data";
import { XMLHttpRequest } from "xmlhttprequest";

//#region Creating observable


// function subscribe(subscribe: Subscriber<{}>) {
// 	if (books.length === 0) {
// 		subscribe.error("books is empty");
// 	}
// 	console.log("started: ", new Date().toISOString());
// 	books.forEach(b => subscribe.next(b));

// 	setTimeout(() => {
// 		console.log("completed: ", new Date().toISOString());
// 	}, 1000);
// 	return () => {
// 		console.log("tearing down :", new Date().toISOString());
// 	};
// }

// const bookObserable$ = Observable.create(subscribe);

// bookObserable$.subscribe(console.log);

// // Sample 2

// console.log("Sample 2 rxjs using of and from operators.");

// const of$ = of("simple of and from example", "hello", 1009, books[0].id);

// const from$ = from(books);

// const combine$ = concat(of$, from$);

// combine$.subscribe(console.log);
import { ajax } from "rxjs/ajax";

// Sample 3 - Dom

// const button = document.querySelector(".btn-class");

// fromEvent(button,"click").subscribe(event => {
//   console.log(event.srcElement.nodeType);
// })

// ajax({
// 	url: "http://localhost:3000/sample",
// 	crossDomain: true,
// 	createXHR: function() {
// 		return new XMLHttpRequest();
// 	}
// })
// .subscribe(res => console.log(JSON.stringify(res,null,2)));

// How to create your own observer

// let myObserver = {
//   next : (value: any) => console.log(value) ,
//   error : (e:Error) => console.log(e),
//   complete : () => console.log("done")
// };

// const sourceObserve$ = of("hello" , new Date().toISOString(),1344353);
// sourceObserve$.subscribe(myObserver);
//#endregion

//#region Intervals

// const timeObserver$ = Observable.create(s => {
// 	s.next(new Date().toLocaleTimeString());
// 	s.complete("done");
// });

// timeObserver$.subscribe(console.log);
// setTimeout(() => timeObserver$.subscribe(console.log), 1000);
// setTimeout(() => timeObserver$.subscribe(console.log), 2000);

// let timer$ = interval(1000);

// const subscriber = timer$.subscribe(console.log);

// setTimeout(() => subscriber.unsubscribe(), 5000);
//#endregion

//#region Operators

// import { map, filter, take,flatMap } from "rxjs/operators";
// console.log("new way to write code:");
// of(5, 6, 7, 8, 9, 45)
// 	.pipe(
// 		map(v => v * 10),
// 		filter(v => v > 10)
// 	)
// 	.subscribe(console.log);

// const pipes = (funcs: Array<any>) => {
// 	if (funcs.length > 0) {
// 		let result = null;
// 		for (let index = 0; index < funcs.length; index++) {
// 			const f = funcs[index] as Function;
// 			index === 0 ? (result = f()) : (result = f(result));
// 		}
// 	}
// };

// pipes([
// 	function() {
// 		return 3;
// 	},
// 	function(v) {
// 		return v * 4;
// 	},
// 	function(v) {
// 		console.log("value is : ", v);
// 	}
// ]);

// interval(1000)
// 	.pipe(
// 		map(_ => new Date()),
// 		take(3)
// 	)
// 	.subscribe(console.log);
//#endregion

//#region Custom Operators

// 	function filterById(id:any){
// 		return (source$:Observable<{}>) => {
// 			return new Observable((subscriber:Subscriber<{}>)=>{
// 				return source$.subscribe((data:any)=> {
// 					if (data.id === id) {
// 						subscriber.next(data);
// 					}
// 				})
// 			})
// 		}
// 	}

// function filterById1(id:any) {
// 	return filter((x:any)=> x.id === id);
// }

// ajax({
// 	url: "http://localhost:3000/sample",
// 	crossDomain: true,
// 	createXHR: function() {
// 		return new XMLHttpRequest();
// 	}
// }).pipe(flatMap(r=> r.response),filterById1(50))
// .subscribe(console.log);

//#endregion

//#region Subjects & Multicasting

// let subject$ = new Subject();

// subject$.subscribe(val=> console.log(`Hello ${val},Date:${new Date().toLocaleDateString()}`));
// subject$.subscribe(val=> console.log(`Hello Again :${val},Time:${new Date().toLocaleTimeString()}`));

// // subject$.next("Khurram");
// import chalk from "chalk"
// let source$ = of("Shahzad" , "Mughal");

// source$.subscribe(subject$);


// let src$ = interval(1000)
// .pipe(take(4),
// //multicast(new Subject()),
// //ublish()/*short cut for multicast*/,
// //refCount()
// publishBehavior(-1),
// refCount()
// //share() // for late subscribers 
// );

// // let sub$ = new Subject();
// // src$.subscribe(sub$);

// src$.subscribe(v=> console.log(chalk.bgCyan(`Source1:${v}`)));

// setTimeout(() => {
// 	src$.subscribe(v=> console.log(chalk.bgWhiteBright(`Source2:${v}`)));
// }, 1000);

// setTimeout(() => {
// 	src$.subscribe(v=> console.log(chalk.bgBlue(`Source3:${v}`)));
// }, 2000);

// setTimeout(() => {
// 	src$.subscribe(v=> console.log(chalk.bgRed(`Source4:${v}`)),null,()=>console.log(chalk.bgRed("source 4 is done")));
// }, 4500);


//src$.connect(); in order to avoid this line of code you can use refCount(1)
//#endregion


//#region Schedulers
// console.log("Start:");
// let queue$ = of("Hello sync scheduler",queueScheduler);
// let asapQueue$ = of("asap scheduler" , asapScheduler);
// let asycnQueue$ = of("Async queue" , asyncScheduler);

// merge(queue$,asapQueue$,asycnQueue$).subscribe(console.log);
// console.log("end:");


// from([1,2,3,4],queueScheduler)
// .pipe(
// 	tap(v=> console.log(`Value:${v}`)),
// 	observeOn(asyncScheduler),
// 	tap(v=> console.log(`Power ${Math.pow(v,2)}`))
// ).subscribe();

//#endregion

