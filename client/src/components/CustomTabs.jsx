import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

export default function CustomTabs() {
  return (
    <div>
      <Tabs isFitted position="relative" variant="styled">
        <TabList>
          <Tab className="text-[#221389] lg:text-2xl focus:outline-none focus:border-none focus:ring-2 focus:ring-[#221389] font-bold sm:font-semibold">
            FOR TUTORS
          </Tab>
          <Tab className="text-[#221389] lg:text-2xl focus:outline-none focus:border-none focus:ring-2 focus:ring-[#221389] font-bold sm:font-semibold">
            FOR STUDENTS
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="[#221389]"
          borderRadius="1px"
        />
        <TabPanels className="p-4">
          <TabPanel>
            <div>
              <ul className="flex flex-col gap-3 list-disc lg:text-xl">
                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Flexible Schedule:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Tutors can choose convenient time slots, allowing them to
                    balance part-time tutoring with their college commitments.
                  </span>
                </li>

                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Skill Enhancement:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Teaching younger students hones communication and mentoring
                    skills, contributing to personal and professional
                    development.
                  </span>
                </li>

                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Extra Income:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Tutors can earn additional income while utilizing their
                    academic expertise, providing financial benefits during
                    their college years.
                  </span>
                </li>

                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Community Impact:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Contributing to the educational growth of neighboring kids
                    fosters a sense of community and social responsibility among
                    the tutors.
                  </span>
                </li>

                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Portfolio Building:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Tutoring experience adds value to resumes, showcasing a
                    commitment to education and the ability to explain complex
                    concepts.
                  </span>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <ul className="flex flex-col gap-3 list-disc lg:text-xl">
                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Personalized Learning:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Students receive individual attention, allowing for
                    personalized learning experiences tailored to their specific
                    needs and pace.
                  </span>
                </li>

                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Academic Support:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Tutors offer assistance with challenging subjects, enhancing
                    understanding and boosting overall academic performance.
                  </span>
                </li>

                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Mentorship:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Students benefit from mentorship, gaining insights into
                    effective study habits, time management, and educational
                    pathways.
                  </span>
                </li>

                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Confidence Building:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Successful tutoring experiences contribute to increased
                    confidence, empowering students to tackle academic
                    challenges independently.
                  </span>
                </li>

                <li>
                  <span className="text-black not-italic font-normal leading-[148.5%] tracking-[1.875px] uppercase">
                    Access to Resources:
                  </span>
                  <span className="text-[#221389] not-italic font-normal leading-[148.5%] tracking-[1.875px]">
                    Tutors can share supplementary materials and resources,
                    providing students with valuable study aids and reference
                    materials.
                  </span>
                </li>
              </ul>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
