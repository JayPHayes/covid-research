import React, {useState, useEffect} from 'react';

import AppContext from './AppContext';

import embed from '../api/configure';
import connect from '../api/connect';


// const nblConnect = async () => {
//     const app = await connect({
//         url: process.env.REACT_APP_QLIK_URL, //Tenant URL
//         webIntegrationId: process.env.REACT_APP_QLIK_WEBID, // qlik-web-intergration-id
//         appId: process.env.REACT_APP_QLIK_APPID, // app GUID
//     });

//     return embed(app);
// }

const nblConnect = async () => {
    const app = await connect({
        url: 'https://o5vinkn07und8n1.us.qlikcloud.com', //Tenant URL
        webIntegrationId: 'zXRZMfzOMo4qyRdp049bxqT2si5pb1zA', // qlik-web-intergration-id
        appId: '269e18ce-5491-400a-b984-49f317b27ffc', // app GUID
    });

    return embed(app);
}




const AppProvider = ({children}) => {

    //useState
    const [nbl, setNbl] = useState(null); 

    //Setting state
    const funcSetNbl = async () => {
        const tmpNbl = await nblConnect();
        console.log(tmpNbl);
        setNbl(tmpNbl);
    }

    //useEffect
    useEffect(() => {
        funcSetNbl();
    }, []);

    return (
        <AppContext.Provider value={{nbl}}>
            {children}
        </AppContext.Provider>
    );
}


export default AppProvider;