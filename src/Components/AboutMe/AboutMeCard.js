import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {MaterialCard} from '../UI/MaterialCard.js';
import {TextButton} from '../UI/TextButton.js';

export class AboutMeCard extends React.Component {
  render () {
    return (
      <MaterialCard className={styles.card} >
        <div className={css(styles.header)}>About Me</div>
        <p className={css(styles.p)}>
          I’m a Computer Engineering student at the University of Waterloo fascinated by future of self driving 
          cars. I've been both the path planning lead and simulation lead at 
          <a className={css(styles.link)} href='https://www.watonomous.ca/' target='__blank'> Watonomous </a>
          working on building a level 4 autonomous car by the end of a 4 year SAE student design challenge.
          When I’m not in class, I’m usually at a hackathon, reading about space or riding my Tesla
        </p>
        <div className={css(styles.centerWrapper)}>
          {/* <TextButton text='Resume' href='./JonathanSunResume.pdf' color='#fff' hoverColor='#ffd377' /> */}
        </div>
      </MaterialCard>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '550px',
    margin: '20px 20px 20px 20px',
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center'
  },

  header: {
    marginTop: '50px',
    fontSize: '40px'
  },

  p: {
    fontSize: '20px',
    marginLeft: '50px',
    marginRight: '50px',
    marginBottom: '0px'
  },

  link: {
    textDecoration: 'none',
    color: '#FFA500'
  },

  centerWrapper: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
