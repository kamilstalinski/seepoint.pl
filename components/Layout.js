import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Footer from './Footer';

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