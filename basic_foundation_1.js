/* Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255. */
function one_to_two_fifty_five(){
    arr = [];
    for(i = 1; i <=255; i++){
        arr.push(i);
    }
    return arr
}
one_to_two_fifty_five_result = one_to_two_fifty_five()
/* console.log(one_to_two_fifty_five_result) */




/* Get even 1000 */
function get_even_one_thousand(){
    var sum = 0;
    for (i = 1; i <= 1000; i++){
        if(i%2==0){
            sum +=i;
        }
    }
    return sum;
}
get_even_one_thousand_result = get_even_one_thousand()
/* console.log(get_even_one_thousand_result) */




/* Sum odd 5000  */
function sum_odd_five_thousand(){
    var sum = 0;
    for (i = 1; i <= 5000; i++){
        if(i%2!=0){
            sum +=i;
        }
    }
    return sum;
}
sum_odd_five_thousand_result = sum_odd_five_thousand()
/* console.log(sum_odd_five_thousand_result) */




/* Iterate an array  */
function iterate_arr(arr){
    var sum = 0;
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
iterate_arr_result1 = iterate_arr([1,2,5])
iterate_arr_result2 = iterate_arr([-5,2,5,12])
/* console.log(iterate_arr_result1)
console.log(iterate_arr_result2) */




/* Find max */
function find_max(arr){
    var max = 0;
    for (j = 0; j < arr.length; j++){
        
        if (arr[j] > max){
            max = arr[j];
        }
    }
    return max;
}
find_max_result = find_max([-3,3,5,7])
/* console.log(find_max_result) */




/* Find average */
function find_avg(arr){
    var sum = 0;
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    avg = sum/(arr.length)
    return avg;
}
find_avg_result = find_avg([1,3,5,7,20])
/* console.log(find_avg_result) */





/* Array odd */
function arr_odd(){
    var odd = [];
    for (i = 1; i <= 50; i++){
        if(i%2!=0){
            odd.push(i);
        }
    }
    return odd;
}
arr_odd_result = arr_odd()
/* console.log(arr_odd_result) */




/* Greater than Y */
function greater_than_y(arr, num){
    count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > num){
            count++
        }
    }
    return count;
}
greater_than_y_result = greater_than_y([1, 3, 5, 7], 3)
/* console.log(greater_than_y_result) */




/* Squares */
function squares(arr){ 
    for (i = 0; i < arr.length; i++){
        arr[i] = arr[i] ** 2;
    }
    return arr;
}
squares_result = squares([1,5,10,-2])
/* console.log(squares_result) */




/* Negatives  */
function negatives(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i]  < 0){
        arr[i] = 0;
        }
    }
    return arr;
}
negatives_result = negatives([1,5,10,-2])
/* console.log(negatives_result) */




/* Max/Min/Avg */
function max_min_avg(arr){
    var min = null;
    var max = null;
    var avg = null;
    var sum = null;
    var tmparr = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i]  < min){
        min = arr[i];
        }
    }
    for (i = 0; i < arr.length; i++){
        if (arr[i]  > max){
        max = arr[i];
        }
    }
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum/arr.length;
    tmparr.push(max);
    tmparr.push(min);
    tmparr.push(avg);
    return tmparr;
}
max_min_avg_result = max_min_avg([1,5,10,-2])
/* console.log(max_min_avg_result) */




/* Swap Values */
function swap_val(arr){
    var x = arr[0];
    var y = arr[arr.length-1];
    arr[0] = y;
    arr[arr.length-1] = x;
return arr
}
swap_val_result = swap_val([1,5,10,-2])
/* console.log(swap_val_result) */




/* Number to String */
function num_to_string(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i]  < 0){
        arr[i] = 'Dojo';
        }
    }
    return arr;
}

num_to_string_result = num_to_string([-1,-3,2])
/* console.log(num_to_string_result) */