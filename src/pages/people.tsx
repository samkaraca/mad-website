import styles from "./people.module.scss";

interface AcademicProfile {
    name: string;
    title: string;
    imgUrl: string;
    office: string;
    email: string;
    personalWebsite: string;
    socialMedia: string;
    researchInterests: string[];
    about: string;
    bookChapters: string[];
    journals: string[];
    thesis: string[];
  }

const data: AcademicProfile = {
    "name": "David Pauleen",
    "title": "Professor",
    "imgUrl": "../../people/david.jpg",
    "office": "Room 301, History Building",
    "email": "dpauleen@university.edu",
    "personalWebsite": "example.edu/davidpauleen",
    "socialMedia": "@dpauleenmad",
    "researchInterests": ["Medieval Europe", "Women's History", "Manuscript Studies"],
    "about": "Professor Pauleen is a historian specializing in the study of medieval Europe. His work focuses on the experiences of women during the Middle Ages, and she is particularly interested in the intersection of gender, religion, and power.",
    "bookChapters": ["Gressel, S., Pauleen, D. J., & Taskin, N. (2020). Management Decision-Making, Big Data and Analytics. SAGE.",
        "Intezari, A., & Pauleen, D. (2018). Wisdom, analytics and wicked problems: Integral decision making for the data age. Taylor & Francis.",
        "Pauleen, D., & Kupers, W. (2013). A handbook of practical wisdom: Leadership, organization and integral business practice. Gower. [Edited Book] Authored by: Pauleen, D. Edited by: Pauleen, D.",
        "Intezari, A., & Pauleen, DJ. (2013). Students of wisdom: An integral meta-competencies theory of practical wisdom. In DJ. Pauleen, & W. Kupers (Eds.) A Handbook of Practical Wisdom.(pp. 155 - 175). Gower. [Chapter] Authored by: Intezari Harsini, A., Pauleen, D."],
    "journals": ["Dalal, N., & Pauleen, DJ. (2018). The wisdom nexus: Guiding information systems research, practice, and education. Information Systems Journal.",

        "Pauleen, DJ., & Wang, WYC. (2017). Does big data mean big knowledge? KM perspectives on big data and analytics. Journal of Knowledge Management. 21(1), 1-6",
        
        "Zhang, T., Wang, WYC., & Pauleen, DJ. (2017). Big data investments in knowledge and non-knowledge intensive firms: what the market tells us. Journal of Knowledge Management. 21(3)",
        
        "Pauleen, DJ. (2017). Dave Snowden on KM and big data/analytics: interview with David J. Pauleen. Journal of Knowledge Management. 21(1), 12-17",
        
        "Wang, WYC., Pauleen, DJ., & Zhang, T. (2016). How social media applications affect B2B communication and improve business performance in SMEs. Industrial Marketing Management. 54, 4-14",
        
        "Thistoll, T., Hooper, V., & Pauleen, DJ. (2015). Acquiring and developing theoretical sensitivity through undertaking as grounded preliminary literature review. International Journal of Quality and Quantity. [Journal article]Authored by: Pauleen, D",
        
        "Pauleen, D., Rooney, D. & Holden, N. (2010) “Practical Wisdom and the Development of Cross-cultural Knowledge Management: A global leadership perspective”. European Journal of International Management. Vol.4, No. 2, 382-395.",
        
        "Murphy P. & Pauleen D.(2007) “Managing paradox in a world of global knowledge”. Management Decision. Vol. 45, (6), 1008-1022"],
       "thesis":[], 
    }

export default function People() {
    return (
        <>
            <div className = {styles["profile"]}>
                <div className = {styles["header"]}>
                    <img src={data.imgUrl}></img>
                    <div>
                        <h2>{data.name}</h2>
                        <p>{data.title}</p>
                    </div>
                </div>
                <div className = {styles["basics"]}>
                    {data.office && <div>
                        <h4>Office</h4>
                        <p>{data.office}</p>
                        </div>}
                        {data.email && <div>
                        <h4>Email</h4>
                        <p>{data.email}</p>
                        </div>}
                        {data.personalWebsite && <div>
                        <h4>Personal Website</h4>
                        <p>{data.personalWebsite}</p>
                        </div>}
                        {data.socialMedia && <div>
                        <h4>Social Media</h4>
                        <p>{data.socialMedia}</p>
                        </div>}
                </div>
                <hr></hr>
                <div className = {styles["basics"]}>
                    <div>
                    <h3>Research Interests</h3>
                    <ul>{(data.researchInterests as string[]).map((topic): any => {
                        return(<li key={topic}>{topic}</li>)
                    })}</ul>
                    </div>
                    <div>
                    <h3>About</h3>
                    <p>{data.about}</p>
                    </div>
                </div>
                <hr></hr>
                <div>
                {data.bookChapters && data.bookChapters.length > 0 && <div>
                        <h3>Book Chapters</h3>
                        <ul>{(data.bookChapters as string[]).map((ref): any => {
                        return(<li key={ref}>{ref}</li>)
                    })}</ul>
                        </div>}
                </div>
                {data.journals && data.journals.length > 0 && <hr></hr>}
                <div>
                {data.journals && data.journals.length > 0 && <div>
                        <h3>Journals</h3>
                        <ul>{(data.journals as string[]).map((ref): any => {
                        return(<li key={ref}>{ref}</li>)
                    })}</ul>
                        </div>}
                </div>
                {data.thesis && data.thesis.length > 0 && <hr></hr>}
                <div>
                {data.thesis && data.thesis.length > 0 && <div>
                        <h3>Thesis</h3>
                        <ul>{(data.thesis as string[]).map((ref): any => {
                        return(<li key={ref}>{ref}</li>)
                    })}</ul>
                        </div>}
                </div>
            </div>
        </>
    )
}