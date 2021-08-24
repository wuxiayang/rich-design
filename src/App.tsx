import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App: React.FC = () => {
//   const [ title, setTitle ] = useState('');
//   const postData = {
//     title: 'my title',
//     body: 'Hello man'
//   }
//   useEffect(()=>{
//     // axios.get('http://jsonplaceholder.typicode.com/posts/1', {
//     //   headers: {'X-Requested-With': 'XMLHttpRequest'},
//     //   responseType: 'json', 
//     // })
//     axios.post('http://jsonplaceholder.typicode.com/posts', postData)
//       .then( resp => {
//         console.log('resp: ', resp);
//         setTitle(resp.data.title);
//       })
//   })
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{title}</h1>
//       </header>
//     </div>
//   );
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if(files){
      const uploadedFile = files[0];
      const formData = new FormData();
      formData.append(uploadedFile.name, uploadedFile);
      axios.post('http://jsonplaceholder.typicode.com/posts/', formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp => {
        console.log(resp);
      })
    }
  }
  return (
    <div className="App" style={{ marginTop: '100px', marginLeft: '100px'}}>
        <input 
          type='file' 
          name="myFile" 
          onChange={handleFileChange}
        />
    </div>
  );
}

export default App;
