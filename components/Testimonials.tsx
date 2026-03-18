import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The linen shirt is an absolute dream. It fits perfectly and the fabric feels incredibly premium. I've worn it almost every day since it arrived.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Finally found a pair of trousers that look professional but feel like sweatpants. The tailoring is spot on. Highly recommend the Aura collection.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    text: "Beautiful minimalist designs that actually last. You can tell the materials are high quality. The wool coat kept me warm all winter.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-32 px-6 md:px-12 bg-[#F5F2EB]">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-6">Customer Reviews</h2>
          <p className="text-lg text-[#5D5A53]">What our community is saying about Aura.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center p-8 border border-[#D6D1C7] bg-white/50">
              <div className="flex gap-1 mb-6 text-[#2C2A26]">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#5D5A53] italic mb-8 flex-grow">"{review.text}"</p>
              <p className="text-sm font-medium uppercase tracking-widest text-[#2C2A26]">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
