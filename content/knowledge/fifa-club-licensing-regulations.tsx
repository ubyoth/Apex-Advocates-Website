import React from "react";
import { Link } from "react-router-dom";

const NewLegalBrief: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          to="/knowledge"
          className="text-accent-gold text-sm font-bold mb-6 inline-block"
        >
          ← Back to Knowledge Centre
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-black mb-6 text-black dark:text-white">
          FIFA Club Licensing Regulations: What Member Associations Must Do
        </h1>

        {/* Meta */}
        <p className="text-sm text-slate-500 mb-10">
          March 3, 2026 • 4 min read • By Yahaya Othman
        </p>

        {/* Article Body */}
        <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            The FIFA Club Licensing Regulations (FIFA CLR) is a foundational document with the
            overall goal of standardizing and elevating football club management globally.
            The FIFA Congress in Munich in 2006 set minimum requirements across five important
            categories: Sporting, Infrastructure, Personnel and Administrative, Legal, and
            Financial (SIPALF).
          </p>

          <p>
            To ensure compliance with the regulations and foster sustainable development,
            member associations must adopt these rules without alterations. However, they can
            introduce additional criteria that align with national objectives and the specific
            context of their football ecosystem. This article explores the responsibilities of
            member associations under the FIFA CLR, with a particular focus on their impact on
            football clubs in Nigeria.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            Objectives of the FIFA Club Licensing Regulations
          </h2>

          <p>
            The FIFA CLR was designed to achieve key objectives. Firstly, the regulations
            ensure that clubs meet specific standards while maintaining competitive balance and
            fairness in football competitions.
          </p>

          <p>
            Secondly, the regulations aim to formalize club operations and management by
            setting high standards for how football clubs should be managed globally. Also,
            clubs are encouraged to uphold the highest ethical standards and ensure a safe and
            secure match environment. Fans and football lovers should be enthusiastic about
            match-day experiences when sporting values are promoted.
          </p>

          <p>
            Financial transparency is crucial for the sustainability and credibility of football
            clubs. Globally, the enforcement of financial sustainability practices has compelled
            clubs to be more circumspect. Everton Football Club and Nottingham Forest FC are the
            latest clubs in the UK to face point deductions for breaching the Premier League
            Profit &amp; Sustainability Regulations. Clubs, like entities registered with the
            Corporate Affairs Commission (CAC), are required by law to file annual returns. The
            NPFL Framework &amp; Rules also provides for financial accountability by clubs
            participating in a league season.
          </p>

          <p>
            These measures can be implemented within the wider provisions of the FIFA CLR.
          </p>

          <p>
            Lastly, clear ownership structures must be established to help prevent conflicts of
            interest and ensure the proper governance of clubs. The integrity of the game is put
            in jeopardy when two clubs are owned by two entities/individuals with equal powers
            or control participating in the same league or tournament.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            FIFA CLR Grading Criteria
          </h2>

          <p>
            According to Article 2.1.1.1 of the FIFA CLR, the criteria are divided into three
            categories:
          </p>

          <h3 className="text-xl font-bold text-black dark:text-white pt-2">
            “A” Criteria — Mandatory
          </h3>
          <p>
            Failure to meet any item in “A” criteria results in the denial of the license to
            participate in confederation/national club competitions. Under the Sporting criteria,
            the applicant must have an approved youth development program, and youth teams —
            “at least one youth team within the age range of 15 to 21; at least one youth team
            within the age range of 10 to 14.”
          </p>

          <h3 className="text-xl font-bold text-black dark:text-white pt-2">
            “B” Criteria — Mandatory with Sanctions
          </h3>
          <p>
            Non-fulfillment of “B” criteria leads to specific sanctions, but defaulting clubs may
            still receive a license to compete. Under the Infrastructure criteria, participating
            teams must have decent stadium conditions, including clean and sufficient toilet
            facilities for both sexes, as well as enough towels and hand dryers.
          </p>

          <h3 className="text-xl font-bold text-black dark:text-white pt-2">
            “C” Criteria — Best Practice
          </h3>
          <p>
            These are recommended practices. Non-compliance does not result in sanctions or
            license denial, although certain “C” criteria may become mandatory. Under the
            Infrastructure criteria, for example, stadiums must have individual seats and 5% of
            the stadium capacity must be reserved for visiting supporters in a separate area; and
            signposts and directions should be “presented in internationally understandable
            pictographic language.”
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            Responsibilities of Member Associations
          </h2>

          <p>
            Member associations such as the Nigeria Football Federation (NFF) play a pivotal role
            in implementing and enforcing the FIFA CLR. The NFF must conduct periodic assessment
            and verification exercises to ensure that clubs meet the required criteria through
            thorough documentation and on-site inspections. Licenses should be issued only to
            clubs that comply with the mandatory criteria.
          </p>

          <p>
            Regular monitoring must be carried out to ensure ongoing compliance with the
            regulations. Whether member associations have the manpower required to execute such a
            task is another question altogether.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            Supporting Club Development
          </h2>

          <p>
            To help clubs meet the licensing criteria, member associations should provide
            educational programs, seminars or training for club officials on the requirements and
            benefits of the FIFA CLR.
          </p>

          <p>
            Furthermore, member associations should provide expert advice on infrastructure
            development, financial management, and legal compliance to applicants to allow for
            their growth and development.
          </p>

          <p>
            Football clubs should be able to have access to funding or grants to support their
            efforts in compliance.
          </p>

          <ul className="list-disc pl-6">
            <li>Adopt FIFA CLR without altering the minimum requirements.</li>
            <li>
              Run periodic verification: documentation checks and on-site inspections before
              issuing licenses.
            </li>
            <li>
              Monitor clubs throughout the season to ensure ongoing compliance with SIPALF
              criteria.
            </li>
            <li>
              Provide training and practical support to clubs on infrastructure, finance, and
              legal compliance.
            </li>
            <li>
              Facilitate access to funding/grants to help clubs meet licensing requirements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewLegalBrief;