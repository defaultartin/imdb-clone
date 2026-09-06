// Trailers
const trailers = [
	{
		backdrop: "https://variety.com/wp-content/uploads/2026/07/doom.jpg",
		poster: "https://m.media-amazon.com/images/M/MV5BNGEwYWZkN2UtOTQ5Mi00MGQzLWEzNjYtMWMyNDBkMTkzMWNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		title: "Get a Special Look at 'Avengers: Doomsday'",
		subtitle: "Watch the D23 Exclusive",
		duration: "2:09"
	},
	{
		backdrop: "https://m.media-amazon.com/images/M/MV5BMDkzNjhkMWYtZDExOS00N2YyLWJjNzgtNGI5N2FlNzYwN2Y4XkEyXkFqcGc@._V1_.jpg",
		poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXHBq3aLRG81QccN0w6NSvaawTGqwbOEcHJqD1uXDqUaD43zV7UaQ6HvF&s=10",
		title: "VisionQuest",
		subtitle: "Watch the Trailer",
		duration: "2:04"
	},
	{
		backdrop: "https://m.media-amazon.com/images/M/MV5BMTZiZDZhNTUtMTQ1Zi00YTI4LThkMDUtYmY1MWI1OGI4YmJiXkEyXkFqcGc@._V1_.jpg",
		poster: "https://m.media-amazon.com/images/M/MV5BMWEyNDM2ZmQtMmFkNi00MTQ1LTk1MjItMzdlZGJlYmIyYzZlXkEyXkFqcGc@._V1_.jpg",
		title: "'Avengers Endgame: Encore'",
		subtitle: "Watch the Trailer",
		duration: "1:36"
	},
	{
		backdrop: "https://m.media-amazon.com/images/M/MV5BZDYyZWE2MTYtOGIzNC00M2RmLTk1YjYtY2RjZjNkMmY3YjUxXkEyXkFqcGc@._V1_.jpg",
		poster: "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		title: "DUNE",
		subtitle: "Watch the Trailer",
		duration: "2:30"
	}
]

let currentSlideIndex = 0;

function changeTrailer() {
	const trailer = trailers[currentSlideIndex];

	document.querySelector(".backdrop").src = trailer.backdrop;
	document.querySelector(".poster").src = trailer.poster;
	document.querySelector(".trailer-title").textContent = trailer.title;
	document.querySelector(".trailer-subtitle").textContent = trailer.subtitle;
	document.querySelector(".duration").textContent = trailer.duration;

	const upNextItems = document.querySelectorAll(".up-next-item");

	upNextItems.forEach((item, position) => {
		const trailerIndex = (currentSlideIndex + position + 1) % trailers.length;

		const trailer = trailers[trailerIndex];

		item.dataset.index = trailerIndex;
		item.querySelector("img").src = trailer.poster;
		item.querySelector(".runtime").textContent = trailer.duration;
		item.querySelector(".item-title").textContent = trailer.title;
		item.querySelector(".item-desc").textContent = trailer.subtitle;
	});
}

document.querySelector(".right").addEventListener("click", () => {
	currentSlideIndex++;
	if (currentSlideIndex >= trailers.length) {
		currentSlideIndex = 0;
	}
	changeTrailer();
});

document.querySelector(".left").addEventListener("click", () => {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = trailers.length - 1;
	}
	changeTrailer();
});
