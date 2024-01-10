const fackapi =(even,url,data)=>{
  
 var xhr=new XMLHttpRequest;
 xhr.open(even,url,data)
 xhr.setRequestHeader('Content-type', 'application/json')
 xhr.onload=()=>{
   var t1=xhr.response
   console.log(JSON.parse(t1));
 }
 xhr.send(JSON.stringify(data));
 
xhr.onerror=(e)=>{
  console.log(e+'error found')
}

}

const getdata=()=>{
  fackapi('get','https://jsonplaceholder.typicode.com/posts')
}

const postdata = ()=>{
  fackapi('POST','https://jsonplaceholder.typicode.com/posts',{
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
}

const putdata = ()=>{
  fackapi('PUT','https://jsonplaceholder.typicode.com/posts/1',{
    id: 1,
    title: 'Bangladesh',
    body: 'creat by lihan',
    userId: 1,
  })
}
const patchdata = ()=>{
  fackapi('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
    title:'my name is lihan',
    body: 'creat by lihan',
  })
}

const deletedata=()=>{
  fackapi('DELETE','https://jsonplaceholder.typicode.com/posts/1')
} 
putdata();