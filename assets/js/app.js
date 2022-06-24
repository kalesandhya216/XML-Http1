
let cl = console.log;

let info = document.getElementById("info");
let postsData = document.getElementById("postsData");

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => cl(err));

// GET, POST, PATCH, PUT, DELETE

// xmlHttpRequest()
// It is a constructor method
// constructor method >> It is a blueprint for creating objects


let apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// 1. create instance/object of XMLHttpRequest()

let xhr = new XMLHttpRequest();

// 2. open method terminal

xhr.open("GET", apiUrl);

// 3. onload

xhr.onload = function(){
    cl(xhr.response);
    let data = JSON.parse(xhr.response);
    templating(data);
}


function templating(arr){
  let result = "";
  arr.forEach(ele => {
      result += `
                  <tr>
                      <td>${ele.id}</td>
                      <td>${ele.userId}</td>
                      <td>${ele.title}</td>
                      <td>${ele.completed}</td>
                  </tr>`
    })
    info.innerHTML = result;
}




// . send

xhr.send();



// ==================== Ex. 1) ==========================


let ApiUrl = 'https://jsonplaceholder.typicode.com/posts';

// 1. create instance / object of XMLHttpRequest()

let xmlhr = new XMLHttpRequest();

// 2. open method terminal

xmlhr.open("GET", ApiUrl);

// 3. onload

xmlhr.onload = function(){
  cl(xmlhr.response);
  let postData = JSON.parse(xmlhr.response);
  dataTemplating(postData);
}


function dataTemplating(array){
  let result = "";
  array.forEach(val => {
    result += `<tr>
                  <td>${val.id}</td>
                  <td>${val.userId}</td>
                  <td>${val.title}</td>
                  <td>${val.body}</td>
              </tr>`
  });
  postsData.innerHTML = result;
}



// 4. send

xmlhr.send();