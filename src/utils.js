
export function selectWinners(teams) {
	const { length } = teams;
	const half = Array(length / 2)
		.fill()
		.map((item, index) => {
			const winner = Math.floor(Math.random() * 2);
			return teams[index * 2 + winner];
		});
	return half;
}

function uniqueIntegers(max) {
    const arr = Array(max).fill();
    let index = 0;
    while(arr.includes()) {
        const unique = Math.floor(Math.random() * max);
        if(!arr.includes(unique)) {
            arr[index] = unique;
            index += 1;
        }
    }
    return arr;
}

export function shuffleTeams(teams) {
    const { length } = teams;
    const indexes = uniqueIntegers(length);
	const arr = Array(length).fill().map((item, index) => teams[indexes[index]]);
	return arr;
};

