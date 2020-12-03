import React from "react";
import { motion } from "framer-motion";
import VehicleSpecsNav from "../VehicleSpecsNav";
import SpecsFirstPage from "./SpecsFirstPage";
import SpecsSecondPage from "./SpecsSecondPage";
import SS from "../../../Assets/img/SS.png";

import styles from "../../../CSS/VehicleSpecs.module.css";

const Starship = ({
    page,
    handleSpecPage,
    vehicleSelection,
    vehicleData,
    containerVariants,
}) => {
    const selectionData = vehicleData[0][3];

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
            {/* <VehicleInteriorData
                page={page}
                handleSpecPage={handleSpecPage}
                vehicleSelection={vehicleSelection}
                selectionData={selectionData}
            /> */}
            <div className={styles.vehicleImage}>
                <img src={SS} alt={`Starship vehicle`} />
            </div>
        </motion.section>
    );
};

export default Starship;
