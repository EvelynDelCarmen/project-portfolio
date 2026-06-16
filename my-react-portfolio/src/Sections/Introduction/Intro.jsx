import "./intro.css";
import { CircleImage } from "../../ReusableComponents/Images/CircleImage";
import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";
import { NormalText } from "../../ReusableComponents/Texts/NormalText";
import { SmallSubTitle } from "../../ReusableComponents/Texts/SmallSubTitle"
import evelynImage from "../../assets/cvimage/evelyn.png";
import { ArrowDownAnimation } from "../../ReusableComponents/Animation/Arrow/ArrowDownAnimation";

const introText = "Fueled by her love for visual storytelling, Evelyn approaches every step of the creative process with curiosity and a keen eye for detail. With a degree in Art Direction, Photography, and Fullstack Web Development, this website serves as a showcase of her coding skills through thoughtfully built, user-friendly applications."

export const Intro = () => {
    return (
        <header>
            <section className="profile-image">
                <CircleImage className="profile-img" src={evelynImage} alt="evelyn profile image" />
            </section>
            <section className="headings">
                <SmallSubTitle className="subtitle" text={"This is Evelyn Del Carmen"} />
                <MainTitle className="maintitle" text={"Welcome,"} />
                <MainTitle className="maintitle" text={"My Tech Portfolio"} />
            </section>
            <section className="intro-text">
                <NormalText className="normaltext" text={introText} />
            </section>
            <div className="arrow-container">
                <ArrowDownAnimation className="arrow-down" aria-label="this is a arrow down" />
            </div>
        </header>
    );
};
