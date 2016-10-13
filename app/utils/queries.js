const spread = (coll = []) => [...coll];
const spreadK = (coll = []) => [...coll.keys()];
const spreadV = (coll = []) => [...coll.values()];
const spreadKV = (coll = []) => [...coll.entries()];

const first = (coll = []) => spread(coll).shift();
const last = (coll = []) => spread(coll).pop();
const fromIndex = (coll = new Set) => (index) => spread(coll).slice(index, 1);

const firstK = (coll = []) => first(spreadK(coll));
const lastK = (coll = []) => last(spreadK(coll));

const hasK = (coll = []) => (key) => coll.has(key);
const x_hasK = (coll = []) => (key) => !coll.has(key);
const hasKV = (path) => ([key, val]) => path.has(key);
const x_hasKV = (path) => ([key, val]) => !hasKV(path)([key, val]);

const rmFirst = (coll = []) => {
	let elem = first(coll);
	coll.delete(elem);
	return elem;
};

module.exports = {
	spread,
	spreadK,
	spreadV,
	spreadKV,
	first,
	last,
	fromIndex,
	firstK,
	lastK,
	hasK,
	x_hasK,
	hasKV,
	x_hasKV,
	rmFirst,
};