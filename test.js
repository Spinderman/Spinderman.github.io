const configurazione = [
	{
		id: "1s",
		max: 2
	},{
		id: "2s",
		max: 2
	},{
		id: "2p",
		max: 6
	},{
		id: "3s",
		max: 2
	},
	{
		id: "3p",
		max: 6
	},{
		id: "4s",
		max: 2
	},
	{
		id: "3d",
		max: 10
	},{
		id: "4p",
		max: 6
	},{
		id:"5s",
		max: 2
	},
	{
		id: "4d",
		max: 10
	},{
		id:"5p",
		max: 6
	},{
		id:"6s",
		max: 2
	},{
		id: "4f",
		max: 14
	},{
		id:"5d",
		max: 10
	},
	{
		id:"6p",
		max: 6
	},
	{
		id:"7s",
		max: 2
	},
	{
		id:"5f",
		max: 14
	},{
		id:"6d",
		max: 10
	},{
		id:"7p",
		max: 6
	}
]

function test(){
	var numelemento = document.getElementById("numeroatomico").value
	var obj = {}
	configurazione.forEach(test=>{
		for (let u = 1; u <= test.max; u++) {
			numelemento = numelemento - 1
			if(numelemento >= 0){
				obj[test.id] = u
			}
		}
	})
	var str = '';
	for (var k in obj) {
	  if (obj.hasOwnProperty(k)) {
		str += k + obj[k] + ' ';
	  }
	}
	document.getElementById("output").innerHTML = str
	console.log(str)		
}
