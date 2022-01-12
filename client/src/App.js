import React ,{useState} from 'react';
import './App.css';

//access key
// epyyTsyS0BvvZc6b9NIEv4-jsyKyUR1h_eJ4TRBHWWA

// secret key
//MKV5OknqcXlqbRnjqFZS3r24Q05cmICOWxtZqhfu_DA

function App(){
	const [value,setValue] = useState("");
	const [results,setResults] = useState([]);
	const fetchImages = ()=>{
		fetch('https://api.unsplash.com/search/photos?client_id=epyyTsyS0BvvZc6b9NIEv4-jsyKyUR1h_eJ4TRBHWWA&query=${value}&orientation=${squarish}')
		.then(res=>res.json())
		.then(data=>{
			//console.log(data);
			setResults(data.results);
		})
	}




	return (
		<div className='App'>
			<div className='mydiv'>
				<span>Search</span>
				<input style={{widht:"60%"}} type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
				<button onClick={()=>fetchImages()}>send</button>
			</div>
			<div className='gallery'>
				{
					results.map((item)=>{
						return <img className="item" key={item.id} src={item.urls.regular}/>
					})
				}
			</div>
		</div>
	)
}

export default App;