import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar />
            <Searchbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;