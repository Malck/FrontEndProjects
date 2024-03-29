//import galaxie from "../src/assets/fond-galaxie.jpg"
import nftimg from "../src/assets/Capture_nft.JPG"
import ratingimg from "../src/assets/Capture_rating.JPG"
import orderimg from "../src/assets/Capture_ordersummary.JPG"
import qrcodeimg from "../src/assets/Capture_qrcode.JPG"
import profilimg from "../src/assets/Capture_profil.JPG"
import runimg from "../src/assets/Capture_run.JPG"


const data = [
	{
		"id": "1a",
		"title": "NFT",
        "url": "https://nftcardfmentor.netlify.app",
		"cover": `${nftimg}`,

	},
	{
		"id": "2a",
		"title": "Run",
		"url": "https://run-maquette-to-site.netlify.app", 
		"cover": `${runimg}`,
        
	},
	{
		"id": "3a",
		"title": "Rating component",
        "url": "https://ratingcompfmentor.netlify.app",
		"cover": `${ratingimg}`,
	},
	{
		"id": "4a",
		"title": "Qr Code",
		"url": "https://qrcodefmentor.netlify.app", 
		"cover": `${qrcodeimg}`,
	},
	{
		"id": "5a",
		"title": "Profil card",
		"url": "https://profilfmentor.netlify.app", 
		"cover": `${profilimg}`,
	},
	{
		"id": "6a",
		"title": "Order summary",
		"url": "https://ordersummfmentor.netlify.app", 
		"cover": `${orderimg}`,
		
	}
	
]

export default data