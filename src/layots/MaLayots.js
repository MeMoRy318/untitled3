import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MaLayots = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MaLayots};