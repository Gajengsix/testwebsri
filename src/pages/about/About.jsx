import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import VisionImage from "../../images/about2.jpg";
import StoryImage from "../../images/about1.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        delectus recusandae velit repellendus nesciunt, cupiditate quibusdam,
        quia possimus ab illo ipsa, laudantium molestias nihil accusamus aperiam
        iure natus odio aliquid.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita maxime dolorem quasi inventore veritatis, nemo quidem
              temporibus amet atque porro dolores vero nihil autem natus quae
              ipsam dolore cupiditate impedit molestiae similique. Nisi
              dignissimos quidem, consequatur ad illum delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              eius exercitationem sunt, vitae perferendis consequatur commodi
              cumque illo recusandae dicta ducimus, eaque dolores ab architecto
              accusamus officiis quia velit asperiores numquam quisquam? Quo
              inventore quisquam, ut provident numquam consequuntur. Officia
              veniam accusamus hic soluta? Ut, ex animi a delectus quaerat
              exercitationem quidem facilis. Dolore, perspiciatis ab!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut
              molestias aliquam temporibus sint culpa voluptatibus quidem,
              perferendis dele ctus tempora accusantium iste, soluta voluptatem
              nisi ducimus, consequatur poss imus reiciendis expedita!
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita maxime dolorem quasi inventore veritatis, nemo quidem
              temporibus amet atque porro dolores vero nihil autem natus quae
              ipsam dolore cupiditate impedit molestiae similique. Nisi
              dignissimos quidem, consequatur ad illum delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              eius exercitationem sunt, vitae perferendis consequatur commodi
              cumque illo recusandae dicta ducimus, eaque dolores ab architecto
              accusamus officiis quia velit asperiores numquam quisquam? Quo
              inventore quisquam, ut provident numquam consequuntur. Officia
              veniam accusamus hic soluta? Ut, ex animi a delectus quaerat
              exercitationem quidem facilis. Dolore, perspiciatis ab!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita maxime dolorem quasi inventore veritatis, nemo quidem
              temporibus amet atque porro dolores vero nihil autem natus quae
              ipsam dolore cupiditate impedit molestiae similique. Nisi
              dignissimos quidem, consequatur ad illum delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              eius exercitationem sunt, vitae perferendis consequatur commodi
              cumque illo recusandae dicta ducimus, eaque dolores ab architecto
              accusamus officiis quia velit asperiores numquam quisquam? Quo
              inventore quisquam, ut provident numquam consequuntur. Officia
              veniam accusamus hic soluta? Ut, ex animi a delectus quaerat
              exercitationem quidem facilis. Dolore, perspiciatis ab!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
