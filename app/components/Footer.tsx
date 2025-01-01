import Link from "next/link";

const Footer = () => {
  const links = [
    {
      title: "ABOUT",
      links: [
        "How Airbnb works",
        "Newsroom",
        "Investors",
        "Airbnb Plus",
        "Airbnb Luxe",
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        "Accessibility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      title: "HOST",
      links: [
        "Try hosting",
        "AirCover for Hosts",
        "Explore hosting resources",
        "How to host responsibly",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Help Center",
        "Trust & Safety",
        "Selling on Airbnb",
        "Buying on Airbnb",
      ],
    },
  ];

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
        {links.map((link) => (
          <div key={link.title} className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">{link.title}</h5>
            {link.links.map((item) => (
              <Link key={item} href={item} className="block">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
