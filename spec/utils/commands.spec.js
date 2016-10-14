fdescribe('Utils/Commands', function() {
	beforeAll(function() {
		console.log('\n.........U/Commands Spec.........');
	});

	describe('commands', () => {
		beforeEach(() => {
			cSet = new Set([1, 2, 3, 4]);
			cMap = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
			cArr = [00, 11, 22, 33, 44];
		});
		describe('spread', () => {
			it('returns an array of the collections default values', () => {
				expect(Comm.spread(cMap)).toBeArray();
			});
		});
		describe('spreadK', () => {
			it('returns an array of Map keys', () => {
				expect(Comm.spreadK(cMap)).toContain(8);
			});
		});
		describe('spreadV', () => {
			it('returns an array of map values', () => {
				expect(Comm.spreadV(cMap)).toContain(1);
			});
		});
		describe('spreadKV', () => {
			it('returns an array of key values pairs', () => {
				expect(Comm.spreadKV(cArr)[0]).toContain(...[0, 0]);
			});
		});
		describe('tuple(val)(key)', () => {
			it('returns a [key, val] array', () => {
				expect(Comm.tuple(0)('zero')).toBeArray();
			});
		});
		describe('triple(val)(key)(key1)', () => {
			it('returns a [key0,key1,val] array', () => {
				expect(Comm.triple(1)('zero')('one')).toBeArray();
			});
		});
		describe('addSet(val)', () => {
			it('adds a value to a set', () => {
				Comm.addSet(cSet, 9);
				expect([...cSet]).toContain(9);
			});
		});
		describe('addMap(tuple)', () => {
			it('appends a [k,v] tuple to a map', () => {
				Comm.addMap(cMap, [22, 33]);
				expect([...cMap.keys()]).toContain(22);
			});
		});
		describe('rmColl', () => {
			it('returns a collection without the element', () => {
				Comm.rmColl(cSet, 2);
				expect([...cSet]).not.toContain(2);
			});
		});
		describe('popFirst', () => {
			it('deletes the first key in a map/set', () => {
				let copy = new Set(cSet);
				let first = Comm.popFirst(copy);
				expect(first).toBe(1);
				expect(cSet.has(first)).toBeTrue();
				expect(copy.has(first)).toBeFalse();
			});
		});
		describe('merge', () => {
			it('adds all elements of the second collection to the first', function() {
				let m0 = new Map().set(8, 1).set(7, 2).set(6, 3).set(5, 4);
				let m1 = new Map().set(8, 2).set(7, 23).set(9, 10).set(11, 12);
				expect(Comm.spread(Comm.merge(m0)(m1))).toContain([11, 12]);
			});
		});
	});
});