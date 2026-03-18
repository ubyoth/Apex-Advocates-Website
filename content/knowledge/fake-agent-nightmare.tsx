import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const SLUG = "fake-agent-nightmare";
const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

const OG_IMAGE =
  "https://res.cloudinary.com/dq7vjblwd/image/upload/v1772573045/FIFA_trials_vs._fake_agent_scam_2_pvl7g0.png";
const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE =
  "Football Trials, Fake Agents, and FIFA RSTP Article 19ter: What Players Must Know";
const DESCRIPTION =
  "Learn how FIFA RSTP Article 19ter protects players from fake agent scams during football trials. Understand mandatory trial forms, duration limits, and legal safeguards.";

const PUBLISHED_ISO = "2026-03-03";
const AUTHOR_NAME = "Yahaya Othman";

function formatDisplayDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

const NewLegalBrief: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  const related = [
     {
      title:
        "The FIFA Club Licensing Regulations: Responsibilities of Member Associations and Nigerian Clubs",
      slug: "fifa-club-licensing-regulations",
      note: "SIPALF criteria, compliance responsibilities, and enforcement.",
    },
  ];

  const breadcrumbJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Knowledge Centre",
          item: `${SITE_URL}/knowledge`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: TITLE,
          item: PAGE_URL,
        },
      ],
    }),
    []
  );

  const articleJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      headline: TITLE,
      description: DESCRIPTION,
      image: [OG_IMAGE, OG_IMAGE_FALLBACK],
      datePublished: PUBLISHED_ISO,
      dateModified: PUBLISHED_ISO,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: {
        "@type": "Organization",
        name: "Apex Sports Law",
        url: SITE_URL,
      },
    }),
    []
  );

  return (
    <>
      <Helmet>
        <title>{TITLE} | Apex Sports Law Knowledge Centre</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Apex Sports Law" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />

        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:image" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:secure_url" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          property="article:published_time"
          content={`${PUBLISHED_ISO}T00:00:00+01:00`}
        />
        <meta property="article:author" content={AUTHOR_NAME} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black py-20">
        <article className="max-w-3xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-slate-500">
              <li>
                <Link to="/" className="hover:text-accent-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/knowledge"
                  className="hover:text-accent-gold transition-colors"
                >
                  Knowledge Centre
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 dark:text-slate-300 line-clamp-1">
                {TITLE}
              </li>
            </ol>
          </nav>

          <Link
            to="/knowledge"
            className="text-accent-gold text-sm font-bold mb-6 inline-block"
          >
            ← Back to Knowledge Centre
          </Link>

          <h1 className="text-4xl font-black mb-6 text-black dark:text-white">
            {TITLE}
          </h1>

          <p className="text-sm text-slate-500 mb-10">
            <time dateTime={PUBLISHED_ISO}>{displayDate}</time> • 6 min read • By{" "}
            {AUTHOR_NAME}
          </p>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              According to a survey conducted by FIFPRO, a staggering 70% of African
              footballers have been contacted by ravenous individuals who made bogus
              promises to get them a move abroad. From this report, of the over 1,000
              players that were contacted by fake agents, 70% were approached by
              unsolicited “agents,” with 56% not receiving the promised trial and 44%
              not signing the expected contract. While these figures are not monetised,
              this indicates widespread deception.
            </p>

            <p>
              Global reports on sports corruption note that fake agents often take up to
              50% of a player’s future salary in exploitative contracts. In specific
              cases, like a Ghanaian rescue operation, 76 victims were lured with fake
              contracts, each extorted for around $1,000.
            </p>

            <p>
              An estimated 15,000 young players are trafficked or deceived by fake agents
              each year, with the vast majority originating from West Africa, including
              Nigeria, Ghana, Cameroon, Senegal, and Côte d’Ivoire. Their modus operandi
              is simple: pay-to-play. Fake agents operate as opportunistic middlemen,
              often without FIFA licensing or legitimate connections to clubs. This is
              not to naively assume that some licensed agents do not carry out this grand
              exploitation and extortion.
            </p>

            <p>
              In Nigeria, where football is a pathway out of poverty for many young
              talents, these fraudsters exploit social media, local academies, and
              word-of-mouth networks to target vulnerable players aged 15–25. They
              promise “trials” with European clubs in the Premier League, Serie A, or
              Bundesliga, demanding upfront fees for visas, travel, and “facilitation”
              ranging from €1,000 to €5,000. Once paid, players are often stranded in
              transit countries like Tunisia or Morocco or abandoned upon arrival with no
              actual trial arranged.
            </p>

            <p>
              Moshood Afolabi, a 24-year-old aspiring footballer, was stranded in
              Mongolia, according to a report published by Al Jazeera in 2019.
              Sportsandcrime.com stated that across Africa, this issue affects thousands
              annually, with West African countries like Ghana, Cameroon, and Nigeria
              being hotspots.
            </p>

            <p>
              The tragic death of Senegal’s promising young goalkeeper, Cheikh Touré,
              aged 19, was a reminder that the consequences of dealing with fake agents
              are dire. Touré was lured by some individuals under the guise of getting a
              trial with a professional club. The purported opportunity eventually became
              an abduction, where the kidnappers asked for ransom from Touré’s family.
              Tragically, he was killed when his family was unable to pay the ransom.
            </p>

            <p>
              Fake agents use forged invitations bearing club logos, fake contracts, or
              even corrupt embassy officials to secure visas. In extreme cases, this
              escalates to human trafficking, where players are coerced into fraudulent
              schemes or forced labour, as seen in intra-African movements like
              Ghanaians trafficked to Nigeria via fake academies. Families sell assets or
              take loans, perpetuating cycles of debt when dreams collapse.
            </p>

            <p>
              These tactics undermine legitimate pathways, as unlicensed “agents” often
              flood the system, eroding trust in Nigeria’s and Africa’s football
              ecosystem. The lack of regulation in local academies exacerbates this, with
              illegal academies charging fees without proper facilities or scouting ties.
              There are 500 illegal academies in Accra, Ghana. This setup provides these
              fake agents with all the tools to thrive.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              What is a Trial?
            </h2>

            <p>
              According to definition 32 of the Regulations, a trial is “a temporary
              period during which a player that is not registered with a club is
              evaluated by that club.” Put simply, this is an opportunity for the
              inviting club to assess a trialist up close. The club may then decide
              whether to make a formal offer if the player meets its requirements.
            </p>

            <p>
              Drawing on FIFA’s Regulations on the Status and Transfer of Players (RSTP),
              particularly the provisions on trials in Article 19ter, this piece
              examines key issues regarding the scope and nature of football trials. It
              outlines how players can legitimately position themselves for global
              opportunities while staying within regulatory safeguards.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              What Do the Regulations Say?
            </h2>

            <p>Article 19ter of the RSTP provides thus:</p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                A club may invite a player to trial with it for a defined period of time.
                A professional may only trial with another club with the express written
                permission of their current club.
              </li>
              <li>
                The club and the invited player shall agree on the conditions of the
                trial, such as payment for accommodation, travel, meals and daily
                expenses, on the FIFA Trial Form before the trial commences. A complete
                and duly signed FIFA Trial Form must be lodged in FIFA TMS by the club at
                the latest ten days before the trial commences.
              </li>
              <li>
                During a trial, the club owes a duty of care to the trialist. In
                particular, the club shall provide the trialist with, and cover the cost
                of, any necessary medical treatment for injuries sustained while
                performing activities within the trial.
              </li>
              <li>
                The maximum duration of a trial for players aged 21 and below shall be
                eight weeks, consecutive or non-consecutive, per club in any one season.
                The maximum duration of a trial for players over the age of 21 shall be
                three weeks, consecutive or non-consecutive, per club in any one season.
              </li>
              <li>
                A player on trial is only permitted to participate in friendly matches
                and any activity that does not fall within the scope of organised
                football. Such friendly matches must take place during the duration of the
                relevant trial.
              </li>
              <li>
                Any person subject to the FIFA Statutes is prohibited from requesting,
                offering, and/or receiving any payment whatsoever connected to a trial,
                without prejudice to the agreement between the club and the trialist on
                the conditions of the trial according to paragraph 2 above.
              </li>
            </ol>

            <blockquote className="border-l-4 border-accent-gold/60 pl-4 italic text-slate-600 dark:text-slate-300">
              What is apparent from a combined reading of the provisions stated above is
              that trials are meticulously regulated. The overarching purpose was to
              increase legal certainty and to provide regulatory protection against
              exploitation and abuse.
            </blockquote>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Let’s Break Down the Regulations
            </h2>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                A trial is a short test period where an unregistered player is evaluated
                by a club. It is not a contract or job. No employment is created. A
                trialist is free to leave or be released at any time.
              </li>
              <li>
                For professional players, written approval from their current club is
                required. Both club and player must sign the official FIFA Trial Form,
                which covers who pays for flights, hotel, food, pocket money, and other
                costs. The club must upload the form to TMS at least 10 days before the
                trial starts.
              </li>
              <li>
                For players under 21 years, the maximum duration for the trial is eight
                weeks per club in a season. For players above 21 years, the maximum
                duration is three weeks.
              </li>
              <li>
                The player on trial is only allowed to participate in friendly matches
                during the trial. Such a player is prohibited from featuring in organised
                matches; no league or cup games.
              </li>
              <li>
                The club pays all agreed costs, including hotel, food, and travel. No
                one can charge a player any “facilitation”, “visa”, or “trial fee”.{" "}
                <strong>Any demand for payment upfront is fraud.</strong>
              </li>
              <li>
                The trial club must give free treatment if a player on trial gets injured
                during trial activities.
              </li>
              <li>
                The trial club cannot claim training rewards for a trialist’s time with
                it.
              </li>
            </ol>

            <p>
              Prominently, Article 19ter paragraph 6 prohibits any payments with respect
              to trials, whether to the player, the current club of a professional, or a
              football agent. The only exception is the conditions agreed on the FIFA
              Trial Form.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              How Players Can Position Themselves for Legitimate Opportunities in Bigger
              Leagues
            </h2>

            <p>
              Here are some of the steps players can take to counter fake agents and
              secure real pathways:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Verify agents and use licensed intermediaries:</strong> Always
                check if an agent is FIFA-licensed via the official FIFA Agent Platform.
                Avoid anyone demanding upfront payments; legitimate agents earn
                commissions from deals.
              </li>
              <li>
                <strong>Adhere to RSTP trial protocols for safe evaluations:</strong> For
                international trials, ensure the inviting club submits the FIFA Trial
                Form in TMS beforehand. Trials last up to 8 weeks for players under 21
                and 3 weeks for players over 21, with no fees required.
              </li>
              <li>
                <strong>Build through legitimate academies and networks:</strong> Players
                can look to join clubs affiliated to the Nigerian Football Federation or
                academies with genuine pathways, structured development, and real scouting
                ties.
              </li>
              <li>
                <strong>Education:</strong> Players and aspiring talents should deepen
                their understanding of key regulations governing global football, such as
                the FIFA RSTP, through webinars, online courses, seminars, and workshops
                organised by FIFA, national federations, FIFPRO, or accredited sports law
                platforms.
              </li>
              <li>
                <strong>Seek support and report:</strong> Organisations like FIFPRO offer
                resources against fake agents, including reporting channels. In Nigeria,
                reports may also be made to the NFF or the police.
              </li>
              <li>
                <strong>Maintain video reels of matches:</strong> Aspiring players must
                build and maintain a strong digital playing CV. Clubs, scouts, and agents
                increasingly rely on technology, analytics, and video to discover and
                evaluate talent globally.
              </li>
            </ul>

            <p>
              In the brutal reality of African football’s dream-chasing landscape, the
              statistics paint a grim picture. The FIFPRO Africa survey of 263
              professional players across seven countries revealed that more than 70% had
              been contacted unsolicited by individuals claiming to help them move to
              another club, with 56% not receiving the promised trial and 44% not signing
              the expected contract. This underscores a crisis where opportunistic
              scammers exploit young talents’ aspirations, leading to financial loss,
              stranded dreams, and in extreme cases, human trafficking or worse.
            </p>
          </div>

          <section className="mt-16 pt-10 border-t border-slate-100 dark:border-accent-gold/10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Related Legal Briefs
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/knowledge/${item.slug}`}
                  className="block p-6 rounded-2xl border border-slate-200 dark:border-accent-gold/10 hover:border-accent-gold/40 transition-all"
                >
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.note}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-accent-gold text-xs font-bold uppercase tracking-widest">
                    Read brief <span className="material-icons text-sm">east</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default NewLegalBrief;
