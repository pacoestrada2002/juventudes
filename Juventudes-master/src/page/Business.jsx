import Sidebar from '../components/sidebar';

import Image from '../components/Image';
import BusinessType from '../components/BusinessType';

function BusinessMap(){
    return(
        <div className="grid grid-cols-12 min-h-screen">
            <Image/>
            <BusinessType/>
        </div>
    )
}

export default BusinessMap;