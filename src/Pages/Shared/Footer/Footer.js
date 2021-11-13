import React from 'react';
import { Link } from 'react-router-dom';
import"./Footer.css"

const Footer = () => {
    return (
        <div>
             <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          {/* <!-- Contact Info--> */}
          <section class="widget widget-light-skin">
            <h3 class="widget-title">Greninja Watch Store</h3>
            <p class="text-white">Phone: 01 77 11 7777</p>
            <ul class="list-unstyled text-sm text-white">
              <li><span class="opacity-50">Monday-Friday:</span>9.00 am - 8.00 pm</li>
              <li><span class="opacity-50">Saturday:</span>10.00 am - 6.00 pm</li>
            </ul>
          </section>
        </div>
        <div class="col-lg-3 col-md-6">
          {/* <!-- Mobile App Buttons--> */}
          <section class="widget widget-light-skin">
            <h3 class="widget-title">Our Mobile App</h3><a class="market-button apple-button mb-light-skin" href="#"><span class="mb-subtitle">Download on the</span><span class="mb-title">App Store</span></a><a class="market-button google-button mb-light-skin" href="#"><span class="mb-subtitle">Download on the</span><span class="mb-title">Google Play</span></a><a class="market-button windows-button mb-light-skin" href="#"><span class="mb-subtitle">Download on the</span><span class="mb-title">Windows Store</span></a>
          </section>
        </div>
        <div class="col-lg-3 col-md-6">
          {/* <!-- About Us--> */}
          <section class="widget widget-links widget-light-skin">
            <h3 class="widget-title">About Us</h3>
            <ul>
              <li><a href="#">About Shop</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our Blog</a></li>
            </ul>
          </section>
        </div>
        <div class="col-lg-3 col-md-6">
          {/* <!-- Account / Shipping Info--> */}
          <section class="widget widget-links widget-light-skin">
            <h3 class="widget-title">Account &amp; Shipping Info</h3>
            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Shipping Rates &amp; Policies</a></li>
              <li><a href="#">Refunds &amp; Replacements</a></li>
              <li><a href="#">Taxes</a></li>
              <li><a href="#">Delivery Info</a></li>
            </ul>
          </section>
        </div>
      </div>
      <hr class="hr-light mt-2 margin-bottom-2x"/>
      <div class="row">
        <div class="col-md-7 padding-bottom-1x"></div>
        <div class="col-md-5 padding-bottom-1x">
          <div class="margin-top-1x hidden-md-up"></div>
          {/* <!--Subscription--> */}
          <form class="subscribe-form" action="#" method="post" target="_blank" novalidate="">
            <div class="clearfix">
              <div class="input-group input-light">
                <input class="form-control" type="email" name="EMAIL" placeholder="Your e-mail"/><span class="input-group-addon"><i class="icon-mail"></i></span>
              </div>
              <Link class="btn btn-primary mt-2" to="/">Suscbribe</Link>
            </div><span class="form-text text-sm text-white opacity-50">Subscribe to our Shop to receive early discount offers, latest news, sales and promo information.</span>
          </form>
        </div>
      </div>
      {/* <!-- Copyright--> */}
      <p class="footer-copyright">&copy; All rights reserved.</p>
    </div>
  </footer>
        </div>
    );
};

export default Footer;