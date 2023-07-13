import Header from './header';
import Footer from './footer';

const Layout = (props : any) => {
    return (
        <div className="bg-primary">
            <Header/>
                {props.children}
            <Footer/>
        </div>
    );
}

export default Layout;