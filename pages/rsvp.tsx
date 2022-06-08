let event: {
  title: "Sample Event";
  description: "This is the sample event provided as an example only";
  location: "Portland, OR";
  startTime: "2016-09-16T20:15:00-04:00";
  endTime: "2016-09-16T21:45:00-04:00";
};

export default function RSVP() {
  return (
    <>
      <div className="pb-10 text-center justify-center">
        <h1 className="font-cormorant mb-6 text-5xl">RSVP</h1>

        <h2 className="font-cormorant text-xl mb-2">
          <span>
            Please let us know as soon as possible if you can make our wedding
            weekend by emailing:{" "}
          </span>
          <a
            className="underline"
            href="mailto:dattiewedding@gmail.com?bcc=harrietsime@gmail.com&subject=RSVP%3A%20Dan%20and%20Hattie%20wedding&body=Name%3A%0AI%20can%20attend%20the%20Friday%20evening%3A%0AI%20can%20attend%20the%20Saturday%20swim%20(please%20specify%20if%20you%20need%20a%20wetsuit)%3A%0AI%20can%20attend%20the%20wedding%3A%0ADietary%20requirements%3A"
          >
            dattiewedding@gmail.com
          </a>
        </h2>

        <div className="flex">
          <div className="m-auto">
            <a
              href="mailto:dattiewedding@gmail.com?bcc=harrietsime@gmail.com&subject=RSVP%3A%20Dan%20and%20Hattie%20wedding&body=Name%3A%0AI%20can%20attend%20the%20Friday%20evening%3A%0AI%20can%20attend%20the%20Saturday%20swim%20(please%20specify%20if%20you%20need%20a%20wetsuit)%3A%0AI%20can%20attend%20the%20wedding%3A%0ADietary%20requirements%3A"
              className="mt-10 block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              RSVP Here
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-5 mt-10">
          <img src={"/separator.png"} />
        </div>
      </div>

      <div className="py-10 grid gap-10 lg:gap-10 font-montserrat" />
    </>
  );
}
