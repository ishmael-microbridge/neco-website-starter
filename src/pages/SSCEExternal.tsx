import React from 'react';
import peopleBanner from '../assets/images/banner.png';
import ladyInMobile from '../assets/images/lady-in-mobile.svg';
import paymentFlowchart from '../assets/images/payment-flowchart.svg';
import biometricFlowchart from '../assets/images/biometric-flowchart.svg';
import howToPointRegPoint from '../assets/images/how-to-find-reg-point.svg';
import howToCheckResults from '../assets/images/how-to-check-results.svg';

const SSCEExternal: React.FC = () => {
  return (
    <section className="home-section">
      <div className="banner">
        <div className="container">
          <div className="banner-text">
            <h1>
              Senior School
              <br /> Certificate Examination
              <br /> (SSCE) External
            </h1>
            <p>
              This is the examination taken by candidates in their last stage of
              Secondary School Education. The SSCE is in two categories; one is
              for candidates in the third and final year of their Senior
              Secondary Education and it is called SSCE Internal while the
              second is SSCE External and is for candidates that are not in the
              school system, i.e. private candidates.
            </p>
            <p>
              Another core component of the mandate of the Council as espoused
              in the enabling law is the conduct of the Senior School
              Certificate Examination for External candidates.
            </p>
            <div className="banner-cta">
              <a href="./" className="button primary">
                Learn more
              </a>
              <a href="./" className="button primary-stroke">
                Nearest registration point
              </a>
            </div>
          </div>
          <div className="banner-image">
            <img src={peopleBanner} alt="People" />
          </div>
        </div>
      </div>
      <div className="cafe-operator-process">
        <div className="container">
          <div className="section-title">
            <h2>Cafe operators registration process</h2>
          </div>
          <div className="content">
            <img src={ladyInMobile} alt="Lady in mobile" />
            <div className="timeline">
              <div className="item">Create an account</div>
              <div className="item">Acitivate your account</div>
              <div className="item">Login</div>
              <div className="item">Download the offline app</div>
              <div className="item">Activate the offline app</div>
              <div className="item">Register candidate(s)</div>
              <div className="item">Upload record(s)</div>
              <div className="item">Print photo card</div>
            </div>
          </div>
        </div>
      </div>
      <div className="candidate-reg-process">
        <div className="container">
          <h2 className="section-header">
            Candidate <br />
            registration process
          </h2>
          <div className="content">
            <div className="step">
              <h3 className="step-no">1. Create account</h3>
              <div className="card">
                <p>
                  Create an account by visiting:{' '}
                  <a href="https://ssceexternal.neco.gov.ng/">
                    https://ssceexternal.neco.gov.ng/
                  </a>
                  and click the “Register here” link
                </p>
              </div>
            </div>
            <div className="step">
              <h3 className="step-no">2. Activate account</h3>
              <div className="card">
                <p>
                  An activation link will be sent. Follow the instructions sent
                  to your registered email to activate your account
                </p>
              </div>
            </div>
            <div className="step">
              <h3 className="step-no">3. Login</h3>
              <div className="card">
                <p>
                  Visit{' '}
                  <a href="https://ssceexternal.neco.gov.ng/">
                    https://ssceexternal.neco.gov.ng/
                  </a>{' '}
                  Use your registered email and password to login
                </p>
              </div>
            </div>
            <div className="step">
              <h3 className="step-no">4. Make payment</h3>
              <div className="card">
                <p>
                  Click on “Make payment” to purchase quota. If your payment is
                  successful, you will be issued an exam/ or four figure table
                  quota
                </p>
              </div>
            </div>
            <div className="step">
              <h3 className="step-no">5. Register candidate online</h3>
              <div className="card">
                <p>
                  Register a candidate by providing biodata and subjects you
                  wish to sit for.
                </p>
              </div>
            </div>
            <div className="step">
              <h3 className="step-no">6. Locate cafe operator</h3>
              <div className="card">
                <p>
                  To register, you have to visit one of the many operator
                  points. Visit{' '}
                  <a href="https://operator.neco.gov.ng">
                    https://operator.neco.gov.ng
                  </a>{' '}
                  to help find one near you.
                </p>
              </div>
            </div>
            <div className="step">
              <h3 className="step-no">7. Capture biometrics offline</h3>
              <div className="card">
                <p>
                  Go to the cafe nearest to you and capture fingerprint on the
                  offline app. Once uploaded, you will be issued a photocard
                  with your exam number, exam center and other details.
                </p>
              </div>
            </div>
            <div className="step">
              <h3 className="step-no">8. Print photo card</h3>
              <div className="card">
                <p>You can print photocard by:</p>
                <ol>
                  <li>Clicking the photocard link on the offline app</li>
                  <li>Clicking view photocard on the online app to print</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-and-online-process">
        <div className="container">
          <h2 className="section-header">
            Payment and online <br />
            registration process
          </h2>
          <div className="content">
            <img src={paymentFlowchart} alt="Payment Process Flowchart" />
          </div>
        </div>
      </div>
      <div className="about-exam-fees">
        <div className="container">
          <h3>About our exam fees</h3>
          <div className="about-exam-fees-content">
            <p>
              The <strong>NECO SSCE Ext</strong> Registration fee is:
            </p>
            <ol>
              <li>Seventeen Thousand Eight Hundred Naira (N17,800.00) only.</li>
              <li>Stamp Duty N50.00.</li>
            </ol>
            <p>
              All payments should be made into NECO Treasury Single Account
              (TSA) SSCE (E) NECO portal.
            </p>
            <p>
              <strong>Note:</strong> Candidates sitting for Mathematics and
              Physics are required to purchase Four Figure Table.
            </p>
          </div>
        </div>
      </div>
      <div className="payment-and-online-process">
        <div className="container">
          <h2 className="section-header">
            Biometric <br />
            registration process
          </h2>
          <div className="content">
            <img src={biometricFlowchart} alt="Biometric Process Flowchart" />
          </div>
        </div>
      </div>
      <div className="download">
        <div className="container">
          <div className="download-text">
            <h3>Download</h3>
            <p>
              In order to upload candidates' data to the NECO portal online and
              obtain examination numbers, a candidate must:
            </p>
            <ul>
              <li>Be registered</li>
              <li>
                Either have an online account or have it created for him/her by
                a cyber café
              </li>
              <li>
                Log in to the created account and purchase registration token
                (s) (scratch cards are no longer used for SSCE External
                registration)
              </li>
            </ul>

            <p>
              <strong>
                You can upload the list of centers under 'centers' on the
                homepage menu.
              </strong>
            </p>
          </div>
          <div className="download-cards">
            <div className="download-card-item">
              <h4>DOWNLOAD THE 2022 BIOMETRIC APP</h4>
              <p>
                If you understand the process of registering your candidates,
                you are ready to start capturing their biometric data!
              </p>
              <div className="card-action">
                <button className="button white half">64 bit</button>
                <button className="button white-stroke half">32 bit</button>
              </div>
            </div>
            <div className="download-card-item">
              <h4>BIOMETRIC APP USER GUIDE</h4>
              <p>
                For more information about the detailed offline app, click the
                button below to download the userguide
              </p>
              <div className="card-action">
                <button className="button white wide">Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-and-online-process">
        <div className="container">
          <h2 className="section-header">
            How to find registration <br /> points near you
          </h2>
          <div className="content">
            <img
              src={howToPointRegPoint}
              alt="How to find registration points"
            />
          </div>
        </div>
      </div>
      <div className="payment-and-online-process">
        <div className="container">
          <h2 className="section-header align-left">How to check results</h2>
          <div className="content">
            <img src={howToCheckResults} alt="How to check result" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSCEExternal;
