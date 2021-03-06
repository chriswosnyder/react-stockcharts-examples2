

import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}


export function getData() {
	const promiseBubbleData = fetch("https://cdn.rawgit.com/backenddevplus/react-stockcharts/master/docs/data/bubble.json")
		.then(response => response.json());
	return promiseBubbleData;
}
