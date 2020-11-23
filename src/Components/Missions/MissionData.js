import React from "react";
import styles from "../../CSS/Missions.module.css";

// const outcome = (outcome) => {
//     return outcome === false ? "FAILURE" : "SUCCESS";
// };

const MissionData = ({ launchData, outcome, unixConverter }) => {
    return (
        <table className={styles.missionTable}>
            <tbody>
                <tr>
                    <td>FLIGHT NO</td>
                    <td>VEHICLE</td>
                    <td>DATE</td>
                    <td>LAUNCH SITE</td>
                    <td>PAYLOAD</td>
                    <td>CUSTOMER</td>
                    <td>OUTCOME</td>
                </tr>

                {launchData.map((data) => (
                    <tr>
                        <td>{data.flight_number}</td>
                        <td>{data.rocket.rocket_name}</td>
                        <td>{unixConverter(data.launch_date_unix)}</td>
                        <td>{data.launch_site.site_name}</td>
                        <td>
                            {data.rocket.second_stage.payloads[0].payload_id}
                        </td>
                        <td>
                            {data.rocket.second_stage.payloads[0].customers[0]}
                        </td>
                        <td>{outcome(data.launch_success)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MissionData;