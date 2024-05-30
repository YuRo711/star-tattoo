import company1 from "../images/Company logo.svg";
import company2 from "../images/Company logo(1).svg";
import company3 from "../images/Company logo(2).svg";
import company4 from "../images/Company logo(3).svg";
import company5 from "../images/Company logo(4).svg";


export const companies = [
  company1, company2, company3, company4, company5,
];

export const questions = [
  {
    title: "What is the process?",
    text: (<ol className="question__list">
      <li className="question__item">
        <span className="question__bold">Consultation: </span>
        We'll discuss your ideas, preferences, and any questions you have.
      </li>
      <li className="question__item">
        <span className="question__bold">Design Creation: </span>
          Our talented artists will craft a custom design tailored to your vision or help you choose one from our catalogue.
      </li>
      <li className="question__item">
        <span className="question__bold">Approval: </span>
        You review the design and provide feedback for any adjustments.
      </li>
      <li className="question__item">
        <span className="question__bold">Tattooing: </span>
        Using top-quality equipment and techniques, we bring your design to life with precision and care.
      </li>
      <li className="question__item">
        <span className="question__bold">Aftercare Guidance: </span>
        We'll provide detailed instructions to ensure proper healing and long-lasting results.
      </li>
  </ol>),
  },
  {
    title: "How do you determine the price?",
    text: (<ol className="question__list">
        <li className="question__item">
          <span className="question__bold">Size: </span>
          Tattoo prices are often based on the size of the tattoo. Larger tattoos generally cost more than smaller ones. Some salons may charge per square inch or have set prices for different size categories.
        </li>
        <li className="question__item">
          <span className="question__bold">Complexity: </span>
          The complexity of the design plays a significant role in pricing. More intricate and detailed designs typically require more time and skill, leading to a higher cost.
        </li>
        <li className="question__item">
          <span className="question__bold">Color: </span>
          Tattoos with color typically cost more than black and gray tattoos. Vibrant colors can require more work and skill to achieve the desired result.
        </li>
      </ol>),
  },
  {
    title: "Can you draw any tatoos?",
    text: "Yes, we can! Our skilled artists specialize in creating custom designs tailored to your unique style and preferences. Let's bring your vision to life!",
  },
  {
    title: "What is your Location?",
    text: "We are located on 42 Placeholder St. in San Francisco, CA",
  },
];
