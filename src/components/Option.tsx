import React ,{useState} from 'react'
import styles from './Option.module.css'
import { Link } from 'react-router-dom';

interface OptionProps {
    title: string;
    amount: number;
    additionalInformation:string;
    path:string
  }
const Option = (props:OptionProps) => {

    const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const handleIconClick = () => {
    setIsParagraphVisible((prevState) => !prevState);
  };
  return (
    <li>
        <div className={styles.option_item}>
        <div className={styles.option__description}>
          <h2>{props.title}</h2>
          <div className={styles.ai}>
         <Link to ={props.path} className={styles.option_link}><a className={styles.option__price}>${props.amount} + HST</a></Link>
          
          <button onClick={handleIconClick} className={styles.icon}>{isParagraphVisible?<span>&ndash;</span> : <span>+</span>}</button>
          </div>
        </div>
        </div>
       { isParagraphVisible && <p>This program has 3 components. 1. Classroom 2. Drive Online home assignment and 3. In-Car training. Upon successful completion it may save you on auto insurance and allows you to go for G2 license in 8 months time.</p>}
    </li>
  )
}

export default Option