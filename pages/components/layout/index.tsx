import Header from './header';
import Footer from './footer';
import { Box } from '@chakra-ui/react';

const Layout = (props : any) => {
    return (
        <Box className="bg-primary min-h-screen w-full overflow-x-hidden">
            <Header />
                {props.children}
            <Footer/>
        </Box>
    );
}

export default Layout;
