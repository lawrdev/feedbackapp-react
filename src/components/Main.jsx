import { Route, Routes } from 'react-router-dom'
import Header from "./Header"
import FeedbackList from "./FeedbackList"
import FeedbackStats from "./FeedbackStats"
import FeedbackForm from './FeedbackForm'
import AboutIconLink from './AboutIconLink'
import AboutPage from './pages/AboutPage'

const Main = () => {
    return (
        <main>
            <Header title={'Feedback UI'} />
            <div className="px-3">
                <div className="container mx-auto">
                    <Routes>
                        <Route
                            path="/"
                            element={(<div>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </div>)} />
                        <Route
                            path="/about"
                            element={<AboutPage />} />
                    </Routes>
                </div>

                {/* about icon */}
                <div className="fixed bottom-0 right-0 -translate-x-1/2 -translate-y-1/2">
                    <AboutIconLink />
                </div>
            </div>
        </main>
    );
}
 
export default Main;