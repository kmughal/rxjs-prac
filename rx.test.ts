import { TestScheduler } from "rxjs-test";
import * as chai from "chai";
import * as Mocha from "mocha";

describe("Test suite", () => {
	let scheduler: TestScheduler;
	beforeEach(() => {
		scheduler = new TestScheduler((actual, expected) => {
			chai.expect(actual).deep.equal(expected);
		});
	});

	it("test 1", () => {
		const source$ = scheduler.createColdObservable("--a|", { a: 5 });
		const expectedMarble = "--a|";
		const expectedvalue = { a: 5 };
		scheduler.expectObservable(source$).toBe(expectedMarble, expectedvalue);
		scheduler.flush();
	});

	it("test 2", () => {});

	it("test 3", () => {});
});
