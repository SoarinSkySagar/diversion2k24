import React from 'react';
import Marquee from 'react-fast-marquee';
import TestimonyCard from './TestimonyCard';

export default function Testimonial() {
  return (
    <div id="testimonial" className="bg-[#52efae] w-screen py-24">
      <h1 className="text-3xl pl-8">Student Testimonials</h1>
      <Marquee pauseOnHover autoFill speed={70}>
        {/* Testimonial 1 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=1480&t=st=1694809555~exp=1694810155~hmac=fe674b570f76d97c999b30f43fef9e05c4d8a6e8552f9daf93d886eadf5f4f92"
          title="Life-Changing Tutoring"
          content="Joining the tutoring platform has been a life-changing experience for me. The personalized attention and expert guidance have significantly improved my understanding of challenging subjects."
          author="Sarah Johnson"
        />

        {/* Testimonial 2 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/smiling-indian-man-casual-close-with-laptop-backpack-pastel-wall_496169-1583.jpg?w=1480&t=st=1694809480~exp=1694810080~hmac=c85b9116233ab2d670098cc434afdcc050391f15768b94a544543e78ee941da9"
          title="Exceptional Support"
          content="The tutors on this platform provide exceptional support. They go above and beyond to ensure that I grasp concepts thoroughly. I'm more confident in my studies now."
          author="Alex Rodriguez"
        />

        {/* Testimonial 3 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1480&t=st=1694809506~exp=1694810106~hmac=c6ac4506b6a6693c514d15fe4bd9a4960a98fc5fe799699d5be9effe042635ba"
          title="Flexible Learning Schedule"
          content="The flexibility of scheduling tutoring sessions has been a game-changer for me. It allows me to balance my academic commitments while receiving the help I need."
          author="Emily Thompson"
        />

        {/* Testimonial 4 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?w=1480&t=st=1694809522~exp=1694810122~hmac=058eb3ce46ff6b8c175d8dc315609f33e58be4eaef35a4f509cd6fdb177ccbfe"
          title="Improved Grades"
          content="I've seen a significant improvement in my grades since joining the platform. The interactive and engaging sessions have made learning enjoyable and effective."
          author="Daniel Lee"
        />

        {/* Testimonial 5 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/mayadevi-dalai-temple-tibetan-india_1157-3316.jpg?w=1480&t=st=1694809456~exp=1694810056~hmac=c7549a4126ac0608caa59dc1894db77bcd439a1f46e7cd990b68d4020d17af97"
          title="Supportive Community"
          content="Being part of this tutoring community has created a supportive environment for my studies. I appreciate the collaborative learning atmosphere and the encouragement from both tutors and peers."
          author="Mia Garcia"
        />
      </Marquee>
      <Marquee pauseOnHover autoFill speed={70} direction="right">
        {/* Testimonial 6 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/handsome-young-man-with-arms-crossed-white-background_23-2148222620.jpg?w=740&t=st=1707037776~exp=1707038376~hmac=4380c739c52540bbb1f498f4d318a06258433db3a567c9a8c7ca1fa9a63dc51d"
          title="Personalized Learning Experience"
          content="The personalized learning experience offered by the tutors is invaluable. They tailor their approach to my learning style, making the material more accessible and enjoyable."
          author="Liam Wilson"
        />

        {/* Testimonial 7 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/lady-with-brown-eyes-is-smiling-red-wall_197531-16958.jpg?w=1060&t=st=1707037701~exp=1707038301~hmac=47b1c31ec50c574dd0192e2f4c52d9a8ff438bc21c12c3cf366be848742cec6b"
          title="Academic Confidence Boost"
          content="I've gained a significant boost in academic confidence through the guidance of dedicated tutors. This platform has truly been a supportive companion in my educational journey."
          author="Ava Davis"
        />

        {/* Testimonial 8 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?w=1060&t=st=1707037665~exp=1707038265~hmac=70b22a00952136b9c1b2c613788817f46b11e90a9699edcfc256274bf5ccbb20"
          title="Convenient and Accessible"
          content="The convenience and accessibility of this tutoring platform have made it easy for me to get help whenever I need it. It fits seamlessly into my busy schedule."
          author="Noah Smith"
        />

        {/* Testimonial 9 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/premium-photo/cheerful-indian-woman-with-crossed-hands_416902-2185.jpg?w=740"
          title="Inspiring Tutors"
          content="The tutors on this platform are not only knowledgeable but also inspiring. Their passion for teaching has motivated me to strive for excellence in my studies."
          author="Sophia Brown"
        />

        {/* Testimonial 10 */}
        <TestimonyCard
          imageSrc="https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?w=740&t=st=1707037760~exp=1707038360~hmac=307c4c0e6adeac1c8f21260f7f1e8df30ca30bdc9617934f08273c647089ccbb"
          title="Grateful for the Support"
          content="I'm genuinely grateful for the support I've received from the tutors. They have played a crucial role in my academic success, and I highly recommend this platform to fellow students."
          author="Ethan Taylor"
        />
      </Marquee>
    </div>
  );
}
