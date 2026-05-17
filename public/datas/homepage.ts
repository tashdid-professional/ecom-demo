export interface Testimonial {
  id: number;
  content: string;
  author: string;
}

export interface ServiceStat {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface BannerSlide {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  buttonLink: string;
}

export interface TimelineData {
  id: number;
  subtitle: string;
  title: string;
  description1: string;
  description2: string;
  buttonText: string;
  buttonLink: string;
  sideImage?: string;
  isReversed: boolean;
}

export interface Quality {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface InstagramPost {
  id: number;
  image: string;
  title: string;
  category: string;
  link: string;
}

export interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  featuredImage: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  tiktok: string;
  pinterest?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "I don't work with a glam squad to get me together for the red carpet, I really enjoy the time it takes to do it myself, to choose my clothes and do my own makeup and my own hair.",
    author: "Dita Von Teese",
  },
  {
    id: 2,
    content: "Beauty is about being comfortable in your own skin. It's about knowing and accepting who you are.",
    author: "Ellen DeGeneres",
  },
  {
    id: 3,
    content: "The most beautiful thing you can wear is confidence.",
    author: "Blake Lively",
  },
];

export const serviceStats: ServiceStat[] = [
  {
    id: 1,
    number: "42",
    title: "ON-LINE PURCHASE",
    description: "At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu",
  },
  {
    id: 2,
    number: "57",
    title: "FREE SHIPPING",
    description: "At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu",
  },
  {
    id: 3,
    number: "32",
    title: "MONEY BACK",
    description: "At vero eos et accusamus et iusto odio digniss ducimus qui blanditiis praesentium volu",
  },
];

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    subtitle: "velvet beauty",
    title: "SUMMER LOOK",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores te quas",
    image: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonLink: "#featured-products",
  },
  {
    id: 2,
    subtitle: "natural glow",
    title: "PURE ELEGANCE",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonLink: "#featured-products",
  },
  {
    id: 3,
    subtitle: "timeless style",
    title: "MODERN CLASSIC",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem",
    image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonLink: "#featured-products",
  },
];

export const timelineData: TimelineData[] = [
  {
    id: 1,
    subtitle: "Timeline",
    title: "HOW DID WE GET HERE",
    description1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti",
    description2: "At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi",
    buttonText: "FIND BEAUTY",
    buttonLink: "/about",
    sideImage: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1200",
    isReversed: true,
  },
  {
    id: 2,
    subtitle: "Timeline",
    title: "WHAT IT TAKES TO LEAD",
    description1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti",
    description2: "At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi",
    buttonText: "FIND BEAUTY",
    buttonLink: "/collections",
    sideImage: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1200",
    isReversed: false,
  },
];

export const shopHeader = {
  image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg"
};

export const blogHeader = {
  image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg"
};

export const qualities: Quality[] = [
  {
    id: 1,
    icon: "https://images.pexels.com/photos/3966569/pexels-photo-3966569.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "FRAGRANCE",
    description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
  },
  {
    id: 2,
    icon: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "QUALITY",
    description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
  },
  {
    id: 3,
    icon: "https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "PETROLEUM",
    description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
  },
  {
    id: 4,
    icon: "https://images.pexels.com/photos/2080527/pexels-photo-2080527.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "COLORS",
    description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
  },
  {
    id: 5,
    icon: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "NATURAL",
    description: "At vero eos et accusamus et iusto odio dignissi mos ducimus qui blanditiis praesentium",
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "SCRATCH EYELINER",
    category: "Beauty, Cosmetics",
    link: "https://www.adoxstudio.com"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "SOFT BRUSHSET",
    category: "Beauty, Tools",
    link: "https://www.instagram.com"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/2080527/pexels-photo-2080527.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "NUDE PALETTE",
    category: "Makeup, Pallete",
    link: "https://www.instagram.com"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "ORGANIC GLOW",
    category: "Skincare, Beauty",
    link: "https://www.instagram.com"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "MATTE LIPSTICK",
    category: "Beauty, Lip",
    link: "https://www.instagram.com"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "CONTOUR KIT",
    category: "Makeup, Face",
    link: "https://www.instagram.com"
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "GLAM EYES",
    category: "Beauty, Eyes",
    link: "https://www.instagram.com"
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/3618606/pexels-photo-3618606.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "DAILY ROUTINE",
    category: "Skincare, Natural",
    link: "https://www.instagram.com"
  }
];

export const aboutData: AboutData = {
  subtitle: "perfect shades",
  title: "ABOUT THIS COSMETIC BRAND",
  description: "At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi. At vero eos et accusamus et iusto odi. No brute nominati elaboraret ius, eu sint omnesque deserunt mei. Audiam vidisse debitis ea pro, nec in natum indoctum. Et cum alia comprehensam. Sumo ornatus ad per, pri ei epicuri consulatu, quod justo pro an. Et sed nihil pericula. In wisi rationibus pri.",
  featuredImage: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

export const socialLinks: SocialLinks = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  pinterest: "https://pinterest.com"
};
