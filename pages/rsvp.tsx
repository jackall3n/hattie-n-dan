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
            Please let us know by Sunday February 6th if you can make our
            wedding weekend by emailing:{" "}
          </span>
          <a
            className="underline"
            href="mailto:dattiewedding@gmail.com?subject=RSVP: Dan and Hattie wedding&body=Name:%0D%0AI+can+attend+the+Friday+evening:%0D%0AI+can+attend+the+Saturday+swim (please specify if you need a wetsuit):%0D%0AI+can+attend+the+wedding:%0D%0ADietary requirements:"
          >
            dattiewedding@gmail.com
          </a>
        </h2>

        <div className="flex">
          <div className="m-auto">
            <a
              href="mailto:dattiewedding@gmail.com?subject=RSVP: Dan and Hattie wedding&body=Name:%0D%0AI+can+attend+the+Friday+evening:%0D%0AI+can+attend+the+Saturday+swim (please specify if you need a wetsuit):%0D%0AI+can+attend+the+wedding:%0D%0ADietary requirements:"
              className="mt-10 block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              RSVP
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
