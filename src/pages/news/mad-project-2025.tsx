import { DefaultBanner } from "@/components/default-banner";
import Head from "next/head";

export default function MadProject2025() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="MAD Project 2025 - News from MAD Research Group"
        />
        <meta
          property="og:description"
          content="Learn about the MAD research group's project on the societal impacts of emerging technologies in New Zealand, aimed at shaping technology policy."
        />
        <meta
          property="og:image"
          content="/open-graph/news-page/news191-100.jpg"
        />
        <meta
          property="og:image:alt"
          content="Word 'News' in white serif font on a dark blue background with white curved lines."
        />
        <title>MAD Project 2025 | MAD Research Group</title>
      </Head>
      <main id="main-content">
        <DefaultBanner
          size="medium"
          title="MAD Project 2025 - New Zealanders’ Perceptions of Emerging Technologies: Governance, Ethics, Security and Risks"
        />
        <section className="readable-container">
          <p>
            The Management, Analytics, and Decision Making (MAD) research group
            has been awarded by the Multi Agency Research Network (MARN) and
            Massey University. The project will seek to foster nation-wide
            understanding of the risks and opportunities associated with
            emerging technologies in Aotearoa New Zealand. Emerging
            technologies, such as IoT, AI, robotics, facial recognition, have
            overwhelming implications for society as a whole.
          </p>
          <p>
            The first stage of the project was conducted in 2022. In the stage,
            a multi-faceted survey questionnaire was developed. The survey
            instrument enabled capturing of Kiwis’ perceptions of emerging
            technologies and the risks and concerns associated with them. The
            second stage of the project will be completed by the end of 2023. It
            will develop a theoretical model, a methodologically rigorous survey
            instrument, and collect data to validate the instrument. It is
            expected that the results will have wide-ranging potential to shape
            government policy for better technology development, implementation
            and governance in New Zealand by providing critically important
            social context.
          </p>
          <section aria-labelledby="marn-label">
            <h2 id="marn-label">MARN</h2>
            <p>
              The MARN was created in 2016 to facilitate the exchange of
              knowledge between security-related agencies and Massey
              researchers, including developing relationships with research
              directors from each College, as well as prioritise areas for
              research. This includes a research seed fund for small exploratory
              projects to generate new research in priority areas. Dr Germana
              Nicklin, Senior Lecturer, Centre for Defence and Security Studies,
              School of People, Environment and Planning, College of Humanities
              and Social Sciences, Massey University is the Convenor of MARN.
            </p>
          </section>
          <section aria-labelledby="mad-label">
            <h2 id="mad-label">MAD</h2>
            <p>
              The MAD research group currently consists of four Albany staff
              members - Professor David Pauleen, Dr. Hamed Jafarzadeh, Dr.
              Kasuni Weerasinghe, and Dr. Shafiq Alam, two PhD students, and
              twenty former PhD students and international colleagues.
              Additional information on MAD can be found at mad.massey.ac.nz. If
              you would like more information on this project please contact MAD
              at mad@massey.ac.nz.
            </p>
          </section>
          <section aria-labelledby="why-this-study-needed-label">
            <h2 id="why-this-study-needed-label">Why this study is need</h2>
            <p>
              At the start of the 21st century, technology has become embedded
              into every aspect of individual and social life. Emerging
              technologies, such as AI, facial recognition, big data, genetic
              engineering, IoT, and robotics, along with related governance
              issues present serious risks as noted in a relatively recent
              research report on global challenges by a multidisciplinary
              worldwide group of scientists (Pamlin & Armstrong, 2015)*. Notable
              scientists and technologists such as Stephen Hawking, Elon Musk,
              and Bill Gates caution that robots and Artificial Intelligence
              could wipe out humanity, and have called for safeguards on AI.
              Consistent with their concerns, the report asserts that “it is
              important to understand that much of the knowledge and many tools
              that we have, and will develop, can be both a risk and a solution
              to risks depending on context” (Pamlin & Armstrong, 2015, p. 10)*.
            </p>
            <p>
              Emerging technologies which will greatly affect society are being
              developed and implemented at an increasing pace, often
              outstripping government attempts to regulate and the public’s
              ability to understand them. Implementing technological change
              without due consideration of stakeholders’ (e.g., citizens,
              technologists, business, government) perceptions may lead to a
              host of issues upon the introduction of such technologies into
              wider use. These may include social, governance, and
              technology-based issues, including public resistance, as well as
              technological design and use that does not meet stakeholder
              expectations. Governance and ethical issues involving
              inclusion/exclusion, data privacy, and security may also be
              involved.
            </p>
          </section>
          <section aria-labelledby="get-involved-label">
            <h2 id="get-involved-label">Get involved!</h2>
            <p>
              We consider this to be an ‘open source’ project. If you have
              expertise or area knowledge that you would like to share, please
              contact us at mad@massey.ac.nz. If you would like to participate
              in piloting the survey, please contact us at mad@massey.ac.nz.
              Please bookmark this webpage and check back as we will be
              periodically updating details of the study.
            </p>
            <img
              src="/mad2021.jpg"
              alt="MAD group beside a Massey University banner in an office, smiling."
              style={{
                height: "350px",
                maxWidth: "100%",
                objectFit: "contain",
                marginTop: "2rem",
              }}
            />
          </section>
        </section>
      </main>
    </>
  );
}
