export async function GET() {
  // The data your homepage needs
  const homeData = {
    hero: {
      title: 'Make Your Life',
      hightLightedTitle: 'More Nature',
      aboutText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quas officiis laudantium ipsam dolorum vitae perspiciatis vel, mollitia quisquam dignissimos quibusdam, veniam adipisci vero hic. Voluptate harum nostrum beatae ipsum!',
      buttonTitle: 'Shop Now',
    },

    productsSection: {
      title: 'Best seller ',
      hightLightedTitle: 'flowers',
      products: [
        {
          id: 1,
          title: 'Candelabra Aloe',
          description:
            'Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes.',
          price: '95',
          image: '/images/p11-1-600x600.jpg',
          disciount: '20%',
          isAvailable: true,
          category: 'Candelabra',
          rating: 3.5,
        },
        {
          id: 2,
          title: 'Golden Pothos',
          description:
            'Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes.',
          price: '95',
          image: '/images/p2-1-600x600.jpg',
          disciount: '20%',
          isAvailable: true,
          category: 'Candelabra',
          rating: 3,
        },
        {
          id: 3,
          title: 'Snake Plant',
          description:
            'Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes.',
          price: '95',
          image: '/images/p3-1-600x600.jpg',
          disciount: '20%',
          isAvailable: true,
          category: 'Candelabra',
          rating: 4,
        },
        {
          id: 4,
          title: 'Candelabra Aloe',
          description:
            'Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes.',
          price: '95',
          image: '/images/p9-1-600x600.jpg',
          disciount: '20%',
          isAvailable: true,
          category: 'Candelabra',
          rating: 1,
        },
        {
          id: 5,
          title: "Candelabra Aloe",
          description:
            "Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes.",
          price: "95",
          image: "/images/p9-1-600x600.jpg",
          disciount: "20%",
          isAvailable: true,
          category: "Candelabra",
          rating: 4,
        },
      ],
    },

    about: {
      heading: 'About Us',
      text: 'We are a learning platform dedicated to teaching modern web development.',
    },

    testimonials: [
      {
        name: 'John Doe',
        feedback: 'Amazing training sessions!',
      },
      {
        name: 'Sara Ahmed',
        feedback: 'The instructor explains everything clearly.',
      },
    ],
  };

  return Response.json(homeData);
}
