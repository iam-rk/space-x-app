import React from "react";
import { motion } from "framer-motion";
import styles from "../../CSS/HomeDescription.module.css";

const HomeDescription = ({ descriptionVariants, open }) => {
    return (
        <motion.div
            class={styles.homeDescriptionContainer}
            variants={descriptionVariants}
            initial="hidden"
            animate={open ? "visible" : "hidden"}
        >
            <div class={styles.homeDescription}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                    harum voluptatum consequatur sunt recusandae debitis
                    temporibus totam laboriosam facilis qui. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Accusamus, ipsa.
                </p>
            </div>
            <div class={styles.homeTable}>
                <table class={styles.table}>
                    <tbody>
                        <tr>
                            <td>CORE</td>
                            <td>BLOCK 4</td>
                        </tr>
                        <tr>
                            <td>CORE SERIAL</td>
                            <td>B1028</td>
                        </tr>
                        <tr>
                            <td>REUSED</td>
                            <td>TRUE</td>
                        </tr>
                        <tr>
                            <td>STATIC FIRE</td>
                            <td>1 MAR 2018</td>
                        </tr>
                        <tr>
                            <td>PAYLOAD ORBIT</td>
                            <td>LOW-EARTH</td>
                        </tr>
                        <tr>
                            <td>LANDING SITE</td>
                            <td>LZ-1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default HomeDescription;