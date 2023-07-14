import styles from "./CarouselCategory.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";

interface CarouselPropTypes {
  id: string;
}
// essa props é um workaround ja que no momento os dois carousel estao
// sendo renderizados na mesma pagina
// apos a implementacao de rotas, nao existiram mais 2 carousels IDENTICOS
// numa mesma pagina
// IDs sao unicos

const CarouselCategory = ({ id }: CarouselPropTypes) => {
  return (
    <Fragment>
      <motion.div className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -100 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className={styles.item}>
            <input className={styles.radio} type="radio" name="category" id={`${id}-headphone`} />
            <label className={styles.category} htmlFor={`${id}-headphone`}>
              Headphone
            </label>
          </motion.div>

          <motion.div className={styles.item}>
            <input className={styles.radio} type="radio" name="category" id={`${id}-headband`} />
            <label className={styles.category} htmlFor={`${id}-headband`}>
              Headband
            </label>
          </motion.div>

          <motion.div className={styles.item}>
            <input className={styles.radio} type="radio" name="category" id={`${id}-earpads`} />
            <label className={styles.category} htmlFor={`${id}-earpads`}>
              Earpads
            </label>
          </motion.div>

          <motion.div className={styles.item}>
            <input className={styles.radio} type="radio" name="category" id={`${id}-earpads`} />
            <label className={styles.category} htmlFor={`${id}-earpads`}>
              Cable
            </label>
          </motion.div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselCategory;
