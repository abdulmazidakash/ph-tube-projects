// console.log('index js file connected');

//1. fetch, load and show categories on html

//create loadCategories

const loadCategories = ()=>{
	fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
		.then((res) => res.json())
		.then((data) => displayCategories(data.categories))
		.catch((error) => console.log(error))

}

//create loadVideos 
const loadVideos = (videos) =>{
	fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
		.then((res) => res.json())
		.then((data) => displayVideos(data.videos))
		.catch((error) => console.log(error))
}


const displayVideos = (videos)=>{
	// console.log(videos);
	const videoContainer = document.getElementById('videos');

	videos.forEach((video)=>{

		// console.log(video);
		const card = document.createElement('div');
		card.classList = 'card card-compact';
		card.innerHTML = `
		<figure class="h-[200px]">
			<img
			src= ${video.thumbnail}
			class="h-full w-full object-cover"
			alt="Shoes" />
		</figure>
		<div class="card-body">

			<div class="card-actions justify-end">
			<button class="btn btn-primary">Buy Now</button>
			</div>
		</div>
		`;

		videoContainer.append(card);
	})
}
//create displayCategories
const displayCategories = (categories)=>{

	const categoryContainer = document.getElementById('categories');

	//add data in html
	// console.log(data);
	categories.forEach((item) =>{
		console.log(item);
		// create a button 
		 
		const button = document.createElement('button');
		button.classList = 'btn';
		button.innerText = item.category;

		categoryContainer.append(button);


	})
}

loadCategories();
loadVideos();