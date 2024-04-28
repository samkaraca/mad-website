import styles from "./output.module.scss";

interface Data {
    [year: string]: string[];
  }

const data: Data = {
    "2020": [
        "Gressel, S., Pauleen, D. J., & Taskin, N. (2020). Management Decision-Making, Big Data and Analytics. SAGE.",
    ],
    "2018": [
      "Intezari, A., & Pauleen, D. (2018). Wisdom, analytics and wicked problems: Integral decision making for the data age. Taylor & Francis."
    ],
    "2016": [
        "Intezari Harsini, A. (2016). Conceptualizing wisdom: Theoretical perspectives. In Practical wisdom in the age of technology: Insights, issues and questions for a new millennium. London: Routledge Publishing [Chapter]Authored by: Intezari Harsini, A.",
        "Intezari Harsini, A., & McKenna, B.(2016). Are Australian banks missing the opportunity in Iran?",
        "Intezari Harsini, A. (2016). Practical wisdom through Sustainability: A meta-approach. In SO. Idowu, & R. Schmidpeter (Eds.) Cultural Roots of Sustainable Management: Practical Wisdom and Corporate Social Responsibility. (pp. 23 - 38). London: Springer [Chapter]Authored by: Intezari Harsini, A.",
      ],
    "2015": [
        "Dalal, N., Intezari Harsini, A., & Heitz, M. (Eds.) (2015). Practical wisdom in the age of technology: Insights, issues and questions for a new millennium. Surrey, England: Routledge [Edited Book]Authored by: Intezari Harsini, A.",
        "Scahill, SL. (2015). Concept Mapping and Pattern Matching in Pharmacy Practice Research. In ZUD. Babar (Ed.) Pharmacy Practice Research Methods. [Chapter]Authored by: Scahill, S",
        "Scahill, SL. (2015). Applying Organisational Theory in Pharmacy Practice Research. In ZUD. Babar (Ed.) Pharmacy Practice Research Methods. [Chapter]Authored by: Scahill, S."
    ],
    "2013": [
        "Pauleen, D., & Kupers, W. (2013). A handbook of practical wisdom: Leadership, organization and integral business practice. Gower. [Edited Book] Authored by: Pauleen, D. Edited by: Pauleen, D.",
        "Intezari, A., & Pauleen, DJ. (2013). Students of wisdom: An integral meta-competencies theory of practical wisdom. In DJ. Pauleen, & W. Kupers (Eds.) A Handbook of Practical Wisdom.(pp. 155 - 175). Gower. [Chapter] Authored by: Intezari Harsini, A., Pauleen, D."
    ],
    "2011":[
        "Deokar, AV., & Taskin, N. (2011). On Flexibility in Business Process Management Systems. In V. Shankararaman, JL. Zhao, & JK. Lee (Eds.) Business Process Management: Concepts, Technologies and Applications. M. E. Sharpe, Inc.[Chapter]Authored by: Nazim Taskin"
    ]
  }
  

  export default function Output() {
    const years = Object.keys(data).sort((a, b) => b.localeCompare(a)); // Sort years descending
    
    return (
    <>
    <img src="../../OutputBanner.jpg"></img>
    <h1>All Publications By The MAD Research Group</h1>
      <div>
        {years.map((year, index) => {
          // Calculate class name index, cycles through 1, 2, 3
          const classNameIndex = (index % 3) + 1;
          const className = `${styles["year-block"]} ${styles["themed-container-"+classNameIndex]}`
          
          return (
            <div key={year} className={className}>
              <h2>{year}</h2>
                <hr></hr>
                <ul>{(data[year] as string[]).map((ref):any => {
                    return(<li key={ref}>{ref}</li>)
                } 
                )}</ul>
            </div>
          );
        })}
      </div>
      </>
    );
  }