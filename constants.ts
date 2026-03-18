/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aura Linen Shirt',
    tagline: 'Breathe easy.',
    description: 'A lightweight linen shirt perfect for warm days. Breathable, natural, and effortlessly stylish.',
    longDescription: 'Crafted from 100% organic European linen, this shirt offers unparalleled breathability and comfort. The relaxed fit allows for natural movement, while the textured fabric adds a touch of understated elegance to any outfit.',
    price: 89,
    category: 'Tops',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['100% Organic Linen', 'Relaxed Fit', 'Breathable']
  },
  {
    id: 'p2',
    name: 'Aura Denim Classic',
    tagline: 'Timeless foundation.',
    description: 'Classic straight-leg jeans made from sustainable cotton. Built to last and age beautifully.',
    longDescription: 'Our classic denim is woven from sustainably sourced cotton and dyed using eco-friendly processes. The straight-leg cut provides a timeless silhouette that pairs perfectly with anything in your wardrobe. Over time, the denim will mold to your shape, creating a truly personalized fit.',
    price: 120,
    category: 'Bottoms',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Sustainable Cotton', 'Straight Leg', 'Eco-friendly Dye']
  },
  {
    id: 'p3',
    name: 'Aura Wool Coat',
    tagline: 'Embrace the chill.',
    description: 'A tailored wool blend coat that offers exceptional warmth without the bulk.',
    longDescription: 'Designed for the modern minimalist, this wool coat features clean lines and a structured fit. The premium wool blend provides superior insulation, keeping you warm during the colder months while maintaining a sleek, sophisticated profile.',
    price: 295,
    category: 'Outerwear',
    imageUrl: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Premium Wool Blend', 'Tailored Fit', 'Fully Lined']
  },
  {
    id: 'p4',
    name: 'Aura Essential Tee',
    tagline: 'Your daily uniform.',
    description: 'The perfect everyday t-shirt. Soft, durable, and ethically made.',
    longDescription: 'We spent months perfecting the fit and fabric of our Essential Tee. Made from a blend of organic cotton and modal, it drapes beautifully and feels incredibly soft against the skin. It\'s the foundational piece your wardrobe has been missing.',
    price: 45,
    category: 'Tops',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Organic Cotton Blend', 'Pre-shrunk', 'Crew Neck']
  },
  {
    id: 'p5',
    name: 'Aura Canvas Tote',
    tagline: 'Carry your world.',
    description: 'A sturdy, oversized canvas tote bag for all your daily essentials.',
    longDescription: 'Whether you\'re heading to the farmer\'s market or the office, the Aura Canvas Tote is your reliable companion. Constructed from heavy-duty organic cotton canvas, it features reinforced handles and a spacious interior with a convenient slip pocket.',
    price: 65,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Heavy-duty Canvas', 'Reinforced Handles', 'Interior Pocket']
  },
  {
    id: 'p6',
    name: 'Aura Tailored Trousers',
    tagline: 'Effortless polish.',
    description: 'Versatile trousers that transition seamlessly from work to weekend.',
    longDescription: 'These tailored trousers offer a relaxed yet refined look. The mid-weight fabric drapes elegantly, while the subtle pleat detailing adds a touch of sophistication. Pair them with a crisp shirt for the office or a casual tee for the weekend.',
    price: 110,
    category: 'Bottoms',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Relaxed Fit', 'Subtle Pleats', 'Versatile Styling']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Psychology of Texture",
        date: "April 12, 2025",
        excerpt: "Why our fingertips crave natural surfaces in a world of glass and plastic.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "We live in a frictionless world. Our phones are smooth glass, our laptops polished aluminum, our countertops engineered quartz. There is no resistance, no grit, no grain. And yet, our biology craves it."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "The fingertips are among the most densely innervated parts of the human body. They are designed to read the story of an object—its age, its origin, its temperature. When we deny them this input, we experience a subtle form of sensory deprivation."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "\"To touch is to know. To feel is to be grounded.\""
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "At Aura, we design for the hand as much as for the eye. We choose materials that have a voice. Sandstone that warms under your palm. Fabric that has a weave you can trace. Wood that remembers the forest."
            )
        )
    },
    {
        id: 2,
        title: "Living with Less",
        date: "March 28, 2025",
        excerpt: "A conversation with architect Hiroshi Nakamura on the art of empty space.",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Emptiness is not nothing. In Japanese architecture, the concept of ",
                React.createElement("em", null, "Ma"),
                " refers to the space between things—the pause that gives shape to the whole."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "\"We tend to fill our lives with noise,\" Nakamura says, sipping tea in his studio overlooking the rain-slicked streets of Kyoto. \"We buy more devices to save time, but we end up with less time than ever. True luxury is the absence of intrusion.\""
            ),
            React.createElement("div", { className: "my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center" },
                React.createElement("p", null, "The room is empty"),
                React.createElement("p", null, "But full of light."),
                React.createElement("p", null, "The mind is quiet"),
                React.createElement("p", null, "But full of thought."),
                React.createElement("p", null, "This is the weight"),
                React.createElement("p", null, "Of living with less.")
            ),
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "This philosophy drives every curve of our new collection. We asked ourselves: what can we remove? How much can we take away until only the essential remains?"
            )
        )
    },
    {
        id: 3,
        title: "Spring Moodboard",
        date: "March 15, 2025",
        excerpt: "Notes from the design studio: morning mist, wet stone, and pale linen.",
        image: "https://images.unsplash.com/photo-1516834474-48c0abc2a902?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Spring in the studio is a time of awakening. The light shifts from the harsh, low angles of winter to a softer, diffused glow. We find ourselves drawn to paler tones—the grey of wet pavement, the cream of unbleached linen, the dusty green of sage."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Our moodboard this month is a study in softness. It is about the transition state—neither cold nor hot, neither dark nor bright. It is the dawn of the year."
            ),
             React.createElement("div", { className: "my-12 p-8 bg-[#2C2A26] text-[#F5F2EB] font-serif italic text-center" },
                React.createElement("p", null, "Green sprout pushing through"),
                React.createElement("p", null, "Grey stone cold against the skin"),
                React.createElement("p", null, "The sun warms the air.")
            )
        )
    }
];

export const BRAND_NAME = 'Aura';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';