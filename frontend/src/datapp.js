//import galaxie from "../src/assets/fond-galaxie.jpg"
import weatherimg from "../src/assets/portfolioWeather.JPG"
import pokemonimg from "../src/assets/Capture_pokemon.JPG"
import interactiveimg from "../src/assets/Capture_interactive.JPG"
import cardcorvetteimg from "../src/assets/Capture_card_corvette.JPG"
import accordeonimg from "../src/assets/Capture_img_move.JPG"


const datapp = [
	{
		"id": "1",
		"title": "Weather",
		"url": "https://reactweatherappli.netlify.app", 
		"cover": `${weatherimg}`,
	},
    {
		"id": "2",
		"title": "Pokemon randomizer",
		"url": "https://pokerandomizer.netlify.app", 
		"cover": `${pokemonimg}`,
	},
    {
		"id": "3",
		"title": "Interactive images",
		"url": "https://clickslide.netlify.app", 
		"cover": `${interactiveimg}`,
	},
    {
		"id": "4",
		"title": "Card effect",
		"url": "https://cardeffectglow.netlify.app/", 
		"cover": `${cardcorvetteimg}`,
	},
    {
		"id": "5",
		"title": "Accordéon animé",
		"url": "https://accordeon-gsap.netlify.app/", 
		"cover": `${accordeonimg}`,
	}
	
	
	
]

export default datapp