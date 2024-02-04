import React from 'react';
import Marquee from 'react-fast-marquee';
import TestimonyCard from './TestimonyCard';

export default function Testimonial() {
  return (
    <div id="testimonial" className="bg-[#52efae] w-screen py-24">
      <h1 className="text-3xl pl-8">Testimonials</h1>
      <Marquee pauseOnHover autoFill speed={70}>
        {/* Testimonial 1 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/mayadevi-dalai-temple-tibetan-india_1157-3316.jpg?w=1480&t=st=1694809456~exp=1694810056~hmac=c7549a4126ac0608caa59dc1894db77bcd439a1f46e7cd990b68d4020d17af97"
          title="Exceptional Service"
          content="I can't express how satisfied I am with DERMACURE.AI's service. They saved me a trip to the dermatologist and provided accurate advice promptly."
          author="Alice Smith"
        />

        {/* Testimonial 2 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?w=1480&t=st=1694809522~exp=1694810122~hmac=058eb3ce46ff6b8c175d8dc315609f33e58be4eaef35a4f509cd6fdb177ccbfe"
          title="Life-Changing Experience"
          content="DERMACURE.AI has truly changed my life. Their recommendations have helped me manage my skin issues better than any other solution I've tried."
          author="Bob Johnson"
        />

        {/* Testimonial 3 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1480&t=st=1694809506~exp=1694810106~hmac=c6ac4506b6a6693c514d15fe4bd9a4960a98fc5fe799699d5be9effe042635ba"
          title="Highly Recommended"
          content="I highly recommend DERMACURE.AI to anyone looking for dermatological advice. It's convenient, reliable, and the support team is excellent."
          author="Emily Davis"
        />

        {/* Testimonial 4 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/smiling-indian-man-casual-close-with-laptop-backpack-pastel-wall_496169-1583.jpg?w=1480&t=st=1694809480~exp=1694810080~hmac=c85b9116233ab2d670098cc434afdcc050391f15768b94a544543e78ee941da9"
          title="A Game Changer"
          content="DERMACURE.AI is a game changer in the skincare industry. It's like having a personal dermatologist in your pocket. I'm thrilled with the results."
          author="David Williams"
        />

        {/* Testimonial 5 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=1480&t=st=1694809555~exp=1694810155~hmac=fe674b570f76d97c999b30f43fef9e05c4d8a6e8552f9daf93d886eadf5f4f92"
          title="Impressive Service"
          content="I'm genuinely impressed with the level of service provided by DERMACURE.AI. It's user-friendly, accurate, and has improved my skin health significantly."
          author="Olivia Brown"
        />
      </Marquee>
      <Marquee pauseOnHover autoFill speed={70} direction="right">
        {/* Testimonial 1 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/mayadevi-dalai-temple-tibetan-india_1157-3316.jpg?w=1480&t=st=1694809456~exp=1694810056~hmac=c7549a4126ac0608caa59dc1894db77bcd439a1f46e7cd990b68d4020d17af97"
          title="Exceptional Service"
          content="I can't express how satisfied I am with DERMACURE.AI's service. They saved me a trip to the dermatologist and provided accurate advice promptly."
          author="Alice Smith"
        />

        {/* Testimonial 2 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?w=1480&t=st=1694809522~exp=1694810122~hmac=058eb3ce46ff6b8c175d8dc315609f33e58be4eaef35a4f509cd6fdb177ccbfe"
          title="Life-Changing Experience"
          content="DERMACURE.AI has truly changed my life. Their recommendations have helped me manage my skin issues better than any other solution I've tried."
          author="Bob Johnson"
        />

        {/* Testimonial 3 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1480&t=st=1694809506~exp=1694810106~hmac=c6ac4506b6a6693c514d15fe4bd9a4960a98fc5fe799699d5be9effe042635ba"
          title="Highly Recommended"
          content="I highly recommend DERMACURE.AI to anyone looking for dermatological advice. It's convenient, reliable, and the support team is excellent."
          author="Emily Davis"
        />

        {/* Testimonial 4 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/smiling-indian-man-casual-close-with-laptop-backpack-pastel-wall_496169-1583.jpg?w=1480&t=st=1694809480~exp=1694810080~hmac=c85b9116233ab2d670098cc434afdcc050391f15768b94a544543e78ee941da9"
          title="A Game Changer"
          content="DERMACURE.AI is a game changer in the skincare industry. It's like having a personal dermatologist in your pocket. I'm thrilled with the results."
          author="David Williams"
        />

        {/* Testimonial 5 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=1480&t=st=1694809555~exp=1694810155~hmac=fe674b570f76d97c999b30f43fef9e05c4d8a6e8552f9daf93d886eadf5f4f92"
          title="Impressive Service"
          content="I'm genuinely impressed with the level of service provided by DERMACURE.AI. It's user-friendly, accurate, and has improved my skin health significantly."
          author="Olivia Brown"
        />
      </Marquee>
    </div>
  );
}