"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    position: "CEO, TechStart",
    company: "TechStart",
    avatar: "👩‍💼",
    testimonial:
      "Un développeur exceptionnel ! Son expertise technique et sa capacité à comprendre nos besoins ont fait de notre collaboration un véritable succès. Le projet a été livré en avance avec une qualité irréprochable.",
    rating: 5,
  },
  {
    name: "Jean Martin",
    position: "CTO, Digital Solutions",
    company: "Digital Solutions",
    avatar: "👨‍💻",
    testimonial:
      "Travailler avec lui a été une expérience formidable. Non seulement il maîtrise les technologies modernes, mais il apporte aussi des idées innovantes qui ont considérablement amélioré notre produit.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    position: "Product Manager, InnovateCo",
    company: "InnovateCo",
    avatar: "👩‍🎨",
    testimonial:
      "Communication claire, délais respectés et code de haute qualité. C'est un professionnel sur qui on peut compter. Je le recommande vivement pour tout projet web ou mobile.",
    rating: 5,
  },
  {
    name: "Thomas Petit",
    position: "Founder, StartupXYZ",
    company: "StartupXYZ",
    avatar: "👨‍💼",
    testimonial:
      "Il a transformé notre vision en réalité. Son approche méthodique et son attention aux détails ont permis de créer une application qui dépasse nos attentes. Un vrai plaisir de collaborer ensemble.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section
      id="testimonials"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="gradient-text">Témoignages</span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-400 max-w-2xl text-center">
            Ce que disent mes clients et partenaires
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-indigo-500/50" />
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  `&quot;`{testimonials[currentIndex].testimonial}`&quot;`
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-5xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-indigo-400">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-indigo-500 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-indigo-500 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
