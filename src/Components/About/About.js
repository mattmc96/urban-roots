import React from 'react'
import { useStyles } from './useStyles'

const AboutUs = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.first}>
        <h2 className={classes.title}>About Us</h2>
        <span className={classes.subtitle}>
          Where plants are our inspiration
        </span>
      </div>
      <div className={classes.second}>
        <div className={classes.text}>
          <h2 className={classes.secondTitle}>
            We take <span className={classes.flowers}> plants </span> personally
            & we bring you happiness
          </h2>
          <p className={classes.secondText}>
            Our goal is to provide a place where all generations can find common
            ground with a love for plants. We specialize in low maintenance
            tropical houseplants. We strive to provide the same experience
            through shipping our products by not only bringing something green
            into everyones home but also providing an interactive experience.
          </p>
          <img
            src="https://fontmeme.com/permalink/201124/57ce50e8562b4c6d89e8c321c891f798.png"
            alt="logo"
          />
        </div>
        <div className={classes.imgBlock} />
      </div>
      <div className={classes.third}>
        <h2 className={classes.thirdTitle}>Plants Experts</h2>
        <span className={classes.thirdSubtitle}>
          A perfect blend of creativity, energy, communication, happiness and
          love. Let us arrange a smile for you.
        </span>
        <div className={classes.expert}>
          <div>
            <img
              className={classes.expertImg}
              src="https://images.unsplash.com/photo-1534945773093-1119ae5684ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVufGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>CRYSTAL BROOKS</h3>
            <span className={classes.expertName}>Florist</span>
          </div>
          <div>
            <img
              className={classes.expertImg}
              src="https://images.unsplash.com/photo-1534945773093-1119ae5684ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVufGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>SHIRLEY HARRIS</h3>
            <span className={classes.expertName}>Manager</span>
          </div>
          <div>
            <img
              className={classes.expertImg}
              src="https://images.unsplash.com/photo-1534945773093-1119ae5684ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVufGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>BEVERLY CLARK</h3>
            <span className={classes.expertName}>Florist</span>
          </div>
          <div>
            <img
              className={classes.expertImg}
              src="https://images.unsplash.com/photo-1534945773093-1119ae5684ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVufGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              width="250px"
            />
            <h3 className={classes.expertTitle}>AMANDA WATKINS</h3>
            <span className={classes.expertName}>Florist</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
