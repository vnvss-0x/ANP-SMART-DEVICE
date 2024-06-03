import React from "react";
import PageComponent from "../components/PageComponent";
import ListDevices from "../components/DevicesList"; // Ensure the correct import path
import { Outlet } from "react-router-dom";

function Devices() {
    return (
        <>
            <PageComponent title="Devices"></PageComponent>
            {/* <ListDevices /> */}
            <Outlet />
        </>
    );
}

export default Devices;
