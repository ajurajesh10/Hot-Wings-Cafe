import { GiPartyFlags } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { GiCrackedBallDunk } from "react-icons/gi";

const CateringServicesList = [
    {
        id: 1,
        cateringTitle: "Wedding Caterers",
        cateringDescription: "We understand that your special day deserves nothing but the best. We will plan the perfect menu for your big & great day.",
        cateringIcon: <GiPartyFlags />
    },
    {
        id: 2,
        cateringTitle: "Corporate Catering",
        cateringDescription: "We understand the importance of seamlessly blending exceptional cuisine with professional service for your corporate service.",
        cateringIcon: <FaAcquisitionsIncorporated />
    },
    {
        id: 3,
        cateringTitle: "Industrial Catering",
        cateringDescription: "With a focus on efficiency, safety & satisfying appetites, we cater to the unique dinning needs of industrial workers and organizations.",
        cateringIcon: <GiForkKnifeSpoon />
    },
    {
        id: 4,
        cateringTitle: "Other Services",
        cateringDescription: "Weather you're planning any special events, we decided to serve delicious food & impeccable service that exceed your expectations.",
        cateringIcon: <GiCrackedBallDunk />
    },

]

export default CateringServicesList