import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";
import Map from "../components/Map";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formattedStartDate;
  let formattedEndDate;

  if (startDate && endDate) {
    formattedStartDate = format(new Date(startDate), "dd MMM yy");
    formattedEndDate = format(new Date(endDate), "dd MMM yy");
  }

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await getSearchResult();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>
        <section className="mb-6">
          <div className="container flex">
            <div className="pt-14 pr-4">
              <p className="text-xs">
                300+ stays - {range} - for {numOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">
                Stays in {location}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                {filters.map((filter) => (
                  <button type="button" key={filter} className="filter-btn">
                    {filter}
                  </button>
                ))}
              </div>

              <div>
                {searchResultData?.map((listing) => (
                  <ListingCard
                    key={listing.title}
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                ))}
              </div>
            </div>

            <div className="hidden xl:inline-flex xl:min-w-[600px]">
              <Map searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
