// const byronPoodle = {
//     name: "Byron",
//     ageInYears: 2,
//     warn: function() {
//       console.log(`Bark bark bark`);
//       console.log(`${this.name} is ${this.ageInYears} years old`)
//     }
//   };
//   byronPoodle.warn()
//   const frog = { name: "Kermit" };
// const pig = { name: "Miss Piggy" };
// const speak = function() { return `It ain't easy being ${this.name}`};
// console.log(speak());


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '622a505271msh9e483f40c1d13d7p1f7f1cjsn6da4973e3db0',
// 		'X-RapidAPI-Host': 'real-estate12.p.rapidapi.com'
// 	}
// };

// fetch('https://real-estate12.p.rapidapi.com/listings/sale?state=CA&city=Los%20Angeles&page=1&sort=relevant&type=single-family%2Cmulti-family', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.properties))
// 	.catch(err => console.error(err));;

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '622a505271msh9e483f40c1d13d7p1f7f1cjsn6da4973e3db0',
// 		'X-RapidAPI-Host': 'outsida.p.rapidapi.com'
// 	}
// };

// fetch('https://outsida.p.rapidapi.com/api/v1/events', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


const video = {
    title : "venom",
    tags : ['a', 'b', 'c', 'd', 'e'],
    showTags() {
        this.tags.forEach(tag => console.log(tag))
    }
    // play : function(){
    //     console.log(this)
    // }
}
video.showTags()