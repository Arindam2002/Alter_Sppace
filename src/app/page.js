import Image from 'next/image';
import testimonials from './testimonials.json';
import TestimonialCard from '@/components/Testimonial/TestimonialCard';
import services from './services.json';
import ServicesCard from '@/components/ServicesCard/ServicesCard';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import mainimg from '/public/assets/mainimg.png';
import hero from '/public/assets/hero.png';

import { FaSearch, FaDollarSign, FaLightbulb, FaThLarge } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <div className="hero-section">
        <Navbar />

        <div className="hero-section-contents">
          <div className="hero-section-contents-main">
            <h1>Unique, Efficient and Cost Effective Solutions</h1>
            <p>
              ALTER SPPACE caters in Glass Partitions, Facades & related
              products and serve its clients with the goal of optimizing the
              value of their construction investment. We work to identify and
              deliver outstanding value in a manner that will result in high
              quality, cost efficient and elegant outcomes.
            </p>

            <a href="cta-btn">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Image
          src={mainimg}
          alt="mainimg"
          className="main-image"
          width={500}
          height={300}
        />

        <div className="main-description">
          <h2>
            We are professionals with an average of more than 15 yrs. of
            experience
          </h2>
          <p>
            We are a group of professionals with an average of more than 15 yrs.
            of experience in SERVICE INDUSTRY in Indian as well as in
            international market. In a short span of time we have accumulated an
            impressive track record in this region of credibility and trust. To
            reach out to more and more clients we have been investing in
            grooming several interior designers and designing enthusiastic. We
            firmly believe that the interior design industry in India is in its
            nascent stage and will grow drastically and AlterSpace hope to
            contribute immensely to the development of this industry as we build
            on our credentials and accolades. Our team understands the
            challenges of the home decor industry, especially balancing the
            three most important pillars: Budget, Delivery Schedule, and
            Creativity with durability.
          </p>

          <div className="pillars-container">
            <div className="pillar">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M9.108 12.258L11.392 9.96797L9.339 7.90797L8.18 9.06597L7.472 8.35797L8.625 7.19997L6.673 5.24797L4.383 7.53797L9.108 12.258ZM16.942 20.098L19.232 17.808L17.281 15.856L16.123 17.008L15.416 16.3L16.567 15.142L14.527 13.108L12.242 15.392L16.942 20.098ZM7.153 20.5H4V17.346L8.394 12.952L3 7.53897L6.673 3.86597L12.112 9.28497L16.579 4.81197C16.689 4.7013 16.805 4.62163 16.927 4.57297C17.049 4.5243 17.179 4.49997 17.317 4.49997C17.455 4.49997 17.585 4.5243 17.707 4.57297C17.829 4.62163 17.9453 4.7013 18.056 4.81197L19.688 6.50797C19.7987 6.61797 19.8753 6.73397 19.918 6.85597C19.9607 6.97797 19.9817 7.10797 19.981 7.24597C19.9803 7.38397 19.959 7.50997 19.917 7.62397C19.875 7.73797 19.799 7.84997 19.689 7.95997L15.259 12.414L20.635 17.827L16.96 21.5L11.547 16.106L7.153 20.5ZM5 19.5H6.727L16.547 9.68597L14.813 7.95397L5 17.773V19.5ZM15.692 8.81397L14.814 7.95397L16.546 9.68697L15.692 8.81397Z"
                    fill="#F8952D"
                  />
                </svg>
              </div>
              <p className="pillar-text">Creativity</p>
            </div>
            <div className="pillar">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M9.108 12.258L11.392 9.96797L9.339 7.90797L8.18 9.06597L7.472 8.35797L8.625 7.19997L6.673 5.24797L4.383 7.53797L9.108 12.258ZM16.942 20.098L19.232 17.808L17.281 15.856L16.123 17.008L15.416 16.3L16.567 15.142L14.527 13.108L12.242 15.392L16.942 20.098ZM7.153 20.5H4V17.346L8.394 12.952L3 7.53897L6.673 3.86597L12.112 9.28497L16.579 4.81197C16.689 4.7013 16.805 4.62163 16.927 4.57297C17.049 4.5243 17.179 4.49997 17.317 4.49997C17.455 4.49997 17.585 4.5243 17.707 4.57297C17.829 4.62163 17.9453 4.7013 18.056 4.81197L19.688 6.50797C19.7987 6.61797 19.8753 6.73397 19.918 6.85597C19.9607 6.97797 19.9817 7.10797 19.981 7.24597C19.9803 7.38397 19.959 7.50997 19.917 7.62397C19.875 7.73797 19.799 7.84997 19.689 7.95997L15.259 12.414L20.635 17.827L16.96 21.5L11.547 16.106L7.153 20.5ZM5 19.5H6.727L16.547 9.68597L14.813 7.95397L5 17.773V19.5ZM15.692 8.81397L14.814 7.95397L16.546 9.68697L15.692 8.81397Z"
                    fill="#F8952D"
                  />
                </svg>
              </div>
              <p className="pillar-text">Durability</p>
            </div>
            <div className="pillar">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M9.108 12.258L11.392 9.96797L9.339 7.90797L8.18 9.06597L7.472 8.35797L8.625 7.19997L6.673 5.24797L4.383 7.53797L9.108 12.258ZM16.942 20.098L19.232 17.808L17.281 15.856L16.123 17.008L15.416 16.3L16.567 15.142L14.527 13.108L12.242 15.392L16.942 20.098ZM7.153 20.5H4V17.346L8.394 12.952L3 7.53897L6.673 3.86597L12.112 9.28497L16.579 4.81197C16.689 4.7013 16.805 4.62163 16.927 4.57297C17.049 4.5243 17.179 4.49997 17.317 4.49997C17.455 4.49997 17.585 4.5243 17.707 4.57297C17.829 4.62163 17.9453 4.7013 18.056 4.81197L19.688 6.50797C19.7987 6.61797 19.8753 6.73397 19.918 6.85597C19.9607 6.97797 19.9817 7.10797 19.981 7.24597C19.9803 7.38397 19.959 7.50997 19.917 7.62397C19.875 7.73797 19.799 7.84997 19.689 7.95997L15.259 12.414L20.635 17.827L16.96 21.5L11.547 16.106L7.153 20.5ZM5 19.5H6.727L16.547 9.68597L14.813 7.95397L5 17.773V19.5ZM15.692 8.81397L14.814 7.95397L16.546 9.68697L15.692 8.81397Z"
                    fill="#F8952D"
                  />
                </svg>
              </div>
              <p className="pillar-text">Budget Friendly</p>
            </div>
          </div>
        </div>
      </div>

      <div className="specifications">
        <div className="specification-item">
          <div className="specification-icon">
            <FaSearch color="#F8952D" />
          </div>
          <p>Glass specification consultation</p>
          <p className="specification-description">
            Expert consultation on glass solutions to ensure the best fit for
            your project needs.
          </p>
        </div>
        <div className="specification-item">
          <div className="specification-icon">
            <FaDollarSign color="#F8952D" />
          </div>
          <p>Competitive pricing</p>
          <p className="specification-description">
            Offering competitive pricing without compromising on quality or
            service.
          </p>
        </div>
        <div className="specification-item">
          <div className="specification-icon">
            <FaLightbulb color="#F8952D" />
          </div>
          <p>Innovative Solutions</p>
          <p className="specification-description">
            Cutting-edge architectural glass solutions tailored to enhance both
            functionality and aesthetics.
          </p>
        </div>
        <div className="specification-item">
          <div className="specification-icon">
            <FaThLarge color="#F8952D" />
          </div>
          <p>Comprehensive Range of Products</p>
          <p className="specification-description">
            Diverse product offerings, including glass partitions, windows,
            railings, and shower enclosures, to suit various architectural
            styles and requirements.
          </p>
        </div>
      </div>

      <div className="services">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-cards">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              index={index}
              img={service.img}
              title={service.title}
              where={service.where}
            />
          ))}
        </div>
      </div>

      <div className="testimonial">
        <h2 className="testimonial-heading">What the People Think About Us</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              img={testimonial.img}
              name={testimonial.name}
              address={testimonial.address}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
