// College configuration with redirect URLs
export const colleges = [
  {
    id: 'rvce',
    name: 'RV College of Engineering',
    slug: 'rvce',
    redirect_url: 'https://sumukhaai.com',
    logo: '/logos/rvce.png'
  },
  {
    id: 'bnmit',
    name: 'BNM Institute of Technology',
    slug: 'bnmit',
    redirect_url: 'https://sumukhaai.com',
    logo: '/logos/bnmit.png'
  },
  {
    id: 'dsce',
    name: 'Dayananda Sagar College of Engineering',
    slug: 'dsce',
    redirect_url: 'https://sumukhaai.com',
    logo: '/logos/dsce.png'
  },
  {
    id: 'sjbit',
    name: 'SJB Institute of Technology',
    slug: 'sjbit',
    redirect_url: 'https://sumukhaai.com',
    logo: '/logos/sjbit.png'
  },
  {
    id: 'msrit',
    name: 'MS Ramaiah Institute of Technology',
    slug: 'msrit',
    redirect_url: 'https://sumukhaai.com',
    logo: '/logos/msrit.png'
  }
];

// Function to get college by slug
export const getCollegeBySlug = (slug) => {
  return colleges.find(college => college.slug.toLowerCase() === slug.toLowerCase());
};

// Function to get all college slugs for routing
export const getCollegeSlugs = () => {
  return colleges.map(college => college.slug);
};
