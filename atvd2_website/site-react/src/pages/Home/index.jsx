import {SectionBanner} from '../../componentes/SectionBanner';
import  {SectionDoramas} from '../../componentes/SectionDoramas';
import {SectionReasons} from '../../componentes/SectionReasons';
import {SectionSpecialists} from '../../componentes/SectionSpecialists';


export function HomePage() {
    return(
        <div id="home-page">
            <div className="container">

                <SectionBanner/>
                <SectionDoramas/>

                <SectionReasons />

                <SectionSpecialists />
            </div>
        </div>
    )
}