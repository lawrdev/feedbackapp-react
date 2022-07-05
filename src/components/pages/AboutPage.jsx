import { Link } from 'react-router-dom'
import Card from "../shared/Card"
import { BiArrowBack } from 'react-icons/bi'

const AboutPage = () => {
    return (
        <div className="about-page mt-5">
            <div className="max-w-lg mx-auto">
                <Card>
                    <h2
                        className="font-bold text-center pt-5">
                        About page</h2>
                    <p
                        className="text-center">
                        This a feedback app. Built for customers to rate their experince using a product and suggest ways to improve</p>
                    <div
                        className="text-end mr-4 pb-3 text-blue-400 text-sm">
                        <Link to="/">
                            <span className="inline-block mr-2">
                                <BiArrowBack size={14} />
                            </span>
                            return to Home
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default AboutPage;