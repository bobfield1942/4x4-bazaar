import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCars,
} from './carsSlice';
import styles from './car.module.css';
import {Car} from './Car';

export function Cars() {
  const state = useSelector(selectCars);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Cars</h3>
      <span className={styles.value}>{state && state.cars && state.cars.length}</span>
      { state.cars && state.cars.map((c)=>{   
        return(     
          <div className={styles.row}>
              <Car car={c}/>
          </div>
        )
      }
     )
  }

    </div>
  );
}
