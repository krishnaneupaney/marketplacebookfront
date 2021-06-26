import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';


import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
          <Button component={Link} to="/about" variant="contained" color="primary">About US</Button>
          </section>       
        </section>

        <section className="footer-info-center">
          <section className="footer-info__email">
          <Button component={Link} to="/contact" variant="contained" color="orange">Contact Form</Button>
          </section>
          <section className="footer-info__terms">
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
          <Button component={Link} to="/auth" variant="contained" color="primary">Add Yours</Button>
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
      <Button variant="contained" color="primary" font-style="serif">Copyright 2021   <br /> All right reserver | contact legal@axcessbookreview.com for legal concern  | feedback @axcessbookreview@gmail.com</Button>
    </section>
  )

}

export default Footer;
