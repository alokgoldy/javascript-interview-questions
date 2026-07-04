// const fn = async () => {
//     console.log('alok')
// }

// fn().then();

var compress = function(chars) {
    let result = '';
    let count = 1;

    for(let i = 0; i< chars.length; i++){
        if(chars[i] === chars[i-1]){
            count++;
        }else {
            result += chars[i];
            if(count > 1) result += count;
            count++;
        }
    }
    return result
}