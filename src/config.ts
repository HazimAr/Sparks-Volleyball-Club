// google analytics mearsurement id
const GA_TRACKING_ID = "G-X11P4GZF1E";
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_TEST = process.env.NODE_ENV === "test";
const IS_BROWSER = typeof window !== "undefined";

const COMPANY_INFO = {
	name: "Sparks Volleyball Club",
	email: "SparksVolleyballClub@gmail.com",
	phone: "(702) 502-9462",
	address1: "3778 W. Cheyenne Ave STE 120, ",
	address2: "N. Las Vegas, NV 8903",
};
const EMAIL_LIST =
	"hazimarafa69@gmail.com, sparksvolleyballclub@gmail.com, nevadavolleyballcenter@gmail.com";

const COMPANY_SOCIALS = {
	instagram: "https://www.instagram.com/sparks_vbc_lv/",
	facebook: "https://www.facebook.com/SparksVBCLV",
	youtube: "https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A",
};

export {
	COMPANY_SOCIALS,
	GA_TRACKING_ID,
	IS_PRODUCTION,
	IS_TEST,
	IS_BROWSER,
	COMPANY_INFO,
	EMAIL_LIST,
};
