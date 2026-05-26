import foodsSvg from "../assets/food.svg"
import othersSvg from "../assets/others.svg"
import servicesSvg from "../assets/services.svg"
import transportsSvg from "../assets/transport.svg"
import accomodationsSvg from "../assets/accommodation.svg"

export const CATEGORIES = {
    foods: {
        name: "Alimentação",
        icon: foodsSvg
    },
    others: {
        name: "Outros",
        icon: othersSvg
    },
    services: {
        name: "Serviços",
        icon: servicesSvg
    },
    transports: {
        name: "Transportes",
        icon: transportsSvg
    },
    accomodations: {
        name: "Acomodações",
        icon: accomodationsSvg
    }
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>