import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import carimage from '../../images/toyota-hilux-1986.jpg'; 
import { selectCars, remove, add} from './carsSlice'
import styles from './car.module.css';

export function AddCar() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  

  return (
    <div key={car.make}>
      {console.log(car.car)}
      <div className={styles.row}>
       <img height="120" src={carimage} alt="this is car image" />
       <span>{car.car.make}</span>
       <span>{car.car.model}</span>
       <span>{car.car.price}</span>
       </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Add Car"
          onClick={() => dispatch(add(car))}
        >
          Add Car To Listing
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          /*onClick={() => dispatch(addAsync(addAsync))}*/
        
        >
          Add Async
        </button>
    
      </div>
    </div>
  );
}
