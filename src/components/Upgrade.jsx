import React from 'react';

const Upgrade = () => {
  return (
    <div>
      <h1>Upgrade</h1>
      <p>
        Want to see this product expanded on? Let me know on Twitter!
        <div>
          <h4>Possible Features:</h4>
          <div>
            <div>
              <h2>Push Notifications</h2>
              <p>
                Recieve notifications on your computer whether the website is
                open or not.
              </p>
            </div>
            <div>
              <h2>Real Time Updates</h2>
              <p>
                The resource list is updated automatically without having to
                refresh the page.
              </p>
            </div>
            <div>
              <h2>Edit Check Status Frequency</h2>
              <p>
                Currently the server checks the status of a resource every 30
                minutes. This can be made user controlled.
              </p>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Upgrade;
