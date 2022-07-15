import React from 'react';
import peopleBanner from '../assets/images/ssce-internal-banner.png';
import scrollDown from '../assets/images/scroll-wheel.svg';
import howToRegCandidates from '../assets/images/how-to-reg-candidates.svg';
import howToUploadCA3 from '../assets/images/how-to-upload-ca3.svg';
import howToCheckResults from '../assets/images/internal-how-to-check-results.svg';
import subject1 from '../assets/images/subject-1.svg';
import subject2 from '../assets/images/subject-2.svg';
import subject3 from '../assets/images/subject-3.svg';
import subject4 from '../assets/images/subject-4.svg';
import subject5 from '../assets/images/subject-5.svg';
import subject6 from '../assets/images/subject-6.svg';

const SSCEInternal: React.FC = () => {
  return (
    <section className="home-section internal">
      <div className="banner">
        <div className="container">
          <div className="banner-text internal">
            <h1>
              Senior School
              <br /> Certificate Examination
              <br /> (SSCE) Internal
            </h1>
            <p>
              The Senior Secondary School Certificate Examination (SSCE)
              Internal is the examination conducted for candidates in their
              final year of Senior Secondary School.
            </p>
            <div className="scroll-down-img">
              <img src={scrollDown} alt="Scroll Down" />
            </div>
          </div>
          <div className="banner-image">
            <img src={peopleBanner} alt="People" />
          </div>
        </div>
      </div>
      <div className="subjects">
        <div className="container">
          <div className="subject-instruction">
            <h2>
              76 subjects are usually examined in the SSCE Internal, which are
              categorized as follows
            </h2>
            <p>
              NOTE: All candidates must offer the 4 cross-cutting compulsory
              subjects. Candidates are to offer 3-4 subjects from their area of
              specialization and 1 elective outside their field of
              specialization provided the total number of subjects is not more
              than nine (9). The minimum number of subjects is eight (8)
            </p>
          </div>
          <div className="subject-cards">
            <div className="card">
              <img
                src={subject1}
                alt="Compulsory Cross-Cutting Core Subjects"
              />
              <p>Compulsory Cross-Cutting Core Subjects</p>
            </div>
            <div className="card">
              <img
                src={subject2}
                alt="Compulsory Cross-Cutting Core Subjects"
              />
              <p>Science &amp; Mathematics</p>
            </div>
            <div className="card">
              <img src={subject3} alt="Technology" />
              <p>Technology</p>
            </div>
            <div className="card">
              <img src={subject4} alt="Trade/Entrepreneurship" />
              <p>Trade/Entrepreneurship</p>
            </div>
            <div className="card">
              <img src={subject5} alt="Business Studies" />
              <p>Business Studies</p>
            </div>
            <div className="card">
              <img src={subject6} alt="Humanities" />
              <p>Humanities</p>
            </div>
          </div>
          <button className="button ssce-internal-primary mt-20">
            View more details
          </button>
        </div>
      </div>

      <div className="about-internal-exam-fees">
        <div className="container">
          <div className="flex-item">
            <h2>
              <span>Exam Fees</span>About our exam fees
            </h2>
            <p>
              Schools (centres) are to register their candidates using the
              offline application before logging online to the NECO registration
              portal www.neco.gov.ng to effect payment of registration and other
              mandatory fees before uploading the candidates' data.{' '}
            </p>
            <p>
              The minimum number of candidates to be registered by a school for
              SSCE Internal is twenty (20). Any centre registering less than 20
              candidates is deemed unviable.
            </p>
            <p>
              Note: Registration cards will no longer be used with effect from
              2019. Schools (Centres) are to come up with candidates list
              (Validation document) and take it to NECO state office for
              validation, NECO will allocate the number of candidates validated
              and then allocate quota to the centre. Centres will then log in to
              the NECO portal and pay the registration fees into the NECO TSA
              online using the payment options. Once payment is successful, the
              candidates' data can be uploaded from the offline app and only
              then will exam numbers be generated for the candidates.
            </p>
            <div className="banner-cta">
              <a href="./" className="button ssce-internal-primary">
                View more details
              </a>
              <a href="./" className="button ssce-internal-primary-stroke">
                Check your result
              </a>
            </div>
          </div>
          <div className="flex-item">
            <p>
              The following are the approved fees for the examination and other
              related items:
            </p>
            <ul>
              <li>
                <span>Registration fees</span>{' '}
                <span>17,800.00 Naira (Mandatory fee)</span>
              </li>
              <li>
                <span>Late registration</span>{' '}
                <span>12,000.00 Naira per candidate</span>
              </li>
              <li>
                <span>Photo album</span>{' '}
                <span>1,700.00 Naira per pair (Mandatory fee)</span>
              </li>
              <li>
                <span>Syllabus</span> <span>1,500.00 Naira per copy</span>
              </li>
              <li>
                <span>Four figure table</span>{' '}
                <span>250.00 Naira per copy</span>
              </li>
              <li>
                <span>Unviable centre fee</span>{' '}
                <span>
                  50,000.00 Naira (for centres that registered less than 20
                  candidates)
                </span>
              </li>
              <li>
                <span>Late submission of 3rd year CA fee</span>{' '}
                <span>
                  25,000.00 Naira (applies when centres submit their CA3 after
                  the window has closed)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flowchart-area">
        <div className="container">
          <h2 className="section-header">
            How to register your <br />
            candidates
          </h2>
          <div className="content">
            <img
              src={howToRegCandidates}
              className="how-to-reg-candidates"
              alt="How to register candidates"
            />
          </div>
        </div>
      </div>

      <div className="download">
        <div className="container">
          <div className="download-text">
            <h3>Download</h3>
            <p>
              We have organized a list of all relevant downloads. Please note
              that in order to upload your candidates' data to the NECO portal
              and obtain examination numbers, all centres must:
            </p>
            <ul>
              <li>Register candidates offline</li>
              <li>Validate candidates from NECO state office</li>
              <li>Purchase quota for the number of validated candidates</li>
              <li>
                Centre must be activated after candidate validation (centre not
                activated cannot make payment)
              </li>
              <li>Create/login into their online account</li>
              <li>
                Purchase quota for validated candidates (scratch cards are no
                longer used)
              </li>
              <li>Have a minimum of 20 candidates or pay unviable fee</li>
            </ul>
          </div>
          <div className="download-cards">
            <div className="download-card-item">
              <h4>DOWNLOAD THE 2022 OFFLINE REGISTRATION APP</h4>
              <p>
                You can either download the app directly using the download
                button below or use the 5-easy steps guide to install a light
                version (called PWA). Both methods work perfectly.
              </p>
              <div className="card-action">
                <button className="button white internal half">
                  Direct download
                </button>
                <button className="button white-stroke half">
                  Install using PWA
                </button>
              </div>
            </div>
            <div className="download-card-item">
              <h4>DOWNLOAD THE 2022 OFFLINE BIOMETRIC APP</h4>
              <p>
                Download the appropriate version of the biometric app for your
                operating system.
              </p>
              <div className="card-action">
                <button className="button white internal half">64 bit</button>
                <button className="button white-stroke half">32 bit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flowchart-area">
        <div className="container">
          <h2 className="section-header">
            How to upload continuous
            <br /> assessment (CA) 3
          </h2>
          <div className="content">
            <img
              src={howToUploadCA3}
              className="how-to-upload-ca3"
              alt="How to find registration points"
            />
          </div>
        </div>
      </div>

      <div className="requirements">
        <div className="container">
          <div className="flex-item">
            <div className="flex-item-bg one"></div>
            <p>
              As part of the requirements for the SSCE (Internal), all schools
              (centres) are to submit their candidates' third year continuous
              assessment scores (CA3)
            </p>
            <p>
              NECO will announce the date when centres can upload the CA3 from
              the offline registration app.{' '}
            </p>
            <p>
              The offline application will not allow you to add CA3 for the
              candidates, before the announcement of the date for the submission
              of CA3.
            </p>
          </div>
          <div className="flex-item">
            <div className="flex-item-bg two"></div>
            <p>
              As soon as the window for the upload is open, schools (centres)
              should fill in the CA3 using the offline application. Once this is
              done, the entries should be synchronized to the online
              application.
            </p>
            <p>
              If a centre does not send the CA3 within the stipulated period, a
              penalty of 25,000 Naira must be paid online from the centre's
              account before the CA3 can be uploaded.
            </p>
            <p>
              Results will not be released for schools (centres) that fail to
              upload the CA3 for their candidates.
            </p>
          </div>
        </div>
      </div>

      <div className="flowchart-area">
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

export default SSCEInternal;
