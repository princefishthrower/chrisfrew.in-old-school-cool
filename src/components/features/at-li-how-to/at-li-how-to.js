require('../assets/css/monokai.css');
require('../assets/css/style.css');
require('..fontawesome.css');

class AtLiHowTo extends React.Component {
  render() {
    return (
      <div>
        <pi title="Hosted via Raspberry Pi + Apache2" target="_blank" width={120}><img src="img/pinewnew.png" classname="pi" /></pi>
        <div classname="container-info">
          <a name="top-mobile" />
          <div classname="info-main">
            <div classname="info__headshot"><img classname="info__headshot-img" src="img/triflags.jpg" /></div>
            <div classname="info__elevator">
              <h1 classname="info__elevator-text">
                <div classname="large">
                  Want to be an American living in Austria and working in Liechtenstein?
                </div>
                <div classname="medium">
                  A <span classname="highlight">how-to guide</span> on applying for:
                </div>
                <div classname="medium">
                  - An Austrian <span classname="highlight">residence permit</span><br />
                  - A Liechtensteiner <span classname="highlight">work permit</span>
                </div>
              </h1>
            </div>
          </div>
          <div classname="info-footer">
            <div classname="info-footer__social">
              <a href="https://github.com/frewinchristopher" target="_blank" classname="fa fa-github info-footer__social-icon--github" />
              <a href="https://bitbucket.org/guitarshreder07" target="_blank" classname="fa fa-bitbucket info-footer__social-icon--github" />
              <a href="https://www.linkedin.com/in/frewinchristopher" target="_blank" classname="fa fa-linkedin info-footer__social-icon--linkedin" />
            </div>
          </div>
        </div>
        <div classname="container-main">
          <a name="top-desktop" />
          <div classname="main__container-experience">
            <div classname="main__tag">The Task</div>
            <p classname="main__copy">
              This process took me over two months. I want to share first how I did it, and then how I <i>should</i> have done it in hopes to save others time if they should wish to attempt tackling this debauchery of paperwork and bureaucracy.*
              <br />
              <br />
              *Trust me when I say I'm not a legal counsel so always take my words with a grain of salt. However, as of February 2016, these were the steps I took to get started working.
            </p>
          </div>
          <div classname="main__container-experience">
            <div classname="main__tag">Overview</div>
            <p classname="main__copy">
              When you plan on living in Austria for longer than three months, and then longer than sixth months (there are some other special visas such as a student visa, artist visa which last for sixth months), then the govenrment requires you to apply for a <span classname="highlightBright">Niedlerlassungsbewilligung</span>, a specific type of <span classname="highlightBright">Aufenhaltstitel</span>, or residence permit, very similiar to a green card in the US. Then, Liechtenstein requires that you have <span classname="highlightBright">Aufenhaltstitel</span>, or a working permit to legally work in Liechtenstein. Your company should help you with this process, and, since a cross border working permit for Liechtenstein is very common, the application is relatively simple compared to the <span classname="highlightBright">Niedlerlassungsbewilligung</span>.
            </p>
          </div>
          <div classname="main__container-experience">
            <div classname="main__tag">Legal Entities</div>
            <p classname="main__copy">
              There are four legal entities you are going to need to work with to get everything to jive:
              <br />
              <br />
              1. Perhaps most important, is the <span classname="highlightBright">Bezirkshauptmannschaft</span>, or "BH" for short in German, or in English, the <span classname="highlightBright">district authority</span>. This is where you will complete your <span classname="highlightBright">Niedlerlassungsbewilligung</span>, or <span classname="highlightBright">residence permit</span>.
              <br />
              <br />
              2. Another place you will visit is the <span classname="highlightBright">Gemeindeamt</span>, or <span classname="highlightBright">town hall</span> of the town your apartment is in. This is where you will make your <span classname="highlightBright">Meldezettel</span>, or <span classname="highlightBright">certification of registration</span>. When you do this registration, you want to make your <span classname="highlightBright">Haupwohnsitz</span>, or <span classname="highlightBright">main place of residence</span> to that town.
              <br />
              <br />
              3. You will also need to work with the <span classname="highlightBright">Besitzer</span>, or the <span classname="highlightBright">owner</span> of the apartment. If the apartment you want to rent is a private, this shouldn't be so difficult. Unfortunately, it is quite common in Austria that apartments are owned by an apartment company, so you may have to work with one of those companies to finally get the rent contract and the signature of the official owner of the building itself.
              <br />
              <br />
              4. Finally, the two documents you will need to send from Liechtenstein are mandated by the <span classname="highlightBright">Besitzer</span> Ausländer- und Passamt, or the <span classname="highlightBright">Immigration and Passport</span> Office of Liechtenstein.
            </p>
          </div>
          <div classname="main__container-experience">
            <div classname="main__tag">Long Term Residence Permit<br />(Nieder- lassungs- bewilligung)</div>
            <p classname="main__copy">
              For the residence permit, fill out the <span classname="highlightBright">Niedlerlassungsbewilligung</span> application. If you already have your apartment, you should even be able to fill in those parts as well. If you don't have a spouse or children, you can skip many parts of this application. Anyways, the BH will look over it when you first supply it to them anyway, so don't stress too much.
              <br />
              <br />
              To fully complete the <span classname="highlightBright">Niedlerlassungsbewilligung</span> application, you will need to bring the following documents when you go to the BH:
            </p>
          </div>
          <div classname="main__container-experience">
            <ul classname="main__list">
              <li classname="main__list-item-special"><b>ORIGINAL DOCUMENTS</b></li>
              <li classname="main__list-item-special">1. Passport photo (glue it right on the front page of the application)</li>
              <li classname="main__list-item-special">2. Your birth certificate, signed by an apostle</li>
              <li classname="main__list-item-special">3. A police report from you local police station listing an infractions you may or may not have, also signed by an apostle</li>
              <li classname="main__list-item-special">4. Your (at the lowest) A1 German proficiency certificate</li>
            </ul>
          </div>
          <div classname="main__container-experience">
            <ul classname="main__list">
              <li classname="main__list-item-special"><b>COPIED DOCUMENTS</b></li>
              <li classname="main__list-item-special">1. Your rent agreement, make sure the copy has the signature of owner of the apartment building</li>
              <li classname="main__list-item-special">2. Flight confirmation ticket (so the BH knows how long you have to legally stay in Austria)</li>
              <li classname="main__list-item-special">3. A police report from you local police station listing an infractions you may or may not have, also signed by an apostle</li>
              <li classname="main__list-item-special">4. Your A1 certification in German. This is exam is not to be taken lightly! I did it through the Goethe Institut in U.S.</li>
              <li classname="main__list-item-special">5. Your work contract - make sure all the work contracts have signatures.</li>
              <li classname="main__list-item-special">6. A "simulation" of your wage with expected taxes from Austria - make sure this has signatures from your company as well.</li>
            </ul>
          </div>
          <div classname="main__container-experience">
            <div classname="main__tag">Work Permit<br />(Arbeits- bewilligung)</div>
            <p classname="main__copy">
              For the work permit, you will need to fill out the <span classname="highlightBright">Stellanantritt ohne Wohnsitznahme in Liechtenstein</span> and <span classname="highlightBright">Persönliche Angabe zur Ausstellung des Aufenhaltstitels</span> applications. Your company in Liechtenstein may send you these half completed, or they may not. Mine did.
              <br />
              <br />
              To fully complete the applications, you will need the following attachments:
            </p>
          </div>
          <div classname="main__container-experience">
            <ul classname="main__list">
              <li classname="main__list-item-special"><b>ORIGINAL DOCUMENTS</b></li>
              <li classname="main__list-item-special">1. Passport photo (glue it right on the front page of the <span classname="highlightBright">Persönliche Angabe zur Ausstellung des Aufenhaltstitels</span>)</li>
              <li classname="main__list-item-special">&nbsp;</li>
              <li classname="main__list-item-special">And... that's it. Just the passport photo. Told you it was cake compared to the residence permit.</li>
            </ul>
          </div>
          <div classname="main__container-experience">
            <div classname="main__tag">The Perfect Process</div>
            <p classname="main__copy">
              Now, some of the things you have seen above may not really make any sense to you. The list below will describe them and outline, if you were perfect, how you could complete the entire process without any confusion or wasting of time:
            </p>
            <ul classname="main__list">
              <li classname="main__list-item-special"><b>BEFORE GOING TO AUSTRIA:</b></li>
              <li classname="main__list-item-special">1. Get a job offer in Liechtenstein! The company will send you contracts which you need to sign in the presence of an apostle, which you will then send back to the company for their final approval. They'll then order the contracts which you need to fill out for Liechtenstein.</li>
              <li classname="main__list-item-special">2. Pass your German A1 Proficiency Exam and wait for certificate to be mailed to you (this is probably easier before you go to Austria, but not impossible to do in Austria or Germany). This exam is includes basic reading, writing, and speaking in German. I did mine through the Goethe Institut. More about it <a href="http://www.goethe.de/lrn/prj/pba/bes/sd1/vor/enindex.htm">here</a>.</li>
              <li classname="main__list-item-special"><b>ONCE IN AUSTRIA:</b></li>
              <li classname="main__list-item-special">1. Obtain an Austrian Bank Account (this takes a few days because they always need to approve foreigners) this will help time saving immensely with any bank transfers you need for the apartment, such as the security deposit or first months rent.</li>
              <li classname="main__list-item-special">2. Aggressively hunt for an apartment, get the rent contract made up and sign it with the owner of the apartment as soon as you can. (This process took me a month.)</li>
              <li classname="main__list-item-special">3. In the meantime of all the apartment hunting, get a bunch of passport photos taken. You will need them for a few things later on.</li>
              <li classname="main__list-item-special">4. Make your <span classname="highlightBright">Meldezettal</span>, or <span classname="highlightBright">certification of registration</span> at your local  <span classname="highlightBright">Gemindeamt</span> or town hall (make sure to bring your rent contract when you go!)</li>
              <li classname="main__list-item-special">5. Go to the BH with all of the documents listed above. If you're good (unlike me) and have all the documents when you go, you should need to go only once.</li>
              <li classname="main__list-item-special">6. Now, this step is tricky. Liechtenstein won't issue you a work permit without first seeing your residence permit (would be easy if you were an EU citizen - they would issue it as soon as they knew you were a citizen!) However, Austria won't issue you a residence permit without first seeing the work permit! Catch 22 right? Well, not exactly. When you have everything ready for your residence permit at the BH, you can get help from your company and the Liechtenstein government to send a short confirmation letter saying that yes, as soon as you have your residence permit, they will issue you a work permit if you send in your residence permit for them to examine.</li>
              <li classname="main__list-item-special">7. Now wait. Some district authority offices say it can take as long as six months to approve your residence permit. I personally think that it depends more on your start date. I don't think they will toast you and make you wait for months if they see your start date is coming up in just a few weeks or month.</li>
              <li classname="main__list-item-special">8. Then, eventually, the BH will call you and tell you when you can pick up your residence permit! You will have to go this time with your passport and pay a final 20 EUR to receive the residence permit. They told me to come back on a date about a week after I finally submitted everything.</li>
              <li classname="main__list-item-special">9. Then, you will need to work with your company. The authorities in Liechtenstein will need to see that residence permit that you just got, with those two other documents I mentioned above. Probably with yet another week, then will then issue you the work permit. I picked my work permit up from my company, but maybe they sometimes mail it. I'm not sure. </li>
              <li classname="main__list-item-special">10. Finally, you've done it! Hike up to a hut, sip a delicious Austrian beer and eat a big Germknödel! Try not to think about after all that paperwork your only reward is to start working!</li>
              <li classname="main__list-item-special">&nbsp;</li>
              <li classname="main__list-item-special">&nbsp;</li>
              <li classname="main__list-item-special">&nbsp;</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
export AtLiHowTo
