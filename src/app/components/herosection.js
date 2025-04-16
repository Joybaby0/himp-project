

export default function HeroSection() {
    // Data for the cards
    const cards = [
      {
        title: "Own a Home",
        text: "Find properties to buy",
        buttonText: "Read More",
        image: "/img1.jpg", // Replace with your actual images
      },
      {
        title: "Mortgage Calculator",
        text: "Determine your eligibility for a mortgage via our mortgage calculator",
        buttonText: "Read More",
        image: "/img2.jpg", // Replace with your actual images
      },
      {
        title: "Housing Market Directory",
        text: "Get easy access to Housing Market Professionals and Institutions",
        buttonText: "Read More",
        image: "/img3.jpg", // Replace with your actual images
      },
    ];
  
    return (
      <>
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center bg-no-repeat text-white pt-20"
          style={{
            backgroundImage: "url('/heroimg.jpg')", // Ensure this exists in /public
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-opacity-50 z-10" />
  
          {/* Text Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
            <p className="text-sm uppercase tracking-widest">
              HOUSING MARKET INFORMATION PORTAL
            </p>
            <h1 className="text-[A3FOD2] text-3xl md:text-7xl font-bold my-4 text-emerald-200">Housing Research</h1>
            <p className="text-base md:text-lg max-w-xl mx-auto">
              Navigate the housing landscape with our research platform
            </p>
            <button className="mt-6 px-6 py-3 bg-[#08662F] text-white rounded-md transition font-semibold">
              Learn More
            </button>
          </div>
        </section>
  
        {/* Cards Section */}
        <div className="w-full px-4 -mt-16 md:-mt-24 lg:-mt-28 relative z-30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg w-full md:w-[28%] text-left flex flex-col overflow-hidden"
              >
                <div className="px-5 py-6 text-gray-800 flex flex-col justify-between flex-grow bg-[#F4F7FA]">
                  <div>
                    <h3 className="text-base font-bold mb-1 mt-2">{card.title}</h3>
                    <p className="text-sm mb-3 leading-loose">{card.text}</p>
                  </div>
                  <button className="px-2 py-2 bg-white text-green-800 rounded border border-green-800 transition w-max">
                    {card.buttonText}
                  </button>

                  <div className="flex justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-34 object-cover rounded-lg mt-4"
                  />
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  