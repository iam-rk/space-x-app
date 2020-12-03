import React from "react";
import { motion } from "framer-motion";
import VehicleSpecsNav from "../VehicleSpecsNav";
import SpecsFirstPage from "./SpecsFirstPage";
import SpecsSecondPage from "./SpecsSecondPage";
import F9 from "../../../Assets/img/F9.png";
import { useLocation } from "react-router-dom";

import styles from "../../../CSS/VehicleSpecs.module.css";
const Falcon9 = ({
    page,
    handleSpecPage,
    vehicleSelection,
    vehicleData,
    containerVariants,
}) => {
    let selectionData = vehicleData[0][1];
    const location = useLocation();
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.vehicleSpecs}
        >
            <div className={styles.specs}>
                <div>
                    <div className={styles.vehicleTitle}>
                        <h3>{selectionData.name.toUpperCase()}</h3>
                    </div>
                    <div className={styles.title}>
                        <h4>OVERVIEW</h4>
                    </div>
                </div>
                {page === 1 ? (
                    <SpecsFirstPage
                        selectionData={selectionData}
                        vehicleSelection={vehicleSelection}
                    />
                ) : (
                    <SpecsSecondPage
                        selectionData={selectionData}
                        vehicleSelection={vehicleSelection}
                    />
                )}
                <VehicleSpecsNav page={page} handleSpecPage={handleSpecPage} />
            </div>

            <div className={styles.vehicleImage}>
                <img src={F9} alt={`Falcon 9 vehicle`} />
            </div>
        </motion.section>
    );
};

export default Falcon9;
