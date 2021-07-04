import React from "react";
import Header from "../component/header";

function Donate() {
  return (
    <>
      <Header />
      <section class="case">
        <div class="case1">
          <h1>Register here</h1>
          <h4>Read the requirement than register</h4>
          <a href="./register.html">
            <button>Register</button>
          </a>
        </div>
      </section>
      <section class="who">
        <h1>General Requiremets</h1>
        <div class="boox">
          <div class="boox1">
            <h3>Before you donate:</h3>
            <h5>1. Drink 8 to 10 glasses of water.</h5>
            <h5>2. Get adequate rest.</h5>
            <h5>3. Eat a hearty meal.</h5>
            <h5>4. Include iron-rich fruits in your diet.</h5>
            <h5>
              5. Know the countries where you've travelled and when you visted
              them.
            </h5>
            <h5>6. Know your medical conditions.</h5>
          </div>
          <div class="boox2">
            <h3>At the time of Donation, you must:</h3>
            <h5>1. Be in good health</h5>
            <h5>2. Be 16 years of age* or older</h5>
            <h5>3. Weight atleast 110 pounds**</h5>
            <h5>4. Have photo identification with a birth date</h5>
          </div>
        </div>
      </section>
      <section class="process">
        <h2>Donation Process</h2>
        <div class="con">
          <div class="con1">
            <h3>Before Donation</h3>
            <h5>Donating is safe and simple.</h5>
            <p>
              To have the best donation experience possible, it’s important to
              drink 8-10 glasses of water. Keep your body well hydrated in
              preparation for a loss in body fluid.
            </p>
            <ul>
              <li>
                Avoid coffee, alcohol or caffeinated beverages that dehydrate
                the body.
              </li>
              <li>Get adequate rest the night before</li>
              <li>
                Eat a hearty meal, including a healthy breakfast and full meals
                throughout the day.
              </li>
              <li>
                Include iron-rich foods like meats, leafy green vegetables
                and/or other iron-rich foods in your diet to keep hemoglobin
                (iron) levels within an acceptable range for donating.
              </li>
              <li>
                Know the countries where you’ve traveled and when you visited
                them.
              </li>
              <li>
                Know your medical conditions as well as the medications and
                amounts you’re taking. For your safety and the safety of blood
                recipients, donors on certain medications may be deferred or
                required to wait before donating.
              </li>
              <li>
                Visit one of our primary locations or a mobile drive near you.
              </li>
            </ul>
          </div>
          <div class="con2">
            <h3>During Donation</h3>
            <h5>In just 60 minutes you can save three lives.</h5>
            <p>
              From registration to refreshments, the entire process of donating
              blood takes about one hour and includes the following six steps:
            </p>
            <ul>
              <li>
                Paperwork: Each donor is given a questionnaire to fill out.
              </li>
              <li>
                Mini-physical: We will check your vital signs (blood pressure,
                pulse, temperature and hemoglobin level).
              </li>
              <li>
                Confidential Interview: We will review your medical history with
                you.
              </li>
              <li>
                Blood Collection: A new, sterile and disposable needle is used
                to draw one pint of your blood, which usually takes about five
                to eight minutes.
              </li>
              <li>Rest: Remain seated for a few minutes.</li>
              <li>
                Eat: Be sure to have some refreshments before you leave and
                enjoy hearty meals throughout the day.
              </li>
            </ul>
          </div>
          <div class="con3">
            <h3>Post Donation</h3>
            <h5>Congratulations! You’ve saved lives. Now what?</h5>
            <p>Here are some tips to help you feel your best:</p>
            <ul>
              <li>
                Drink lots of fluids (eight 8-ounce glasses) to replace the lost
                fluid and the lost proteins. Within six to eight weeks your red
                blood cells will be restored.
              </li>
              <li>Eat a healthy, hearty meal.</li>
              <li>
                Leave the bandage on your arm for at least four hours and avoid
                strenuous physical activity for 24 hours.
              </li>
              <li>Avoid alcohol and smoking for a half hour after donating.</li>
              <li>
                If you feel anything out of the ordinary after you donate,
                immediately lie down, then call the Blood Bank’s nursing
                services at (808) 845-4745 for guidance.
              </li>
              <li>
                If you get sick with a cold or flu or don’t feel well in the
                next few days, call us as soon as possible. We may need to
                recall your blood to protect patients who might receive your
                blood.
              </li>
              <li>
                If you have any reason to believe your blood may not be safe to
                give to another person, please call us immediately.
              </li>
              <li>
                You’ll be eligible to donate again in eight weeks, so please
                schedule your next appointment before you leave.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donate;
