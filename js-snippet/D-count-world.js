var hh = "hello world";
//{h:1,o:2,l:3, d:1,r:1}
const nh= [...hh].filter(item=> item !==" ")
nh.reduce((acc, val, index) => {return {...acc, [val]: (nh.filter(item => item ===val).length)}}, {});

//chatgpt answer-
 [...hh.replace(/\s/g, '')].reduce((charCount, char) => {
        charCount[char] = (charCount[char] || 0) + 1;
        return charCount;
    }, {});
// gemini
// for (var i = 0; i < str.length; i++) {
//         var char = str[i];
//         charCount[char] = (charCount[char] || 0) + 1;
//     }