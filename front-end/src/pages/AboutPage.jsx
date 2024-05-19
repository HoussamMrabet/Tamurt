import ImageGride from "../components/ImageGride"
import Title from "../components/Title"
import Title2 from "../components/Title2"
import Image from '../components/Image';
import Footer from '../components/Footer';
import FirstAbout from "../components/FirstAbout";

function AboutPage() {
    return (<>
        <FirstAbout/>
        <div className=" my-24">
            <Title/>
            <ImageGride/>
            <Title2/>
            <Image/>
            <Footer/>
        </div>
        </>
            )
}

export default AboutPage