import React from 'react'

function PowerBipad() {
  return (
    <div>
        <div>
            
            <div className='block md:hidden '>
                <h1>Power BI: Covid Research 20220226m</h1>
                <iframe 
                    className='h-screen'
                    title="CovidResearch_20220226_Mobile" 
                    width="380" 
                    // src="https://app.powerbi.com/view?r=eyJrIjoiZmFlZjk1OTgtNzA2ZS00ZDRiLTljN2ItNWZmOGVmMjhlZDdmIiwidCI6IjFkMmI5N2Y2LTMyMjgtNDFkZC1iYzk1LTQwZDE2ODU5MGU2NSIsImMiOjN9" 
                    frameBorder={0}
                    allowFullScreen={true}>
                </iframe>

            </div>
        
            <div className='hidden md:block'>
                <h1>Power BI Qlik IFrame: Covid Research</h1>
                {/* <iframe className='w-full h-[80vh]'
                    title="CovidResearch_20220226 - Cases" 
                    src="https://o5vinkn07und8n1.us.qlikcloud.com/single/?appid=269e18ce-5491-400a-b984-49f317b27ffc&sheet=bbace998-094f-44eb-a6f5-9421bdd86866&theme=horizon&opt=ctxmenu" >
                </iframe> */}


                <iframe className=' h-screen'
                    title="CovidResearch_20220226 - Cases" 
                    width="100%"  
                    src="https://app.powerbi.com/view?r=eyJrIjoiMDU0MWY2M2UtMGM4Yy00MWNjLTg2ZGYtYzRiNGJlODZjOTEyIiwidCI6IjFkMmI5N2Y2LTMyMjgtNDFkZC1iYzk1LTQwZDE2ODU5MGU2NSIsImMiOjN9&pageName=ReportSection891e3902051cad35d799" 
                    // src="https://app.powerbi.com/view?r=eyJrIjoiMDU0MWY2M2UtMGM4Yy00MWNjLTg2ZGYtYzRiNGJlODZjOTEyIiwidCI6IjFkMmI5N2Y2LTMyMjgtNDFkZC1iYzk1LTQwZDE2ODU5MGU2NSIsImMiOjN9" 
                    frameBorder={0}
                    allowFullScreen={true}>
                </iframe>

            </div>

            

        </div>
    </div>
  )
}

export default PowerBipad