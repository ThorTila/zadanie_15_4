const hello = 'Hello',
    world = 'World';

let merge = (...toMerge) => {
        let merged = '';
        for (i=0; i < toMerge.length; i++) {
            merged += toMerge[i];
            merged += ' ';
        }
        return merged;
    }
console.log(merge(hello, world));