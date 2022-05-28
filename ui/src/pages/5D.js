import Header from "../components/Header"
import Footer from "../components/Footer"

function FiveD() {
    
    return (
        <div>
            <Header splashId={'splash4'} />
            <div className='bodyContainer'>
                <div className="body">
                    <h1>If you can dodge a wrench...</h1>
                    <p>Learn about the Five D's of Dodgeball in this educational video.</p>
                    <div className="videoPlayer">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/18ASBsQfXnw" 
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FiveD;