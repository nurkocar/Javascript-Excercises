function rgb(r, g, b){
    arr = [r, g, b]
    hex = []
    arr.forEach(el => {
                    el = Number(el).toString(16);
                    if (el < 2) {
                        el = '0' + el
                    }
                    hex.push(el);
                })    
    return hex.join('');  
}

rgb(10, 20, 30);
