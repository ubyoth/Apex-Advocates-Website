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
          Bridge Transfers in Football: What You Need To Know
        </h1>

        {/* Meta */}
        <p className="text-sm text-slate-500 mb-10">
          February 18, 2026 • 3 min read • By Yahaya Othman
        </p>

        {/* Article Body */}
        <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Unarguably, transfers have become the backbone of the football business. In the
            2024/2025 transfer window, Transfermarkt.com ranked Chelsea Football Club of
            England as the top earner in Europe, generating €198.00M in sales (outgoings).
            Twenty-six (26) players left the club during the transfer window.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            What is a Bridge Transfer?
          </h2>

          <p>
            Players move from one club to another annually, whether on loan or permanently.
            While this presents a reason for great enthusiasm for fans and supporters, it can
            spiral into a complex web of arbitration, litigation, and sanctions for erring
            parties who do not strictly follow the regulations.
          </p>

          <p>
            FIFA defines a bridge transfer as a situation where clubs collaborate to move
            players through a “bridge” club to a destination club, with the bridge club never
            fielding the player. For example, Player Y transfers from Club A to Club B and
            moves to Club C a few days or weeks later, without ever playing for Club B.
          </p>

          <p>
            According to an article published by Onside Law, <em>Navigating FIFA’s Bridge Transfer Rules in the Transfer Market</em>:
          </p>

          <blockquote className="border-l-4 border-accent-gold/60 pl-4 italic text-slate-600 dark:text-slate-300">
            Historically, bridge transfers have been used for various reasons, usually with a
            view to gain an undue economic advantage. This could be to pay less training
            compensation or solidarity mechanism, to reduce fiscal obligations due to differing
            tax rules across different countries or even to allow for illicit payments or salary
            by the new club (Club C), via the bridge club, to the player or their agent(s).
          </blockquote>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            FIFA Rules and Sanctions
          </h2>

          <p>
            Article 5 of the FIFA Regulation on the Status and Transfer of Players (RSTP)
            states that no player or club shall be involved in a bridge transfer. Unless
            established to the contrary, it is presumed that, if two consecutive transfers,
            national or international, of the same player occur within 16 weeks, the parties
            (clubs and players) involved in those two transfers have participated in a bridge
            transfer. This presumption is rebuttable, but one is hard-pressed not to conclude
            that, in such a scenario, the transfer was a hoax.
          </p>

          <p>
            The FIFA Disciplinary Committee, by the FIFA Disciplinary Code, will impose
            sanctions on any party subject to the FIFA Statutes and regulations involved in
            the transfer.
          </p>

          <p>
            Cameron Archer re-signed for Aston Villa from Sheffield United and eventually
            joined Southampton in the 2024/2025 transfer window. The move is currently under
            scrutiny by FIFA for being a bridge transfer.
          </p>

          <p>
            In April 2021, French clubs Paris FC and Angers SCO became the first to be
            sanctioned by the FIFA Disciplinary Committee for violating regulations on bridge
            transfers. The FIFA Disciplinary Committee imposed a national and international
            transfer ban and a fine against the clubs.
          </p>

          <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
            How Can Football Clubs in Nigeria Conduct Themselves?
          </h2>

          <p>
            Football clubs in Nigeria must acquaint themselves with the provisions to avoid
            being in breach. Ignorance of the law is not an excuse. Millions of Naira could go
            into payment of fines, legal representation, and related costs.
          </p>

          <p>
            Secondly, Nigerian clubs should maintain transparency in all transfer dealings.
            This includes clear communication about player movements and ensuring that all
            transfers comply with FIFA regulations. Documenting agreements and transactions
            properly will safeguard against disputes.
          </p>

          <p>
            Thirdly, clubs will benefit from engaging legal experts acquainted with FIFA
            regulations. These professionals can provide guidance on navigating complex
            transfer situations and ensure that clubs remain compliant with all applicable
            rules.
          </p>

          <p>
            Football clubs in Nigeria can effectively conduct themselves in a compliant,
            transparent, and strategic manner and protect themselves from sanctions. This
            would also enhance their reputation and competitiveness in the global football
            market.
          </p>

          <ul className="list-disc pl-6">
            <li>Know the RSTP bridge transfer rules and timelines.</li>
            <li>Maintain transparent documentation for every transfer step.</li>
            <li>Engage qualified sports-law counsel before executing transfers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewLegalBrief;