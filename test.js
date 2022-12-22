console.log('u')
let request = new XMLHttpRequest();
request.open('GET', 'https://www.example.com/data.txt', false);
request.send(null);

if (request.status == 200){
  let data = request.responseText;
  console.log(data);
}
