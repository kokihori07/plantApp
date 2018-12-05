let test2 = "わーい";
let jsontest;
let json2;

const sensingDataUrl = new URL('https://api.hakobune-farmers.com/sensing_data?limit=20');
let params = sensingDataUrl.searchParams;
params.append('limit', 1);
fetch(
    sensingDataUrl,
    {
        'method': 'GET',
    }
)

//.then(json2 => {
  //  jsontest = JSON.parse(json2)
//})

.then(r => r.json())
.then(j => j.data[0])

//r.json().then(function(r) {
    // JSON を使用した処理を実行する
 // })

.then(r => {
    let elem = document.getElementById("test").innerText = JSON.stringify(r, null, 4);
    console.log(r);
});

// .then(j=>{
//     console.log(j.data[0]));;
// console.log(r);

//let elem = document.getElementById("test").innerText = jsontest;
//elem.innerText = 

