import Image from 'next/image';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const testimonials = [
    {
      img: '/path/to/image1.jpg',
      name: 'John Doe',
      address: 'New York, NY',
      testimonial: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
      img: '/path/to/image2.jpg',
      name: 'Jane Smith',
      address: 'Los Angeles, CA',
      testimonial: `It is a long established fact that a reader will be distracted by the readable 
      content of a page when looking at its layout.`,
    },
    {
      img: '/path/to/image3.jpg',
      name: 'Alice Johnson',
      address: 'Chicago, IL',
      testimonial: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
      in a piece of classical Latin literature from 45 BC.`,
    },
  ];

  return (
    <div className="space-y-8">
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
  );
}
