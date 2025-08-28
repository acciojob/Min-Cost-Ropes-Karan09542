function mincost(arr)
{ 
//write your code here
// return the min 
	let cost = 0;
    while(arr.length >1){
        arr.sort((a,b) => a-b)
        const first = arr.shift()
        const second = arr.shift()
        const sum = first + second;
        cost += sum
        arr.push(sum)
    }
    return cost;
}

module.exports=mincost;
