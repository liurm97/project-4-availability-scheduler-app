import CreateEventForm from "@/components/eventform/CreateEventForm";
import FAQ from "@/components/FAQ";
import HeroTitle from "@/components/HeroTitle";

// NextJS defaults to pre-rendering pages which may be the reason for the new Date() in CreateEventForm not updating
// Manually override default behaviour and sets this page to dynamic page so that it loads the latest date on every load
export const dynamic = "force-dynamic";
export const revalidate = 0;

var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function HomePage() {
  const localTimeZone = dayjs.tz.guess();
  const localTodayDate: Date = dayjs().tz(localTimeZone).format("YYYY-MM-DD");
  console.log(
    `HomePage:: localTimeZone:: ${localTimeZone}, localTodayDate:: ${localTodayDate}`
  );
  return (
    <div className="bg-zinc-950 w-screen">
      <main className="w-full min-h-lvh container flex flex-col lg:flex-row items-center justify-between px-12 lg:px-20 md:pb-12">
        <div className="mt-0 lg:-mt-6 ml-0 lg:ml-6">
          <HeroTitle />
        </div>
        <div className="mt-4 mb-20 lg:mb-0">
          <CreateEventForm dateToDisable={localTodayDate} />
        </div>
      </main>
      <div id="faq" className="w-full bg-white py-2">
        <FAQ />
      </div>
    </div>
  );
}
