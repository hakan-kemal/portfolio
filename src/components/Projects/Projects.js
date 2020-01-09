import React from 'react';

export default function Projects() {
  return (
    <div>
      <h4 style={{ marginTop: '100px' }}>
        Projects page - Designed and coded by Hakan Çuhadar, 2020. All rights reserved.
      </h4>
      <ul>
        <li>Hackathon project; must be updated and improved actually</li>
        <li>Real world project; leave as is</li>
        <li>
          Individual assignment; Project is private and remains private, but must update and improve
          readme to show something
        </li>
        <li>Game project; leave code as is, but must update and improve readme</li>
      </ul>
      <p>
        Layout should be like cards or image carousel kinda thing. Clicking on a project should open
        a new page with a short paragraph with project details and a short paragraph with used
        technologies. There should be links to GitHub, Netlify and/or Heroku
      </p>
    </div>
  );
}
