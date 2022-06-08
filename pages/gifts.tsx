let event: {
  title: "Sample Event";
  description: "This is the sample event provided as an example only";
  location: "Portland, OR";
  startTime: "2016-09-16T20:15:00-04:00";
  endTime: "2016-09-16T21:45:00-04:00";
};

export default function Gifts() {
  return (
    <>
      <div className="pb-10 text-center justify-center">
        <h1 className="font-cormorant mb-6 text-5xl">Gifts</h1>

        <h2 className="font-cormorant text-xl mb-2">
          <span>
            As the cliche goes, your presence really will be our present on our
            big day. However, for those who wish to gift us with something, we
            are hoping to commission a Grahame Hurdwood painting of our
            favourite spot in Pembrokeshire (which we'll be passing on the walk
            to the wedding day swim).
          </span>
        </h2>

        
        <div className="flex flex-col justify-center items-center mb-5 mt-10">
          <img src={"/separator.png"} />
        </div>
      </div>

      <div className="pb-20 text-center justify-center">
        <div className="flex flex-col justify-center items-center mb-5">
          <img src={"/abereiddy-image.jpeg"} />
        </div>
      </div>

      <div className="py-10 grid gap-10 lg:gap-10 font-montserrat" />
    </>
  );
}
