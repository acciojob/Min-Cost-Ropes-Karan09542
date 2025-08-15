function mincost(arr)
{ 
//write your code here
// return the min 
	arr.sort((a,b) => a-b)
    if(arr.length === 1) return "Length must be > 2"
    let prev = arr[0] + arr[1]
    let count = prev;
    for(let i = 2 ;i <arr.length; i++){
        prev = prev + arr[i]
        count += prev
    }
    return count
}

module.exports=mincost;
