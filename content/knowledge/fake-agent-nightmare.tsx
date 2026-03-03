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
          Football Trials, Fake Agents, and FIFA RSTP Article 19ter: What Players Must Know
        </h1>

        {/* Meta */}
        <p className="text-sm text-slate-500 mb-10">
          March 3, 2026 • 6 min read • By Yahaya Othman
        </p>

        {/* Article Body */}
        <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            According to a survey conducted by FIFPRO, a staggering 70% of African footballers
            have been contacted by ravenous individuals who made bogus promises to get them a move
            abroad. From this report, of the over 1,000 players that were contacted by fake agents,
            70% were approached by unsolicited “agents,” with 56% not receiving the promised trial
            and 44% not signing the expected contract. While these figures are not monetised, this
            indicates widespread deception.
          </p>

          <p>
            Global reports on sports corruption note that fake agents often take up to 50% of a
            player’s future salary in exploitative contracts. In specific cases, like a Ghanaian
            rescue operation, 76 victims were lured with fake contracts, each extorted for around
            $1,000.
          </p>

          <p>
            An estimated 15,000 young players are trafficked or deceived by fake agents each year,
            with the vast majority originating from West Africa (e.g., Nigeria, Ghana, Cameroon,
            Senegal, and Côte d’Ivoire). Their modus operandi is simple: pay-to-play. Fake agents
            operate as opportunistic middlemen, often without FIFA licensing or legitimate
            connections to clubs. This is not to naively assume that some licensed agents do not
            carry out this grand exploitation and extortion.
          </p>

          <p>
            In Nigeria, where football is a pathway out of poverty for many young talents, these
            fraudsters exploit social media, local academies, and word-of-mouth networks to target
            vulnerable players aged 15–25. They promise “trials” with European clubs in the Premier
            League, Serie A, or Bundesliga, demanding upfront fees for visas, travel, and
            “facilitation” ranging from €1,000 to €5,000. Once paid, players are often stranded in
            transit countries like Tunisia or Morocco or abandoned upon arrival with no actual
            trial arranged.
          </p>

          <p>
            Moshood Afolabi, a 24-year-old aspiring footballer, was stranded in Mongolia, according
            to a report published by Aljazeera in 2019. Sportsandcrime.com stated that across
            Africa, this issue affects thousands annually, with West African countries like Ghana,
            Cameroon, and Nigeria being hotspots.
          </p>

          <p>
            The tragic death of Senegal’s promising young goalkeeper, Cheikh Touré, 19, was a
            reminder that the consequences of dealing with fake agents are dire. Touré was lured by
            some individuals under the guise of getting a trial with a professional club. The
            purported opportunity eventually became an abduction, where the kidnappers asked for
            ransom from Touré’s family. Tragically, he was killed when his family was unable to pay
            the ransom.
          </p>

          <p>
            Fake agents use forged invitations bearing club logos, fake contracts, or even corrupt
            embassy officials to secure visas. In extreme cases, this escalates to human
            trafficking, where players are coerced into fraudulent schemes or forced labour, as
            seen in intra-African movements like Ghanaians trafficked to Nigeria via fake academies.
            Families sell assets or take loans, perpetuating cycles of debt when dreams collapse.
          </p>

          <p>
            These tactics undermine legitimate pathways, as unlicensed “agents” (often just
            middlemen) flood the system, eroding trust in Nigeria’s (and Africa’s) football
            ecosystem. The lack of regulation in local academies exacerbates this, with illegal
            academies charging fees without proper facilities or scouting ties. There are 500
            illegal academies in Accra, Ghana. This setup provides these ‘fake’ agents with all
            the tools to thrive.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            What is a Trial?
          </h2>

          <p>
            According to definition 32 of the Regulations, “A trial is defined as “a temporary
            period during which a player that is not registered with a club is evaluated by that
            club.” Put simply, this is an opportunity to see a triallist up close by the inviting
            club. Then the inviting club elects to exercise the option to make a formal offer if
            the player or triallist ticks the boxes.
          </p>

          <p>
            Drawing on FIFA’s Regulations on the Status and Transfer of Players (RSTP), particularly
            the provisions on trials in Article 19ter, this piece examines key issues regarding the
            scope and nature of football trials. It outlines how players can legitimately position
            themselves for global opportunities while staying within the bounds of regulatory
            safeguards.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            What Do the Regulations Say?
          </h2>

          <p>Article 19ter of the RSTP provides thus:</p>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              A club may invite a player to trial with it for a defined period of time. A
              professional (within the meaning of art. 2 herein) may only trial with another club
              with the express written permission of their current club.
            </li>
            <li>
              The club and the invited player shall agree on the conditions of the trial (e.g.
              payment for accommodation, travel, meals and daily expenses) on the FIFA Trial Form
              before the trial commences. A complete and duly signed FIFA Trial Form must be lodged
              in FIFA TMS by the club at the latest ten days before the trial commences.
            </li>
            <li>
              During a trial, the club owes a duty of care to the triallist. In particular, the
              club shall provide the triallist with, and cover the cost of, any necessary medical
              treatment for injuries sustained while performing activities within the trial.
            </li>
            <li>
              The maximum duration of a trial for players aged 21 and below shall be eight weeks,
              consecutive or non-consecutive, per club in any one season. The maximum duration of a
              trial for players over the age of 21 shall be three weeks, consecutive or
              non-consecutive, per club in any one season.
            </li>
            <li>
              A player on trial is only permitted to participate in friendly matches and any
              activity that does not fall within the scope of organised football. Such friendly
              matches must take place during the duration of the relevant trial.
            </li>
            <li>
              Any person subject to the FIFA Statutes is prohibited from requesting, offering, and/
              or receiving any payment whatsoever connected to a trial, without prejudice to the
              agreement between the club and the triallist on the conditions of the trial,
              according to paragraph 2 above.
            </li>
          </ol>

          <blockquote className="border-l-4 border-accent-gold/60 pl-4 italic text-slate-600 dark:text-slate-300">
            What is apparent from a combined reading of the provisions stated above is that trials
            are meticulously regulated. The overarching purpose was “to increase legal certainty
            and to provide regulatory protection against exploitation and abuse.”
          </blockquote>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            Let’s Break Down The Regulations
          </h2>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              A trial is a short test period where an unregistered player is evaluated by a club.
              It is NOT a contract or job. No employment is created. A triallist is free to leave
              or be released at any time.
            </li>
            <li>
              For professional players, written approval from their current club is required. Both
              club and player must sign the official FIFA Trial Form (which covers who pays for
              flights, hotel, food, pocket money, etc). The club must upload the form to TMS at
              least 10 days BEFORE trial starts.
            </li>
            <li>
              For players who are under 21 years, the maximum duration for the trial is eight (8)
              weeks per club in a season; for players above 21 years, the maximum duration is three
              (3) weeks.
            </li>
            <li>
              The player on trial (triallist) is only allowed to participate in friendly matches
              during the trial. Such a player is prohibited from featuring in organised matches;
              no league or cup games.
            </li>
            <li>
              The club pays all agreed costs (hotel, food, travel). No one can charge a player any
              “facilitation”, “visa”, or “trial fee”. <strong>Any demand for any PAYMENT UPFRONT IS FRAUD.</strong>
            </li>
            <li>The trial club must give free treatment if a player on trial gets injured during trial activities.</li>
            <li>The trial club cannot claim training rewards for a triallist’s time with it.</li>
          </ol>

          <p>
            Prominently, Article 19ter paragraph 6 prohibits any payments with respect to trials,
            whether to the player, the current club of a professional or a football agent. The only
            exception is the conditions agreed on the FIFA Trial Form.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            How Players Can Position Themselves for Legitimate Opportunities in Bigger Leagues
          </h2>

          <p>
            Here are some of the steps players can take to counter fake agents and secure real pathways:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Verify agents and use licensed intermediaries:</strong> Always check if an
              agent is FIFA-licensed via the official FIFA Agent Platform. Avoid anyone demanding
              upfront payments; legitimate agents earn commissions from deals (e.g., 3–10% of
              transfer fees or salaries).
            </li>
            <li>
              <strong>Adhere to RSTP trial protocols for safe evaluations:</strong> For international
              trials, ensure the inviting club submits the FIFA Trial Form in TMS beforehand.
              Trials last up to 8 weeks for players under 21 (3 weeks for players over 21), with no
              fees required. Players should remember that no International Transfer Certificate
              (ITC) is needed for trial friendlies, preventing rushed scams.
            </li>
            <li>
              <strong>Build through legitimate academies and networks:</strong> Players can look to
              join clubs affiliated to the Nigerian Football Federation (NFF) or other academies
              affiliated to FIFA. In Nigeria, there are some stellar academies/clubs where there
              is a genuine pathway to playing professional football and they offer structured
              development and real scouting ties (e.g., Beyond Limits Academy, Sporting Lagos
              Academy, Imperial Football Academy, FC Ebeide, FC Barcelona Academy).
            </li>
            <li>
              <strong>Education:</strong> Players and aspiring talents should deepen their
              understanding of key regulations governing global football, such as the FIFA RSTP,
              by webinars, online courses, seminars, and workshops organised by FIFA, national
              federations, FIFPRO, or accredited sports law platforms. FIFA also provides public
              resources on its official website, including the RSTP text, explanatory notes, and
              guides.
            </li>
            <li>
              <strong>Seek support and report:</strong> Organizations like FIFPRO offer resources
              against fake agents, including reporting hotlines. In Nigeria, report to the NFF or
              the police. Regionally, ECOWAS Commission protocols can aid against intra-African
              trafficking.
            </li>
            <li>
              <strong>Maintain video reels of matches:</strong> Aspiring players must build and
              maintain a strong digital playing CV (player profile/recruiting portfolio). Clubs,
              scouts, and agents increasingly rely on technology, analytics, and video to discover
              and evaluate talent globally.
            </li>
          </ul>

          <p>
            In the brutal reality of African football’s dream-chasing landscape, the statistics
            paint a grim picture; the FIFPRO Africa survey of 263 professional players across seven
            countries revealed that more than 70% had been contacted unsolicited by individuals
            claiming to help them move to another club, with 56% not receiving the promised trial
            and 44% not signing the expected contract. This underscores a crisis where opportunistic
            scammers exploit young talents’ aspirations, leading to financial loss, stranded dreams,
            and in extreme cases, human trafficking or worse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewLegalBrief;