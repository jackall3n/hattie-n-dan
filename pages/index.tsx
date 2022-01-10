export default function Home() {
  const accommodation = [
    {
      image: "/pizza.png",
      title: "Pizza & Champagne Night",
      subtitle: "09/10/22 - Friday @ 7pm. Dress code: Smart casual",
      description:
        "We will be kicking off celebrations with a wood-fired pizza and champagne night with all wedding guests at Dan’s mum’s campsite (plus Katie Marshall brownies to finish off).",
      contact: {
        address: "Coastal Stay, Noddfa Farm, Pembrokeshire, SA62 6DP",
      },
    },
    {
      image:
        "/beach.png",
      title: "Wedding Day Swim",
      subtitle:
        "10/10/22 - Saturday @ 11am. Dress code: Warm jumpers & swim suits",
      description:
        "We would love for all guests to join us for a swim at Trellwyn beach. We will meet at the quay in Porthgain at 11am and, for those in need of wetsuits and/or surfboards, Hattie’s uncle Nick will be on hand with his Ma Sime’s Surf Hut van next to The Shed restaurant.",
      contact: {
        address: "The Shed, Porthgain, Haverfordwest, Pembrokeshire, SA62 5BL",
      },
    },
    {
      image: "/day_guests.png",
      title: "Wedding: Day Guests",
      subtitle: "10/10/22 - Saturday @ 3:30pm. Dress code: Cocktail attire",
      description:
        "Please join us at 3:30 pm at Druidstone Hotel for champagne, canapés and speeches followed by a classic Druidstone Feast. Please note: there will be no wedding ceremony as we will be doing this privately in the days before.",
      contact: {
        address: "The Druidstone, Haverfordwest, SA62 3NE",
      },
    },
    {
      image: "/evening.png",

      title: "Wedding: Evening Guests",
      subtitle: "10/10/22 - Saturday @ 7:00pm. Dress code: Cocktail attire",
      description:
        "Please join us at Druidstone from 7pm for drinks, dancing and live music provided by Jo and Dan Messore, plus a special Deckstepper’s reunion. A light evening buffet will be provided.",
      contact: {
        address: "The Druidstone, Haverfordwest, SA62 3NE",
      },
    },
  ];

  const taxis = [
    {
      name: "Frank's Cabs",
      phone: "07974 391522",
      // link: "https://stdavids-taxi.co.uk"
    },
    {
      name: "Morgan's Taxis",
      phone: "07788 292976",
      // link: "https://stdavidstaxis.wales"
    },
    {
      name: "Tony's Taxis",
      phone: "01437 720931",
    },
  ];

  return (
    <>
      <div className="pb-10 text-center justify-center">
        <h1 className="font-cormorant mb-6 text-5xl">The Weekend</h1>

        <h2 className="font-cormorant text-xl mb-10">
          We're finally getting married! Our informal celebrations will take
          place over the weekend of September 10th, 2022.
        </h2>

        <div className="flex flex-col justify-center items-center mb-5">
          <img src={"/separator.png"} />
        </div>
        <div className="whitespace-pre-wrap font-lato"></div>
      </div>

      <div className="py-10 grid gap-10 lg:gap-10 font-montserrat">
        {accommodation.map((accommodation, index) => (
          <div
            key={index}
            className="grid gap-0 md:gap-10 grid-cols-1 md:grid-cols-2 shadow-md rounded-md md:rounded-none overflow-hidden md:shadow-none"
          >
            <div className="flex items-start justify-end">
              <img src={accommodation.image} alt="coastal" className="w-full" />
            </div>

            <div className="text-left md:p-0 p-5">
              <h3 className="font-cormorant text-3xl">{accommodation.title}</h3>
              <h4 className="font-cormorant text-base">
                {accommodation.subtitle}
              </h4>

              <div className="font-lato">
                <p className="py-5 md:py-3 whitespace-pre-wrap">
                  {accommodation.description}
                </p>

                <div
                  className="grid gap-2 text-sm items-center justify-center"
                  style={{ gridTemplateColumns: "auto 1fr" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <a
                    href={`http://maps.google.com/?q=${encodeURIComponent(
                      accommodation.contact.address
                    )}`}
                    target="_blank"
                  >
                    {accommodation.contact.address}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-10 text-center">
          <h1 className="font-cormorant text-4xl mb-5">Taxis</h1>

          <div className="flex flex-col justify-center items-center">
            <img src={"/separator.png"} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {taxis.map((taxi) => (
                <div key={taxi.name}>
                  <div className="font-cormorant text-2xl mb-2">
                    {taxi.name}
                  </div>
                  <div
                    className="grid gap-2 text-sm"
                    style={{ gridTemplateColumns: "auto 1fr" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>

                    <a href={`tel:${taxi.phone}`}>{taxi.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
