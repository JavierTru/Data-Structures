//imprime los 11 primeros números triangulares
let tri = n => {
    for(let i=1,j=1; j<n+1; j++,i+=j)
	console.log(i);
};
tri(11);