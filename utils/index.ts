

export async function fetchCars(){
 const headers  = {
    'x-rapidapi-key': 'e628d3acd8msh0380c473be2bafdp10bc27jsn82dc7a5b59d0',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
 }

 const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{headers: headers,});

const result =  await response.json();

return result;

}