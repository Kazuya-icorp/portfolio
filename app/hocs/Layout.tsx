import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'

function Layout(props) {
  return (
    <div>
    <Navbar/>
      <div>
      {props.children}
      </div>
    <Footer/>
    </div>
  );
}

export default Layout;