import HeroComp from "./HeroComp"
import RoomsComp from "./RoomsComp"
import AmenitiesComp from "./AmenitiesComp"
import ContactComp from "./ContactComp"
import { ToastContainer } from "react-toastify"
import FloatingSocialButtons from "./SocialIconComp"

function Home() {
    return (
        <>
            <ToastContainer />
            <main>
                <HeroComp />
                <RoomsComp />
                <AmenitiesComp />
                <FloatingSocialButtons
                    position="left"
                    facebook="https://www.facebook.com/profile.php?id=61550283155207"
                    instagram="https://www.instagram.com/whisperingvalleyresort/"
                    youtube="https://www.youtube.com/watch?v=iSBXoPu9qD8"
                    whatsapp={{
                        phone: "919876543210",
                        message: "Hello from your website!"
                    }}
                    showLabels={true}
                />
                <ContactComp />
            </main>
        </>
    )
}

export default Home
