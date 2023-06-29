import Sidebar from '../components/sidebar';
import MapContent from '../components/MapContent'
import Image from '../components/Image';

function BusinessMap(){
    return(
        <div className="grid grid-cols-12 h-11/12   min-h-screen">
            <Image/>
            <Sidebar/>
            <MapContent/>
        </div>
    )
}

export default BusinessMap;