import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg "
          alt="footer-logo"
        />
        <div className="community-button">
          <button>JOIN THE COMMUNITY</button>
        </div>
      </div>
      <div className="right">
        <div className="title">
          THE BASICS
          <div>About TMDB</div>
          <div>Contact Us</div>
          <div>Support Forums</div>
          <div>API</div>
          <div>System Status</div>
        </div>
        <div>
          GET INVOLVED
          <div>Contribution Bible</div>
          <div>Add New Movie</div>
          <div>Add New TV Show</div>
        </div>
        <div>
          COMMUNITY
          <div>Guidelines</div>
          <div>Discussions</div>
          <div>Leaderboard</div>
          <div>Twitter</div>
        </div>
        <div>
          LEGAL
          <div>Terms of Use</div>
          <div>API Terms of Use</div>
          <div>Privacy Policy</div>
          <div>DMCA Takedown Request</div>
        </div>
      </div>
    </div>
  );
}
