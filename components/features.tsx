export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore Our Sports Offerings</h2>
            <p className="text-xl text-gray-400">Discover a variety of sports available for you.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* Cricket */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-100 h-100 mb-4" src="images/cricket.png" alt="Cricket" />
              <h4 className="h4 mb-2">CRICKET</h4>
            </div>

            {/* Football */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-100 h-100 mb-4" src="images/football.png" alt="Football" />
              <h4 className="h4 mb-2">FOOTBALL</h4>
            </div>

            {/* Tennis */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-100 h-100 mb-4" src="images/gym.png" alt="Tennis" />
              <h4 className="h4 mb-2">GYM</h4>
            </div>

            {/* Add more items as needed */}

          </div>

        </div>
      </div>
    </section>
  );
}
