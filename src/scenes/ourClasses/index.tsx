import { SelectedPage, ClassType } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from "./Class"

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "This class is designed to develop your full body STRENGTH! Each class includes 8 strength exercises with perfect form and control to hit the whole body. Plus, we always end with a finisher exercise to make sure you leave with those post-workout endorphins rushing round your body!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: 
    "Experience mind and body connection through a series of disciplined physical postures, breathing exercises and relaxation. You’ll be increasing flexibility and balancing all parts of the body through this strengthening workout. Yoga can help reduce stress levels and improve overall health.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Core exercises train the muscles in your core to work in harmony. This leads to better balance and steadiness, also called stability. Stability is important whether you're on the playing field or doing regular activities.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "A class designed to target the area we all love to hate! Whether your goal is a 6 pack or a flat stomach… crunch, twist and plank your way to the abs you’ve always wanted. Are you ready to put your core to the test?",
    image: image5,
  },
  {
    name: "Training Classes",
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x:-50},
              visible: { opacity: 1, x: 0}
            }}
        >
          <div className="md:w-3/5">
            <HText>
              OUR CLASSES
            </HText>
            <p className="py-5">
            Our group exercise programs provide a fun, safe, well balanced, 
            effective workout.  We offer a selection of classes that focus on
            everything you're looking for from cardiovascular conditioning, 
            strength, flexibility, to mind/body awareness.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              /> 
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses;
